import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { supabaseAdmin } from "../../../lib/supabase-admin";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();

    const signature =
      req.headers.get(
        "x-razorpay-signature"
      ) || "";

    const expectedSignature =
      crypto
        .createHmac(
          "sha256",
          process.env
            .RAZORPAY_WEBHOOK_SECRET!
        )
        .update(body)
        .digest("hex");

    if (
      signature !==
      expectedSignature
    ) {
      return NextResponse.json(
        {
          success: false,
          error:
            "Invalid webhook signature",
        },
        {
          status: 400,
        }
      );
    }

    const event =
      JSON.parse(body);

    if (
      event.event ===
      "payment.captured"
    ) {
      const payment =
        event.payload.payment.entity;

      const userId =
        payment.notes?.userId;

      const plan =
        payment.notes?.plan;

      if (!userId || !plan) {
        return NextResponse.json({
          success: true,
        });
      }

      const endDate =
        new Date();

      endDate.setDate(
        endDate.getDate() + 30
      );

      await supabaseAdmin
        .from("profiles")
        .update({
          plan,
          ai_chats_used: 0,
          screenshots_used: 0,
          campaigns_used: 0,
          plan_expires_at:
            endDate,
        })
        .eq("id", userId);

await supabaseAdmin
  .from("subscriptions")
  .upsert({
    user_id: userId,
    plan,
    status: "active",
    razorpay_payment_id:
      payment.id,
    razorpay_order_id:
      payment.order_id,
    start_date:
      new Date(),
    end_date:
      endDate,
  });
    }

    if (
      event.event ===
      "payment.failed"
    ) {
      console.log(
        "Payment Failed"
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}