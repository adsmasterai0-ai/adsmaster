"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";


export default function Features() {
  const features = [
    {
      icon: "🚀",
      title: "AI Campaign Generator",
      desc: "Generate complete Google Ads campaigns with headlines, descriptions, keywords and strategy in seconds.",
    },
    {
      icon: "📷",
      title: "Screenshot Analysis",
      desc: "Upload Google Ads screenshots and get AI-powered recommendations to improve performance.",
    },
    {
      icon: "🎯",
      title: "Google Ads Coach",
      desc: "Ask questions and get expert-level guidance for bidding, targeting and optimization.",
    },
    {
      icon: "🔑",
      title: "Keyword Research",
      desc: "Discover high-intent keywords that bring better clicks, leads and conversions.",
    },
    {
      icon: "🚫",
      title: "Negative Keywords",
      desc: "Reduce wasted spend by identifying irrelevant and low-converting search terms.",
    },
    {
      icon: "💰",
      title: "Budget Optimizer",
      desc: "Allocate your budget intelligently with AI-driven recommendations.",
    },
    {
      icon: "📈",
      title: "ROAS Improvement",
      desc: "Get actionable recommendations to improve return on ad spend and profitability.",
    },
    {
      icon: "⭐",
      title: "Quality Score Boost",
      desc: "Improve ad relevance, CTR and landing page experience for better Quality Scores.",
    },
  ];

  return (
    <section
      id="features"
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
       
          <h2
            style={{
              fontSize: "56px",
              fontWeight: "900",
              color: "#111827",
              marginBottom: "20px",
              lineHeight: "1.1",
            }}
          >
            Everything You Need To
            <br />
            Scale Google Ads
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#64748b",
              fontSize: "20px",
              lineHeight: "1.8",
            }}
          >
            Built specifically for businesses, agencies and marketers
            who want better CTR, lower CPC and higher ROAS.
          </p>
        </div>

        {/* Features Grid */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(320px,1fr))",
            gap: "28px",
          }}
        >
          {features.map((feature, index) => (
            <div
              key={index}
              style={{
                background: "#ffffff",
                borderRadius: "28px",
                padding: "32px",
                border: "1px solid #e5e7eb",
                boxShadow:
                  "0 20px 50px rgba(0,0,0,0.05)",
                transition: "0.3s",
              }}
            >
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "20px",
                  background:
                    "linear-gradient(135deg,#2563eb,#4f46e5)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "32px",
                  marginBottom: "24px",
                  boxShadow:
                    "0 15px 35px rgba(37,99,235,0.25)",
                }}
              >
                {feature.icon}
              </div>

              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "800",
                  color: "#111827",
                  marginBottom: "14px",
                }}
              >
                {feature.title}
              </h3>

              <p
                style={{
                  color: "#64748b",
                  lineHeight: "1.9",
                  fontSize: "16px",
                }}
              >
                {feature.desc}
              </p>

              <div
                style={{
                  marginTop: "24px",
                  color: "#2563eb",
                  fontWeight: "700",
                  fontSize: "15px",
                }}
              >
                           </div>
            </div>
          ))}
        </div>

        {/* Bottom Premium Banner */}

        <div
          style={{
            marginTop: "70px",
            borderRadius: "32px",
            padding: "50px",
            background:
              "linear-gradient(135deg,#2563eb,#4f46e5)",
            color: "#ffffff",
            textAlign: "center",
            boxShadow:
              "0 30px 80px rgba(37,99,235,0.25)",
          }}
        >
          <h3
            style={{
              fontSize: "42px",
              fontWeight: "900",
              marginBottom: "16px",
            }}
          >
            Stop Guessing. Start Optimizing.
          </h3>

          <p
            style={{
              fontSize: "18px",
              opacity: 0.9,
              maxWidth: "700px",
              margin: "0 auto 30px",
              lineHeight: "1.8",
            }}
          >
            Generate campaigns, analyze screenshots, improve CTR,
            reduce CPC and scale your Google Ads performance with AI.
          </p>

   <Link href="/chat" scroll={true}>
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
    🚀 Start Optimizing AI
  </button>
</Link>
        </div>
      </div>
    </section>
  );
}