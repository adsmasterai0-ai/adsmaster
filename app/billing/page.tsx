"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function BillingPage() {
  const router = useRouter();
  const [subscription, setSubscription] = useState<any>(null);
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    loadBilling();
  }, []);

  const loadBilling = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;

    const res = await fetch("/api/billing", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: user.id }),
    });

    const data = await res.json();
    setSubscription(data.subscription);
    setProfile(data.profile);
  };

  if (!subscription || !profile) {
    return (
      <div
        style={{
          minHeight: "100vh",
          background: "#f8fafc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <div
          style={{
            width: "44px",
            height: "44px",
            border: "3px solid #e0e7ff",
            borderTopColor: "#6366f1",
            borderRadius: "50%",
            animation: "spin 0.8s linear infinite",
          }}
        />
        <p
          style={{
            color: "#94a3b8",
            fontSize: "14px",
            fontFamily: "'Sora', 'Inter', sans-serif",
            letterSpacing: "0.04em",
          }}
        >
          Loading billing details…
        </p>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const planColor =
    subscription.plan === "pro"
      ? "#6366f1"
      : subscription.plan === "enterprise"
      ? "#f59e0b"
      : "#3b82f6";

  const planBg =
    subscription.plan === "pro"
      ? "#eef2ff"
      : subscription.plan === "enterprise"
      ? "#fffbeb"
      : "#eff6ff";

  const usageItems = [
    {
      label: "AI Chats",
      used: profile.ai_chats_used ?? 0,
      total: 100,
      icon: "💬",
    },
    {
      label: "Screenshots",
      used: profile.screenshots_used ?? 0,
      total: 50,
      icon: "📸",
    },
    {
      label: "Campaigns",
      used: profile.campaigns_used ?? 0,
      total: 20,
      icon: "📣",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f8fafc",
        fontFamily: "'Sora', 'Inter', 'Segoe UI', sans-serif",
        color: "#0f172a",
      }}
    >
      {/* Top Navbar Bar */}
      <div
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(255,255,255,0.85)",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #e2e8f0",
          padding: "0 32px",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Back Button — top left */}
        <button
          onClick={() => router.push("/chat")}
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
            (e.currentTarget as HTMLButtonElement).style.background = "#f1f5f9";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#c7d2fe";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background = "#fff";
            (e.currentTarget as HTMLButtonElement).style.borderColor = "#e2e8f0";
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </button>

        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="/logo.png"
            alt="AdsMaster"
            style={{
              width: "32px",
              height: "32px",
              objectFit: "contain",
              borderRadius: "20px",
            }}
          />
          <span
            style={{
              fontWeight: 700,
              fontSize: "16px",
              color: "#0f172a",
              letterSpacing: "-0.01em",
            }}
          >
            AdsMaster
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "48px 24px 80px",
        }}
      >
        {/* Page Header */}
        <div style={{ marginBottom: "36px" }}>
          <span
            style={{
              display: "inline-block",
              background: planBg,
              color: planColor,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              padding: "4px 12px",
              borderRadius: "20px",
              marginBottom: "12px",
            }}
          >
            Account & Billing
          </span>
          <h1
            style={{
              fontSize: "clamp(26px, 4vw, 38px)",
              fontWeight: 800,
              color: "#0f172a",
              margin: 0,
              letterSpacing: "-0.025em",
              lineHeight: 1.2,
            }}
          >
            Subscription Overview
          </h1>
          <p
            style={{
              marginTop: "8px",
              fontSize: "15px",
              color: "#64748b",
              fontWeight: 400,
            }}
          >
            Manage your plan, usage, and payment information.
          </p>
        </div>

        {/* Top Grid — Plan + Payment */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {/* Plan Card */}
          <div
            style={{
              background: "#ffffff",
              border: `1.5px solid ${planColor}33`,
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 4px 24px rgba(99,102,241,0.07)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Soft accent blob */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "200px",
                height: "200px",
                background: `radial-gradient(circle, ${planColor}18 0%, transparent 70%)`,
                borderRadius: "50%",
                pointerEvents: "none",
              }}
            />

            {/* Status Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "7px",
                background: planBg,
                border: `1px solid ${planColor}44`,
                borderRadius: "30px",
                padding: "5px 14px",
                marginBottom: "22px",
              }}
            >
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: planColor,
                  boxShadow: `0 0 6px ${planColor}88`,
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 700,
                  color: planColor,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {subscription.status}
              </span>
            </div>

            <h2
              style={{
                fontSize: "30px",
                fontWeight: 900,
                color: "#0f172a",
                margin: "0 0 4px",
                letterSpacing: "-0.03em",
              }}
            >
              {subscription.plan?.toUpperCase()} PLAN
            </h2>
            <p style={{ color: "#94a3b8", margin: 0, fontSize: "14px" }}>
              Your current subscription tier
            </p>

            <div
              style={{
                marginTop: "28px",
                paddingTop: "24px",
                borderTop: "1px solid #f1f5f9",
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              <Row
                label="Next Renewal"
                value={new Date(subscription.end_date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              />
              <Row
                label="Member Since"
                value={new Date(subscription.start_date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              />
            </div>
          </div>

          {/* Payment Card */}
          <div
            style={{
              background: "#ffffff",
              border: "1.5px solid #e2e8f0",
              borderRadius: "20px",
              padding: "32px",
              boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "26px" }}>
              <div
                style={{
                  width: "44px",
                  height: "44px",
                  background: "linear-gradient(135deg, #6366f1, #a78bfa)",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "20px",
                  flexShrink: 0,
                }}
              >
                💳
              </div>
              <div>
                <h2 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#0f172a" }}>
                  Payment Details
                </h2>
                <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
                  Transaction reference
                </p>
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <PaymentRow
                label="Payment ID"
                value={subscription.razorpay_payment_id ?? "—"}
                mono
              />
              <PaymentRow
                label="Order ID"
                value={subscription.razorpay_order_id ?? "—"}
                mono
              />
              <PaymentRow
                label="Purchase Date"
                value={new Date(subscription.start_date).toLocaleDateString("en-IN", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              />
            </div>
          </div>
        </div>

{/* Usage Stats */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid #e2e8f0",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "28px" }}>
          
          <img
  src="/logo.png"
  alt="AdsMaster"
  style={{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  }}
/>

            <div>
              <h2 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#0f172a" }}>
                Usage This Month
              </h2>
              <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
                Resets on your next renewal date
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
            }}
          >
            {usageItems.map((item) => {
              const pct = Math.min(Math.round((item.used / item.total) * 100), 100);
              const barColor =
                pct > 80 ? "#ef4444" : pct > 50 ? "#f59e0b" : "#10b981";
              const barBg =
                pct > 80 ? "#fef2f2" : pct > 50 ? "#fffbeb" : "#f0fdf4";

              return (
                <div
                  key={item.label}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "14px",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginBottom: "14px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "#374151",
                        display: "flex",
                        alignItems: "center",
                        gap: "7px",
                      }}
                    >
                      {item.icon} {item.label}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 700,
                        color: barColor,
                        background: barBg,
                        padding: "2px 8px",
                        borderRadius: "20px",
                      }}
                    >
                      {pct}%
                    </span>
                  </div>
                  <div
                    style={{
                      height: "6px",
                      background: "#e2e8f0",
                      borderRadius: "99px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${pct}%`,
                        height: "100%",
                        background: `linear-gradient(90deg, ${barColor}bb, ${barColor})`,
                        borderRadius: "99px",
                        transition: "width 0.6s ease",
                      }}
                    />
                  </div>
                  <p
                    style={{
                      margin: "10px 0 0",
                      fontSize: "12px",
                      color: "#94a3b8",
                    }}
                  >
                    {item.used} of {item.total} used
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Account Summary */}
        <div
          style={{
            background: "#ffffff",
            border: "1.5px solid #e2e8f0",
            borderRadius: "20px",
            padding: "32px",
            boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "26px" }}>
            <div
              style={{
                width: "44px",
                height: "44px",
                background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "20px",
                flexShrink: 0,
              }}
            >
              👤
            </div>
            <div>
              <h2 style={{ margin: 0, fontSize: "17px", fontWeight: 700, color: "#0f172a" }}>
                Account Summary
              </h2>
              <p style={{ margin: 0, fontSize: "13px", color: "#94a3b8" }}>
                Your profile and plan info
              </p>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "14px",
            }}
          >
            <SummaryChip label="Email" value={profile.email} />
            <SummaryChip
              label="Current Plan"
              value={profile.plan?.toUpperCase()}
              highlight={planColor}
              highlightBg={planBg}
            />
            <SummaryChip
              label="Plan Expires"
              value={new Date(profile.plan_expires_at).toLocaleDateString("en-IN", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Sub-components ─────────────────────────────────── */

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: 500 }}>{label}</span>
      <span style={{ fontSize: "13px", fontWeight: 700, color: "#1e293b" }}>{value}</span>
    </div>
  );
}

function PaymentRow({
  label,
  value,
  mono,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        padding: "12px 14px",
        background: "#f8fafc",
        borderRadius: "10px",
        border: "1px solid #e2e8f0",
      }}
    >
      <span
        style={{
          fontSize: "11px",
          color: "#94a3b8",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {label}
      </span>
      <span
        style={{
          fontSize: "13px",
          color: "#1e293b",
          fontFamily: mono ? "'JetBrains Mono', 'Courier New', monospace" : "inherit",
          wordBreak: "break-all",
          fontWeight: 500,
        }}
      >
        {value}
      </span>
    </div>
  );
}

function SummaryChip({
  label,
  value,
  highlight,
  highlightBg,
}: {
  label: string;
  value: string;
  highlight?: string;
  highlightBg?: string;
}) {
  return (
    <div
      style={{
        padding: "18px 20px",
        background: highlightBg ?? "#f8fafc",
        borderRadius: "14px",
        border: highlight ? `1.5px solid ${highlight}44` : "1.5px solid #e2e8f0",
      }}
    >
      <p
        style={{
          margin: "0 0 6px",
          fontSize: "11px",
          color: "#94a3b8",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontWeight: 600,
        }}
      >
        {label}
      </p>
      <p
        style={{
          margin: 0,
          fontSize: "15px",
          fontWeight: 800,
          color: highlight ?? "#0f172a",
          letterSpacing: "-0.01em",
        }}
      >
        {value}
      </p>
    </div>
  );
}























// "use client";

// import { useEffect, useState } from "react";
// import { supabase } from "../../lib/supabase";
// import { useRouter} from "next/navigation";


// export default function BillingPage() {
//   const router = useRouter ();
//   const [subscription, setSubscription] = useState<any>(null);
//   const [profile, setProfile] = useState<any>(null);

//   useEffect(() => {
//     loadBilling();
//   }, []);

//   const loadBilling = async () => {
//     const {
//       data: { user },
//     } = await supabase.auth.getUser();

//     if (!user) return;

//     const res = await fetch("/api/billing", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ userId: user.id }),
//     });

//     const data = await res.json();
//     setSubscription(data.subscription);
//     setProfile(data.profile);
//   };

//   if (!subscription || !profile) {
//     return (
//       <div
//         style={{
//           minHeight: "100vh",
//           background: "#f8fafc",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           gap: "20px",
//         }}
//       >
//         <div
//           style={{
//             width: "52px",
//             height: "52px",
//             border: "4px solid rgba(255,255,255,0.1)",
//             borderTopColor: "#a78bfa",
//             borderRadius: "50%",
//             animation: "spin 0.9s linear infinite",
//           }}
//         />
//         <p
//           style={{
//             color: "rgba(255,255,255,0.5)",
//             fontSize: "15px",
//             letterSpacing: "0.08em",
//             fontFamily: "Inter, sans-serif",
//           }}
//         >
//           Loading your billing details…
//         </p>
//         <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
//       </div>
//     );
//   }

//   const planColor =
//     subscription.plan === "pro"
//       ? "#a78bfa"
//       : subscription.plan === "enterprise"
//       ? "#f59e0b"
//       : "#60a5fa";

//   const usageItems = [
//     {
//       label: "AI Chats",
//       used: profile.ai_chats_used ?? 0,
//       total: 100,
//       icon: "💬",
//     },
//     {
//       label: "Screenshots",
//       used: profile.screenshots_used ?? 0,
//       total: 50,
//       icon: "📸",
//     },
//     {
//       label: "Campaigns",
//       used: profile.campaigns_used ?? 0,
//       total: 20,
//       icon: "📣",
//     },
//   ];

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         background: "linear-gradient(160deg, #0f0c29 0%, #302b63 55%, #1a1a2e 100%)",
//         fontFamily: "'Inter', 'Segoe UI', sans-serif",
//         color: "#f1f5f9",
//       }}
//     >
      
//       {/* <BillingNavbar /> */}

//       {/* Main content */}
//       <div
//         style={{
//           maxWidth: "1200px",
//           margin: "0 auto",
//           padding: "48px 24px 80px",
//         }}
//       >

//       <div
//   style={{
//     marginBottom: "25px",
//   }}
// >
//   <button
//     onClick={() => router.push("/chat")}
//     style={{
//       padding: "12px 20px",
//       borderRadius: "12px",
//       border: "1px solid #e5e7eb",
//       background: "#ffffff",
//       cursor: "pointer",
//       fontWeight: "700",
//       fontSize: "15px",
//       boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
//     }}
//   >
//     ← Back
//   </button>
// </div>


//         {/* Header */}
//         <div style={{ marginBottom: "40px" }}>
//           <p
//             style={{
//               fontSize: "12px",
//               letterSpacing: "0.18em",
//               textTransform: "uppercase",
//               color: planColor,
//               marginBottom: "10px",
//               fontWeight: 600,
//             }}
//           >
//             Account & Billing
//           </p>
//           <h1
//             style={{
//               fontSize: "clamp(28px, 4vw, 42px)",
//               fontWeight: 800,
//               background: "linear-gradient(90deg, #fff 40%, #a78bfa)",
//               WebkitBackgroundClip: "text",
//               WebkitTextFillColor: "transparent",
//               margin: 0,
//               lineHeight: 1.15,
//             }}
//           >
//             Subscription Overview
//           </h1>
//         </div>

//         {/* Top grid — Plan + Payment */}
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//             gap: "20px",
//             marginBottom: "20px",
//           }}
//         >
//           {/* Plan Card */}
//           <div
//             style={{
//               background: "rgba(255,255,255,0.04)",
//               border: `1px solid ${planColor}33`,
//               borderRadius: "20px",
//               padding: "32px",
//               backdropFilter: "blur(12px)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             {/* Glow blob */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-40px",
//                 right: "-40px",
//                 width: "160px",
//                 height: "160px",
//                 background: `radial-gradient(circle, ${planColor}44 0%, transparent 70%)`,
//                 borderRadius: "50%",
//                 pointerEvents: "none",
//               }}
//             />
//             <div
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "8px",
//                 background: `${planColor}22`,
//                 border: `1px solid ${planColor}55`,
//                 borderRadius: "30px",
//                 padding: "5px 14px",
//                 marginBottom: "20px",
//               }}
//             >
//               <span
//                 style={{
//                   width: "7px",
//                   height: "7px",
//                   borderRadius: "50%",
//                   background: planColor,
//                   boxShadow: `0 0 8px ${planColor}`,
//                 }}
//               />
//               <span
//                 style={{
//                   fontSize: "12px",
//                   fontWeight: 700,
//                   color: planColor,
//                   letterSpacing: "0.1em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 {subscription.status}
//               </span>
//             </div>

//             <h2
//               style={{
//                 fontSize: "32px",
//                 fontWeight: 900,
//                 color: "#fff",
//                 margin: "0 0 6px",
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               {subscription.plan?.toUpperCase()} PLAN
//             </h2>
//             <p style={{ color: "rgba(255,255,255,0.45)", margin: 0, fontSize: "14px" }}>
//               Your current subscription tier
//             </p>

//             <div
//               style={{
//                 marginTop: "28px",
//                 paddingTop: "24px",
//                 borderTop: "1px solid rgba(255,255,255,0.07)",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "12px",
//               }}
//             >
//               <Row
//                 label="Next Renewal"
//                 value={new Date(subscription.end_date).toLocaleDateString("en-IN", {
//                   day: "numeric",
//                   month: "long",
//                   year: "numeric",
//                 })}
//               />
//               <Row
//                 label="Member Since"
//                 value={new Date(subscription.start_date).toLocaleDateString("en-IN", {
//                   day: "numeric",
//                   month: "long",
//                   year: "numeric",
//                 })}
//               />
//             </div>
//           </div>

//           {/* Payment Card */}
//           <div
//             style={{
//               background: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(255,255,255,0.08)",
//               borderRadius: "20px",
//               padding: "32px",
//               backdropFilter: "blur(12px)",
//             }}
//           >
//             <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
//               <div
//                 style={{
//                   width: "42px",
//                   height: "42px",
//                   background: "linear-gradient(135deg, #6366f1, #a78bfa)",
//                   borderRadius: "12px",
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   fontSize: "20px",
//                 }}
//               >
//                 💳
//               </div>
//               <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#fff" }}>
//                 Payment Details
//               </h2>
//             </div>

//             <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
//               <PaymentRow
//                 label="Payment ID"
//                 value={subscription.razorpay_payment_id ?? "—"}
//                 mono
//               />
//               <PaymentRow
//                 label="Order ID"
//                 value={subscription.razorpay_order_id ?? "—"}
//                 mono
//               />
//               <PaymentRow
//                 label="Purchase Date"
//                 value={new Date(subscription.start_date).toLocaleDateString("en-IN", {
//                   day: "numeric",
//                   month: "short",
//                   year: "numeric",
//                 })}
//               />
//             </div>
//           </div>
//         </div>

//         {/* Usage Stats */}
//         <div
//           style={{
//             background: "rgba(255,255,255,0.04)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: "20px",
//             padding: "32px",
//             backdropFilter: "blur(12px)",
//             marginBottom: "20px",
//           }}
//         >
         
//             <img
//   src="/logo.png"
//   alt="AdsMaster"
//   style={{ width: "32px", height: "32px", objectFit: "contain", borderRadius: "20px", }}
// />
           
          

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//               gap: "20px",
//             }}
//           >
//             {usageItems.map((item) => {
//               const pct = Math.min(Math.round((item.used / item.total) * 100), 100);
//               const barColor =
//                 pct > 80 ? "#f87171" : pct > 50 ? "#fbbf24" : "#34d399";
//               return (
//                 <div
//                   key={item.label}
//                   style={{
//                     background: "rgba(255,255,255,0.03)",
//                     border: "1px solid rgba(255,255,255,0.07)",
//                     borderRadius: "14px",
//                     padding: "20px",
//                   }}
//                 >
//                   <div
//                     style={{
//                       display: "flex",
//                       justifyContent: "space-between",
//                       alignItems: "center",
//                       marginBottom: "12px",
//                     }}
//                   >
//                     <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", display: "flex", gap: "6px" }}>
//                       {item.icon} {item.label}
//                     </span>
//                     <span
//                       style={{
//                         fontSize: "13px",
//                         fontWeight: 700,
//                         color: barColor,
//                       }}
//                     >
//                       {pct}%
//                     </span>
//                   </div>
//                   <div
//                     style={{
//                       height: "6px",
//                       background: "rgba(255,255,255,0.08)",
//                       borderRadius: "99px",
//                       overflow: "hidden",
//                     }}
//                   >
//                     <div
//                       style={{
//                         width: `${pct}%`,
//                         height: "100%",
//                         background: `linear-gradient(90deg, ${barColor}aa, ${barColor})`,
//                         borderRadius: "99px",
//                         transition: "width 0.6s ease",
//                       }}
//                     />
//                   </div>
//                   <p
//                     style={{
//                       margin: "8px 0 0",
//                       fontSize: "12px",
//                       color: "rgba(255,255,255,0.35)",
//                     }}
//                   >
//                     {item.used} of {item.total} used
//                   </p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Account Summary */}
//         <div
//           style={{
//             background: "rgba(255,255,255,0.04)",
//             border: "1px solid rgba(255,255,255,0.08)",
//             borderRadius: "20px",
//             padding: "32px",
//             backdropFilter: "blur(12px)",
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
//             <div
//               style={{
//                 width: "42px",
//                 height: "42px",
//                 background: "linear-gradient(135deg, #f59e0b, #d97706)",
//                 borderRadius: "12px",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//                 fontSize: "20px",
//               }}
//             >
//               👤
//             </div>
//             <h2 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: "#fff" }}>
//               Account Summary
//             </h2>
//           </div>

//           <div
//             style={{
//               display: "grid",
//               gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//               gap: "16px",
//             }}
//           >
//             <SummaryChip label="Email" value={profile.email} />
//             <SummaryChip label="Current Plan" value={profile.plan?.toUpperCase()} highlight={planColor} />
//             <SummaryChip
//               label="Plan Expires"
//               value={new Date(profile.plan_expires_at).toLocaleDateString("en-IN", {
//                 day: "numeric",
//                 month: "short",
//                 year: "numeric",
//               })}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// /* ─── Sub-components ─────────────────────────────────── */

// function Row({ label, value }: { label: string; value: string }) {
//   return (
//     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//       <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>{label}</span>
//       <span style={{ fontSize: "13px", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>
//         {value}
//       </span>
//     </div>
//   );
// }

// function PaymentRow({
//   label,
//   value,
//   mono,
// }: {
//   label: string;
//   value: string;
//   mono?: boolean;
// }) {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "column",
//         gap: "3px",
//         padding: "12px 14px",
//         background: "rgba(255,255,255,0.03)",
//         borderRadius: "10px",
//         border: "1px solid rgba(255,255,255,0.06)",
//       }}
//     >
//       <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
//         {label}
//       </span>
//       <span
//         style={{
//           fontSize: "13px",
//           color: "rgba(255,255,255,0.8)",
//           fontFamily: mono ? "'JetBrains Mono', 'Courier New', monospace" : "inherit",
//           wordBreak: "break-all",
//         }}
//       >
//         {value}
//       </span>
//     </div>
//   );
// }

// function SummaryChip({
//   label,
//   value,
//   highlight,
// }: {
//   label: string;
//   value: string;
//   highlight?: string;
// }) {
//   return (
//     <div
//       style={{
//         padding: "16px 18px",
//         background: "rgba(255,255,255,0.03)",
//         borderRadius: "12px",
//         border: highlight ? `1px solid ${highlight}44` : "1px solid rgba(255,255,255,0.07)",
//       }}
//     >
//       <p style={{ margin: "0 0 5px", fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
//         {label}
//       </p>
//       <p
//         style={{
//           margin: 0,
//           fontSize: "15px",
//           fontWeight: 700,
//           color: highlight ?? "rgba(255,255,255,0.85)",
//         }}
//       >
//         {value}
//       </p>
//     </div>
//   );
// }

