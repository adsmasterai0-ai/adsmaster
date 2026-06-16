import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "../../../lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      userId,
      plan,
    } = await req.json();

    console.log("========== VERIFY PAYMENT ==========");
    console.log("USER ID:", userId);
    console.log("PLAN:", plan);
    console.log("ORDER ID:", razorpay_order_id);
    console.log("PAYMENT ID:", razorpay_payment_id);

    // Verify Razorpay Signature
    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    const verified = generatedSignature === razorpay_signature;
    console.log("SIGNATURE VERIFIED:", verified);

    if (!verified) {
      return NextResponse.json(
        { success: false, error: "Payment verification failed" },
        { status: 400 }
      );
    }

    // Expiry Date
    const endDate = new Date();
    endDate.setDate(endDate.getDate() + 30);

    // ✅ Pehle auth user ki email lo
    const { data: authUser, error: authError } = await supabaseAdmin.auth.admin.getUserById(userId);
    
    if (authError || !authUser?.user?.email) {
      console.log("AUTH USER ERROR:", authError);
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const userEmail = authUser.user.email;
    console.log("USER EMAIL:", userEmail);

    // ✅ Email se profile dhundo
    const { data: existingProfile, error: findError } = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("email", userEmail)
      .maybeSingle();

    console.log("EXISTING PROFILE:", existingProfile);
    console.log("FIND ERROR:", findError);

    if (!existingProfile) {
      // Profile exist nahi karta - insert karo
      const { error: insertError } = await supabaseAdmin
        .from("profiles")
        .insert({
          id: existingProfile?.id || userId,
          email: userEmail,
          plan,
          ai_chats_used: 0,
          screenshots_used: 0,
          campaigns_used: 0,
          plan_expires_at: endDate,
        });
      console.log("INSERT ERROR:", insertError);
    } else {
      // ✅ Profile mila - email se update karo
      const { data: updatedProfile, error: updateError } = await supabaseAdmin
        .from("profiles")
        .update({
          plan,
          ai_chats_used: 0,
          screenshots_used: 0,
          campaigns_used: 0,
          plan_expires_at: endDate,
        })
        .eq("email", userEmail)  // ✅ email se match
        .select();

      console.log("UPDATE RESULT:", updatedProfile);
      console.log("UPDATE ERROR:", updateError);
    }

    // Final profile fetch
    const { data: profile, error: profileError } = await supabaseAdmin
      .from("profiles")
      .select("*")
      .eq("email", userEmail)
      .single();

    console.log("FINAL PROFILE:", profile);
    console.log("PROFILE ERROR:", profileError);

    // Save Subscription
    const subscriptionResult = await supabaseAdmin
      .from("subscriptions")
      .upsert({
        user_id: existingProfile?.id || userId,
        plan,
        status: "active",
        razorpay_payment_id,
        razorpay_order_id,
        start_date: new Date(),
        end_date: endDate,
      });

    console.log("SUBSCRIPTION RESULT:", subscriptionResult);
    console.log("========== PAYMENT SUCCESS ==========");

    return NextResponse.json({
      success: true,
      profile,
    });

  } catch (error) {
    console.log("VERIFY PAYMENT ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}