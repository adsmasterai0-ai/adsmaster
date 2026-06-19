"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const goToBilling = () => {
    setLoading(true);
    router.push("/billing");
  };

  
  const goToPricing = () => {
  router.push("/#pricing");
};

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: "4px",
          zIndex: 100,
          margin: "4px 10px",
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(16px)",
          border: "1px solid #e5e7eb",
          borderRadius: "14px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "100%",
            margin: "0 auto",
            padding: "12px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Left Side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <button
              onClick={() => router.push("/")}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 16px",
                borderRadius: "10px",
                border: "1px solid #e2e8f0",
                background: "#fff",
                cursor: "pointer",
                fontWeight: 600,
                fontSize: "14px",
                color: "#374151",
                fontFamily: "'Sora', 'Inter', sans-serif",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
                transition: "all 0.15s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#f1f5f9";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#c7d2fe";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background =
                  "#fff";
                (e.currentTarget as HTMLButtonElement).style.borderColor =
                  "#e2e8f0";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="#6366f1"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back
            </button>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <img
                src="/logo.png"
                alt="AdsMaster AI"
                style={{
                  width: "38px",
                  height: "38px",
                  borderRadius: "20px",
                  objectFit: "cover",
                  boxShadow:
                    "0 10px 25px rgba(37,99,235,0.25)",
                }}
              />

              <div
                style={{
                  fontSize: "25px",
                  fontWeight: 900,
                  color: "#111827",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                AdsMaster AI
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <button
  onClick={goToPricing}
  style={{
    padding: "12px 22px",
    borderRadius: "14px",
    border: "none",
    background:
      "linear-gradient(135deg,#f59e0b,#f97316)",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "800",
    fontSize: "15px",
    boxShadow:
      "0 10px 25px rgba(249,115,22,0.35)",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "all 0.2s ease",
  }}
>
  👑 Upgrade Pro
</button>

            <button
              onClick={goToBilling}
              disabled={loading}
              style={{
                padding: "12px 22px",
                borderRadius: "14px",
                border: "none",
                background:
                  "linear-gradient(135deg,#2563eb,#1d4ed8)",
                color: "#fff",
                cursor: loading ? "not-allowed" : "pointer",
                fontWeight: "800",
                fontSize: "15px",
                opacity: loading ? 0.8 : 1,
                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.35)",
              }}
            >
              💳 Billing
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Loader */}
      {loading && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.75)",
            backdropFilter: "blur(2px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              width: "64px",
              height: "64px",
              border: "6px solid #e5e7eb",
              borderTop: "6px solid #2563eb",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </>
  );
}

