import { supabaseAdmin }
from "./supabase-admin";

export async function checkSubscription(
  userId: string
) {
  const { data } =
    await supabaseAdmin
      .from("subscriptions")
      .select("*")
      .eq("user_id", userId)
      .single();

  if (!data) return;

  const now = new Date();

  if (
    data.end_date &&
    new Date(data.end_date) < now
  ) {
    await supabaseAdmin
      .from("profiles")
      .update({
        plan: "free",
        ai_chats_used: 0,
  screenshots_used: 0,
  campaigns_used: 0,
      })
      .eq("id", userId);

    await supabaseAdmin
      .from("subscriptions")
      .update({
        status: "expired",
      })
      .eq("user_id", userId);
  }
}