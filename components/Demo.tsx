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
            ⚡ LIVE EXAMPLE
          </div>

          <h2
            style={{
              fontSize: "48px",
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
            { value: "12,000+", label: "Campaigns Generated" },
            { value: "3,400+", label: "Businesses Trust Us" },
            { value: "38%", label: "Avg. CTR Improvement" },
            { value: "₹2.1Cr+", label: "Ad Spend Optimized" },
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
                  color: "#94a3b8",
                  fontWeight: "500",
                }}
              >
                {stat.label}
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
          {/* Remove this line once real numbers are added */}
          * Placeholder figures — replace with verified data before launch
        </p>
      </section>

      {/* ============================================= */}
      {/* TESTIMONIALS — ⚠️ PLACEHOLDER, replace with real reviews later */}
      {/* ============================================= */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 100px",
          padding: "0 20px",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "40px",
              fontWeight: "800",
              color: "#0f172a",
              marginBottom: "16px",
              letterSpacing: "-1px",
            }}
          >
            Loved By Businesses Across India
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "#64748b",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            See what advertisers are saying about AdsMaster AI.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
        >
          {[
            {
              name: "Rohit Sharma",
              role: "Owner, Sharma Taxi Services — Delhi",
              text: "AdsMaster AI ne mere CPC ko 30% kam kar diya within 2 weeks. Keyword suggestions bilkul spot on hai.",
              initials: "RS",
            },
            {
              name: "Priya Mehta",
              role: "Marketing Lead, UrbanNest Realty — Mumbai",
              text: "Headlines aur descriptions generate karna pehle 2 ghante leta tha, ab 2 minute me ho jata hai. Game changer for agencies.",
              initials: "PM",
            },
            {
              name: "Arjun Patel",
              role: "Founder, SpiceTrail Restaurant — Ahmedabad",
              text: "Quality Score improve hua aur leads double ho gaye. Best investment for small businesses on Google Ads.",
              initials: "AP",
            },
          ].map((t, i) => (
            <div
              key={i}
              style={{
                background: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: "20px",
                padding: "28px",
                boxShadow: "0 10px 30px rgba(15,23,42,0.04)",
              }}
            >
              <div style={{ color: "#facc15", fontSize: "16px", marginBottom: "14px" }}>
                ★★★★★
              </div>
              <p
                style={{
                  fontSize: "15px",
                  color: "#334155",
                  lineHeight: "1.7",
                  marginBottom: "20px",
                }}
              >
                "{t.text}"
              </p>
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg,#2563eb,#4f46e5)",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "14px",
                  }}
                >
                  {t.initials}
                </div>
                <div>
                  <div style={{ fontWeight: "700", fontSize: "14px", color: "#0f172a" }}>
                    {t.name}
                  </div>
                  <div style={{ fontSize: "12px", color: "#64748b" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#cbd5e1",
            marginTop: "16px",
          }}
        >
          {/* Remove this line once real testimonials are added */}
          * Sample testimonials — replace with verified customer reviews before launch
        </p>
      </section>

      {/* ============================================= */}
      {/* SECURITY / TRUST BADGES */}
      {/* ============================================= */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 100px",
          padding: "0 20px",
        }}
      >
        <div
          style={{
            background: "#f8fafc",
            border: "1px solid #e2e8f0",
            borderRadius: "24px",
            padding: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {[
            { icon: "🔒", title: "256-bit Encryption", desc: "Your data is encrypted in transit & at rest" },
            { icon: "✅", title: "Google Ads Safe", desc: "No policy violations, fully compliant integration" },
            { icon: "🛡️", title: "Privacy First", desc: "We never sell or share your business data" },
            { icon: "⚙️", title: "Built on Supabase", desc: "Enterprise-grade infrastructure & uptime" },
          ].map((b, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", marginBottom: "10px" }}>{b.icon}</div>
              <div
                style={{
                  fontWeight: "700",
                  fontSize: "14px",
                  color: "#0f172a",
                  marginBottom: "6px",
                }}
              >
                {b.title}
              </div>
              <div style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.6" }}>
                {b.desc}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}