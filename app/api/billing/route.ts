import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "../../../lib/supabase-admin";

export async function POST(req: NextRequest) {
  const { userId } = await req.json();

  const { data: subscription } = await supabaseAdmin
    .from("subscriptions")
    .select("*")
    .eq("user_id", userId)
    .order("end_date", { ascending: false })
    .limit(1)
    .maybeSingle();

  const { data: profile } = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

  return NextResponse.json({
    subscription,
    profile,
  });
}
