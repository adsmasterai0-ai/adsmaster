"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function ProblemSection() {
  const [loggedIn, setLoggedIn] = useState(false);

useEffect(() => {
  supabase.auth.getUser().then(({ data }) => {
    setLoggedIn(!!data.user);
  });
}, []);
  const problems = [
    {
      icon: "💸",
      title: "High CPC",
      desc: "Paying too much per click and burning your ad budget without seeing meaningful results.",
    },
    {
      icon: "📉",
      title: "Low CTR",
      desc: "People are seeing your ads but not clicking, reducing performance and Quality Score.",
    },
    {
      icon: "😔",
      title: "No Leads",
      desc: "Traffic is coming but visitors are not converting into customers or enquiries.",
    },
    {
      icon: "⭐",
      title: "Poor Quality Score",
      desc: "Low ad relevance and landing page experience causing higher advertising costs.",
    },
    {
      icon: "🔥",
      title: "Wasted Budget",
      desc: "Money is being spent on irrelevant keywords and low-performing campaigns.",
    },
    {
      icon: "✍️",
      title: "Weak Ad Copy",
      desc: "Headlines and descriptions fail to attract clicks and drive conversions.",
    },
  ];

  return (
    <section
      style={{
        padding: "120px 24px",
        background:
          "linear-gradient(180deg,#ffffff 0%,#f8fafc 100%)",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#dc2626",
              fontWeight: "700",
              fontSize: "14px",
              marginBottom: "24px",
            }}
          >
            🚨 Common Google Ads Problems
          </div>

          <h2
            style={{
              fontSize: "62px",
              fontWeight: "900",
              lineHeight: "1.1",
              color: "#111827",
              marginBottom: "24px",
              letterSpacing: "-2px",
            }}
          >
            Are You Facing
            <br />

            <span
              style={{
                background:
                  "linear-gradient(135deg,#dc2626,#ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              These Problems?
            </span>
          </h2>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "20px",
              lineHeight: "1.9",
            }}
          >
            Most businesses lose money on Google Ads because
            campaigns are not properly optimized. These are the
            biggest problems advertisers face every day.
          </p>
        </div>

        {/* Problem Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(350px,1fr))",
            gap: "28px",
          }}
        >
          {problems.map((item, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                borderRadius: "28px",
                padding: "32px",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.05)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "70px",
                  height: "70px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg,#fee2e2,#fecaca)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "34px",
                  marginBottom: "22px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: "800",
                  color: "#111827",
                  marginBottom: "14px",
                }}
              >
                ❌ {item.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.9",
                  fontSize: "16px",
                }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>





        {/* Solution Banner */}

        <div
          style={{
            marginTop: "50px",
            borderRadius: "20px",
            padding: "60px",
            background:
              "linear-gradient(135deg,#2563eb,#4f46e5)",
            textAlign: "center",
            color: "#ffffff",
            boxShadow:
              "0 30px 80px rgba(37,99,235,0.25)",
          }}
        >
          <div
            style={{
              fontSize: "40px",
            }}
          >
            🚀
          </div>

          <h3
            style={{
              fontSize: "38px",
              fontWeight: "900",
              marginBottom: "10px",
            }}
          >
            AdsMaster AI Finds & Fixes
            <br />
            These Issues Automatically
          </h3>

          <p
            style={{
              maxWidth: "850px",
              margin: "0 auto",
              fontSize: "19px",
              lineHeight: "1.9",
              opacity: 0.95,
            }}
          >
            Generate better campaigns, discover profitable
            keywords, improve CTR, reduce CPC, increase Quality
            Score and maximize ROAS using AI-powered Google Ads
            recommendations.
          </p>
          
<Link href={loggedIn ? "/chat" : "/signup"}>
  <button
    style={{
      marginTop: "20px",
      background: "#ffffff",
      color: "#2563eb",
      border: "none",
      padding: "18px 34px",
      borderRadius: "16px",
      fontWeight: 800,
      fontSize: "16px",
      cursor: "pointer",
      boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
      transition: "all 0.3s ease",
    }}
  >
    🚀 Start Optimizing Now
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}