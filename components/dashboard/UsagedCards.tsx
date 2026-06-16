"use client";

export default function UsageCards({
  profile,
}: any) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit,minmax(250px,1fr))",
        gap: "20px",
      }}
    >
      <Card
        title="AI Chats"
        value={profile.ai_chats_used}
      />

      <Card
        title="Screenshots"
        value={profile.screenshots_used}
      />

      <Card
        title="Campaigns"
        value={profile.campaigns_used}
      />
    </div>
  );
}

function Card({
  title,
  value,
}: any) {
  return (
    <div
      style={{
        background: "#fff",
        padding: "25px",
        borderRadius: "20px",
        border: "1px solid #e5e7eb",
      }}
    >
      <h3>{title}</h3>

      <h1>{value}</h1>
    </div>
  );
}