"use client";

export default function RemainingCredits({
  profile,
}: any) {
  const chatLimit =
    profile.plan === "pro" ? 1000 : 10;

  const screenshotLimit =
    profile.plan === "pro" ? 500 : 5;

  const campaignLimit =
    profile.plan === "pro" ? 500 : 5;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "20px",
        padding: "25px",
      }}
    >
      <h2>Remaining Credits</h2>

      <p>
        Chats Left:
        {chatLimit -
          (profile.ai_chats_used || 0)}
      </p>

      <p>
        Screenshots Left:
        {screenshotLimit -
          (profile.screenshots_used || 0)}
      </p>

      <p>
        Campaigns Left:
        {campaignLimit -
          (profile.campaigns_used || 0)}
      </p>
    </div>
  );
}