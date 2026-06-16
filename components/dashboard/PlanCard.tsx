"use client";

export default function PlanCard({
  profile,
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
      <h2>Current Plan</h2>

      <h1>
        {profile.plan.toUpperCase()}
      </h1>
    </div>
  );
}