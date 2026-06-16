import { supabaseAdmin } from "./supabase-admin";

export async function getUserPlan(userId: string) {
  const { data } = await supabaseAdmin
    .from("profiles")
    .select("*")
    .eq("id", userId)
    .single();

    console.log("GET USER PLAN RESULT:", data);
    
  return {
    userId: data?.id,
    plan: data?.plan || "free",
    ai_chats_used: data?.ai_chats_used || 0,
    screenshots_used: data?.screenshots_used || 0,
    campaigns_used: data?.campaigns_used || 0,
  };
}