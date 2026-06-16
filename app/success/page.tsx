"use client";

import { useRouter } from "next/navigation";

export default function SuccessPage() {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "20px",
          textAlign: "center",
          maxWidth: "500px",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1
          style={{
            color: "#16a34a",
            fontSize: "40px",
            marginBottom: "20px",
          }}
        >
          ✅ Payment Successful
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#475569",
            marginBottom: "30px",
          }}
        >
          Your Pro Subscription is now active.
        </p>

        <button
          onClick={() =>
            router.push("/chat")
          }
          style={{
            background: "#2563eb",
            color: "white",
            border: "none",
            padding: "14px 24px",
            borderRadius: "12px",
            cursor: "pointer",
            fontWeight: "600",
          }}
        >
          Go To Dashboard
        </button>
      </div>
    </div>
  );
}