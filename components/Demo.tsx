"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function Demo() {
  return (
    <>
      {/* ============================================= */}
      {/* DEMO SECTION — same Taxi/Delhi example, premium styling */}
      {/* ============================================= */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "100px auto",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "60px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 18px",
              borderRadius: "999px",
              background: "#eef2ff",
              color: "#4f46e5",
              fontSize: "13px",
              fontWeight: "700",
              letterSpacing: "0.3px",
              marginBottom: "20px",
            }}
          >
            ⚡ SAMPLE EXAMPLE
          </div>

          <h2
            style={{
              fontSize: "44px",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            See AdsMaster AI In Action
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#64748b",
              maxWidth: "700px",
              margin: "0 auto",
              lineHeight: "1.8",
            }}
          >
            Generate keywords, headlines and descriptions in seconds with
            AI-powered Google Ads assistance.
          </p>
        </div>

        <div
        className= "demo-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            position: "relative",
          }}
        >
          {/* INPUT */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              padding: "36px",
              boxShadow: "0 20px 50px rgba(15,23,42,0.06)",
              position: "relative",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: "700",
                color: "#2563eb",
                marginBottom: "24px",
                letterSpacing: "0.5px",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#2563eb",
                  display: "inline-block",
                }}
              />
              INPUT
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#334155",
                }}
              >
                Business Type
              </label>

              <div
                style={{
                  marginTop: "8px",
                  padding: "14px 16px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  background: "#f8fafc",
                  fontWeight: "500",
                  color: "#0f172a",
                }}
              >
                Taxi Service
              </div>
            </div>

            <div style={{ marginBottom: "22px" }}>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#334155",
                }}
              >
                Target Location
              </label>

              <div
                style={{
                  marginTop: "8px",
                  padding: "14px 16px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  background: "#f8fafc",
                  fontWeight: "500",
                  color: "#0f172a",
                }}
              >
                Delhi NCR
              </div>
            </div>

            <div>
              <label
                style={{
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#334155",
                }}
              >
                Campaign Goal
              </label>

              <div
                style={{
                  marginTop: "8px",
                  padding: "14px 16px",
                  border: "1px solid #e2e8f0",
                  borderRadius: "12px",
                  background: "#f8fafc",
                  fontWeight: "500",
                  color: "#0f172a",
                }}
              >
                Lead Generation
              </div>
            </div>
          </div>

          {/* OUTPUT */}
          <div
            style={{
              background: "linear-gradient(135deg,#2563eb,#4f46e5)",
              borderRadius: "24px",
              padding: "36px",
              color: "#ffffff",
              boxShadow: "0 25px 60px rgba(37,99,235,0.35)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* subtle glow accent */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "180px",
                height: "180px",
                borderRadius: "50%",
                background: "rgba(255,255,255,0.08)",
                filter: "blur(10px)",
              }}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "13px",
                fontWeight: "700",
                marginBottom: "26px",
                letterSpacing: "0.5px",
                position: "relative",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  display: "inline-block",
                }}
              />
              AI GENERATED RESULT
            </div>

            <h3
              style={{
                fontSize: "19px",
                fontWeight: "700",
                marginBottom: "14px",
                position: "relative",
              }}
            >
              🔑 Keywords
            </h3>

            <ul
              style={{
                lineHeight: "2",
                marginBottom: "26px",
                paddingLeft: "20px",
                opacity: "0.95",
                position: "relative",
              }}
            >
              <li>Delhi Taxi Service</li>
              <li>Cab Booking Delhi</li>
              <li>Airport Taxi Delhi</li>
              <li>Online Taxi Booking</li>
            </ul>

            <h3
              style={{
                fontSize: "19px",
                fontWeight: "700",
                marginBottom: "14px",
                position: "relative",
              }}
            >
              ✍️ Headlines
            </h3>

            <ul
              style={{
                lineHeight: "2",
                marginBottom: "26px",
                paddingLeft: "20px",
                opacity: "0.95",
                position: "relative",
              }}
            >
              <li>Book Taxi In Delhi</li>
              <li>Affordable Cab Service</li>
              <li>24/7 Taxi Available</li>
            </ul>

            <h3
              style={{
                fontSize: "19px",
                fontWeight: "700",
                marginBottom: "14px",
                position: "relative",
              }}
            >
              📝 Description
            </h3>

            <p
              style={{
                lineHeight: "1.8",
                opacity: "0.95",
                position: "relative",
              }}
            >
              Reliable taxi service with affordable fares. Book your ride
              online and reach your destination comfortably.
            </p>
          </div>
        </div>
      </section>

      {/* ============================================= */}
      {/* STATS BAR — ⚠️ PLACEHOLDER NUMBERS, replace with real data later */}
      {/* ============================================= */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 100px",
          padding: "0 20px",
        }}
      >
        <div
        className="stats-grid"
          style={{
            background: "#0f172a",
            borderRadius: "24px",
            padding: "48px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            boxShadow: "0 20px 50px rgba(15,23,42,0.15)",
          }}
        >
          {[
            {
  value: "⚡",
  label: "AI Campaign Builder",
  desc: "Generate campaigns in minutes",
},
{
  value: "🔑",
  label: "Keyword Generator",
  desc: "High-intent keyword ideas",
},
{
  value: "📸",
  label: "Screenshot Analysis",
  desc: "Get optimization suggestions",
},
{
  value: "🎯",
  label: "Google Ads Focused",
  desc: "Built specifically for advertisers",
},

          ].map((stat, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                borderRight:
                  i !== 3 ? "1px solid rgba(255,255,255,0.1)" : "none",
              }}
            >
              <div
                style={{
                  fontSize: "34px",
                  fontWeight: "800",
                  color: "#ffffff",
                  marginBottom: "6px",
                }}
              >
                {stat.value}
              </div>
             <div
  style={{
    fontSize: "14px",
    color: "#ffffff",
    fontWeight: "700",
    marginBottom: "6px",
  }}
>
  {stat.label}
</div>

<div
  style={{
    fontSize: "12px",
    color: "#94a3b8",
    lineHeight: "1.6",
  }}
>
  {stat.desc}
</div>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#cbd5e1",
            marginTop: "10px",
          }}
        >
     
                  </p>
      </section>
     
      <style jsx global>{`
  @media (max-width:768px) {

    .demo-grid{
      grid-template-columns:1fr !important;
    }

    .stats-grid{
      grid-template-columns:1fr 1fr !important;
    }

    .testimonial-grid{
      grid-template-columns:1fr !important;
    }

    .security-grid{
      grid-template-columns:1fr !important;
    }

  }
`}</style>
    </>
  );
}