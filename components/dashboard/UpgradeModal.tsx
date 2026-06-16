"use client";

import { useRouter } from "next/navigation";

export default function UpgradeModal({
  open,
  message = "Upgrade to Pro",
}: {
  open: boolean;
  message?: string;
}) {
  const router = useRouter();

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background:
          "rgba(0,0,0,0.6)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          width: "420px",
          background: "#fff",
          borderRadius: "24px",
          padding: "30px",
          textAlign: "center",
          boxShadow:
            "0 20px 60px rgba(0,0,0,0.25)",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 800,
            marginBottom: "12px",
          }}
        >
          🚀 Upgrade Required
        </h2>

  <p
  style={{
    color: "#64748b",
    marginBottom: "25px",
    lineHeight: 1.6,
  }}
>
  {message}
</p>

        <button
          onClick={() =>
            router.push("/pricing")
          }
          style={{
            width: "100%",
            padding: "14px",
            border: "none",
            borderRadius: "14px",
            cursor: "pointer",
            background:
              "linear-gradient(135deg,#2563eb,#4f46e5)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "15px",
          }}
        >
          Upgrade to Pro
        </button>
      </div>
    </div>
  );
}