"use client"

export default function Demo() {
  return (
    <>
      {/* ===== DEMO SECTION ===== */}
      <section style={{
        maxWidth: "1200px", margin: "100px auto", padding: "0 24px",
        fontFamily: "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif"
      }}>

        {/* HEADING */}
        <div style={{ textAlign: "center", marginBottom: "70px" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            padding: "8px 20px", borderRadius: "999px",
            background: "linear-gradient(135deg, #eef2ff, #e0e7ff)",
            border: "1px solid #c7d2fe",
            color: "#4338ca", fontSize: "12px", fontWeight: "700",
            letterSpacing: "1px", marginBottom: "24px", textTransform: "uppercase"
          }}>
            ⚡ Live Sample
          </div>
          <h2 style={{
            fontSize: "clamp(32px, 4vw, 52px)", fontWeight: "800",
            background: "linear-gradient(135deg, #0f172a 0%, #1e40af 50%, #4f46e5 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            marginBottom: "18px", letterSpacing: "-1.5px", lineHeight: "1.15"
          }}>
            See AdsMaster AI In Action
          </h2>
          <p style={{
            fontSize: "17px", color: "#64748b", maxWidth: "600px",
            margin: "0 auto", lineHeight: "1.9", fontWeight: "400"
          }}>
            Complete Google Ads campaigns generated in seconds — keywords, headlines,
            descriptions, negative keywords, extensions and more.
          </p>
        </div>

        {/* INPUT + OUTPUT */}
        <div className="demo-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr",
          gap: "24px", marginBottom: "24px", alignItems: "stretch"
        }}>

          {/* INPUT CARD */}
          <div style={{
            background: "#ffffff",
            border: "1px solid #e8edf5",
            borderRadius: "28px", padding: "40px 36px",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.04), 0 24px 48px -8px rgba(15,23,42,0.08)",
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              marginBottom: "32px"
            }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#2563eb", display: "inline-block",
                boxShadow: "0 0 0 3px rgba(37,99,235,0.15)"
              }} />
              <span style={{
                fontSize: "11px", fontWeight: "800", color: "#2563eb",
                letterSpacing: "1.5px", textTransform: "uppercase"
              }}>Input</span>
            </div>

            {[
              { label: "Business Type", value: "Taxi Service" },
              { label: "Target Location", value: "Delhi NCR" },
              { label: "Campaign Goal", value: "Lead Generation" },
              { label: "Monthly Budget", value: "₹15,000 – ₹30,000" },
            ].map((item) => (
              <div key={item.label} style={{ marginBottom: "20px" }}>
                <label style={{
                  display: "block", fontWeight: "600", fontSize: "12px",
                  color: "#94a3b8", letterSpacing: "0.6px",
                  textTransform: "uppercase", marginBottom: "8px"
                }}>
                  {item.label}
                </label>
                <div style={{
                  padding: "14px 18px",
                  border: "1.5px solid #f1f5f9",
                  borderRadius: "14px",
                  background: "#f8fafc",
                  fontWeight: "600", color: "#0f172a", fontSize: "14px",
                  letterSpacing: "-0.1px"
                }}>
                  {item.value}
                </div>
              </div>
            ))}

            <div style={{
              marginTop: "8px", padding: "16px",
              background: "linear-gradient(135deg, #2563eb, #4f46e5)",
              borderRadius: "14px", textAlign: "center",
              color: "#fff", fontWeight: "700", fontSize: "14px",
              letterSpacing: "0.3px", cursor: "default",
              boxShadow: "0 8px 24px rgba(37,99,235,0.35)"
            }}>
              ⚡ Generate Ads
            </div>
          </div>

          {/* OUTPUT CARD */}
          <div style={{
            background: "linear-gradient(145deg, #1d4ed8, #312e81)",
            borderRadius: "28px", padding: "40px 36px", color: "#ffffff",
            boxShadow: "0 32px 64px -12px rgba(37,99,235,0.4)",
            position: "relative", overflow: "hidden"
          }}>
            {/* decorative blobs */}
            <div style={{
              position: "absolute", top: "-80px", right: "-80px",
              width: "240px", height: "240px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(167,139,250,0.25), transparent 70%)"
            }} />
            <div style={{
              position: "absolute", bottom: "-60px", left: "-40px",
              width: "180px", height: "180px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(96,165,250,0.15), transparent 70%)"
            }} />

            <div style={{
              display: "flex", alignItems: "center", gap: "8px",
              marginBottom: "30px", position: "relative"
            }}>
              <span style={{
                width: "8px", height: "8px", borderRadius: "50%",
                background: "#4ade80", display: "inline-block",
                boxShadow: "0 0 0 3px rgba(74,222,128,0.25)"
              }} />
              <span style={{
                fontSize: "11px", fontWeight: "800", letterSpacing: "1.5px",
                textTransform: "uppercase", opacity: 0.9
              }}>AI Generated Result</span>
            </div>

            {/* Keywords */}
            <div style={{ marginBottom: "26px", position: "relative" }}>
              <div style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", opacity: 0.6, marginBottom: "12px"
              }}>🔑 Keywords</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Delhi Taxi Service", "Cab Booking Delhi", "Airport Taxi Delhi", "Online Taxi Booking"].map(k => (
                  <div key={k} style={{
                    display: "flex", alignItems: "center", gap: "10px",
                    background: "rgba(255,255,255,0.08)", borderRadius: "10px",
                    padding: "10px 14px", fontSize: "13px", fontWeight: "500",
                    backdropFilter: "blur(4px)"
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#93c5fd", flexShrink: 0 }} />
                    {k}
                  </div>
                ))}
              </div>
            </div>

            {/* Headlines */}
            <div style={{ marginBottom: "26px", position: "relative" }}>
              <div style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", opacity: 0.6, marginBottom: "12px"
              }}>✍️ Headlines</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {["Book Taxi In Delhi", "Affordable Cab Service", "24/7 Taxi Available"].map(h => (
                  <div key={h} style={{
                    background: "rgba(255,255,255,0.08)", borderRadius: "10px",
                    padding: "10px 14px", fontSize: "13px", fontWeight: "500",
                    display: "flex", alignItems: "center", gap: "10px"
                  }}>
                    <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#a5b4fc", flexShrink: 0 }} />
                    {h}
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div style={{ marginBottom: "26px", position: "relative" }}>
              <div style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", opacity: 0.6, marginBottom: "10px"
              }}>📝 Description</div>
              <div style={{
                background: "rgba(255,255,255,0.08)", borderRadius: "12px",
                padding: "14px 16px", fontSize: "13px", lineHeight: "1.75", fontWeight: "400"
              }}>
                Reliable taxi service with affordable fares. Book your ride online and reach your destination comfortably.
              </div>
            </div>

            {/* Negative Keywords */}
            <div style={{ marginBottom: "26px", position: "relative" }}>
              <div style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", opacity: 0.6, marginBottom: "12px"
              }}>🚫 Negative Keywords</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
                {["free", "cheap flights", "bus", "jobs", "reviews", "buy", "sell", "used"].map(n => (
                  <span key={n} style={{
                    background: "rgba(239,68,68,0.18)", border: "1px solid rgba(239,68,68,0.25)",
                    padding: "5px 12px", borderRadius: "999px",
                    fontSize: "11px", fontWeight: "600", color: "#fca5a5"
                  }}>{n}</span>
                ))}
              </div>
            </div>

            {/* Ad Extensions */}
            <div style={{ position: "relative" }}>
              <div style={{
                fontSize: "11px", fontWeight: "700", letterSpacing: "1px",
                textTransform: "uppercase", opacity: 0.6, marginBottom: "12px"
              }}>🔗 Ad Extensions</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                {[
                  { title: "Fleet & Prices", desc: "View our diverse range of cars & competitive rental rates." },
                  { title: "Book Now", desc: "Start your journey. Secure your car online today." },
                  { title: "Contact Us", desc: "Get in touch for custom quotes. Call / WhatsApp anytime." },
                ].map(e => (
                  <div key={e.title} style={{
                    background: "rgba(255,255,255,0.09)", borderRadius: "12px",
                    padding: "12px 16px", border: "1px solid rgba(255,255,255,0.1)"
                  }}>
                    <div style={{ fontWeight: "700", fontSize: "12px", marginBottom: "3px", color: "#bfdbfe" }}>{e.title}</div>
                    <div style={{ fontSize: "12px", opacity: 0.7, lineHeight: "1.5" }}>{e.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM 4 CARDS */}
        <div className="demo-grid" style={{
          display: "grid", gridTemplateColumns: "1fr 1fr",
          gap: "24px", marginBottom: "16px"
        }}>

          {/* KEYWORD STRATEGY */}
          <div style={{
            background: "#fff", borderRadius: "24px", padding: "32px",
            border: "1px solid #e8edf5",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.03), 0 16px 40px -8px rgba(15,23,42,0.07)"
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px"
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "10px",
                background: "linear-gradient(135deg,#dbeafe,#ede9fe)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px"
              }}>📌</div>
              <span style={{
                fontSize: "11px", fontWeight: "800", color: "#1d4ed8",
                letterSpacing: "1.2px", textTransform: "uppercase"
              }}>Keyword Strategy</span>
            </div>

            {[
              { type: "Phrase Match", color: "#2563eb", bg: "#eff6ff", border: "#bfdbfe", items: ['"car rental Haryana"', '"rent a car in Haryana"', '"taxi service Haryana"'] },
              { type: "Exact Match", color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe", items: ["[car rental Haryana]", "[airport taxi Haryana]", "[self drive Haryana]"] },
            ].map(s => (
              <div key={s.type} style={{ marginBottom: "18px" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: s.bg, border: `1px solid ${s.border}`,
                  color: s.color, fontSize: "11px", fontWeight: "700",
                  padding: "4px 12px", borderRadius: "999px", marginBottom: "12px",
                  letterSpacing: "0.3px"
                }}>{s.type}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {s.items.map(ex => (
                    <div key={ex} style={{
                      fontSize: "13px", color: "#334155", padding: "9px 14px",
                      background: "#f8fafc", borderRadius: "10px",
                      fontFamily: "'SF Mono', 'Fira Code', monospace",
                      fontWeight: "500", border: "1px solid #f1f5f9"
                    }}>{ex}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* BIDDING & BUDGET */}
          <div style={{
            background: "#fff", borderRadius: "24px", padding: "32px",
            border: "1px solid #e8edf5",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.03), 0 16px 40px -8px rgba(15,23,42,0.07)"
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px"
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "10px",
                background: "linear-gradient(135deg,#d1fae5,#a7f3d0)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px"
              }}>💰</div>
              <span style={{
                fontSize: "11px", fontWeight: "800", color: "#059669",
                letterSpacing: "1.2px", textTransform: "uppercase"
              }}>Bidding & Budget</span>
            </div>

            {[
              { label: "Strategy", value: "Maximize Conversions → Target CPA" },
              { label: "Daily Budget", value: "₹500 – ₹1,000 / day" },
              { label: "Est. CPC Range", value: "₹15 – ₹35 per click" },
              { label: "Scale Rule", value: "+10–15% every 7–10 days" },
            ].map((r, i) => (
              <div key={r.label} style={{
                display: "flex", justifyContent: "space-between",
                alignItems: "center", padding: "14px 0",
                borderBottom: i < 3 ? "1px solid #f1f5f9" : "none", gap: "12px"
              }}>
                <span style={{ fontSize: "13px", color: "#94a3b8", fontWeight: "600", flexShrink: 0 }}>{r.label}</span>
                <span style={{
                  fontSize: "13px", color: "#0f172a", fontWeight: "700",
                  textAlign: "right", letterSpacing: "-0.2px"
                }}>{r.value}</span>
              </div>
            ))}
          </div>

          {/* AUDIENCE TARGETING */}
          <div style={{
            background: "#fff", borderRadius: "24px", padding: "32px",
            border: "1px solid #e8edf5",
            boxShadow: "0 4px 6px -1px rgba(0,0,0,0.03), 0 16px 40px -8px rgba(15,23,42,0.07)"
          }}>
            <div style={{
              display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px"
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "10px",
                background: "linear-gradient(135deg,#fee2e2,#fecaca)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px"
              }}>🎯</div>
              <span style={{
                fontSize: "11px", fontWeight: "800", color: "#dc2626",
                letterSpacing: "1.2px", textTransform: "uppercase"
              }}>Audience Targeting</span>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <div style={{
                fontSize: "11px", fontWeight: "700", color: "#64748b",
                letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px"
              }}>In-Market</div>
              {["Travel › Car & Truck Rentals", "Travel › Travel Services", "Business Services › Business Travel"].map(a => (
                <div key={a} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  fontSize: "13px", color: "#334155", padding: "9px 14px",
                  background: "#f8fafc", borderRadius: "10px", marginBottom: "6px",
                  fontWeight: "500", border: "1px solid #f1f5f9"
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#3b82f6", flexShrink: 0 }} />
                  {a}
                </div>
              ))}
            </div>

            <div>
              <div style={{
                fontSize: "11px", fontWeight: "700", color: "#64748b",
                letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "10px"
              }}>Affinity</div>
              {["Travelers › Avid Travelers", "Lifestyles › Car Enthusiasts"].map(a => (
                <div key={a} style={{
                  display: "flex", alignItems: "center", gap: "10px",
                  fontSize: "13px", color: "#334155", padding: "9px 14px",
                  background: "#f8fafc", borderRadius: "10px", marginBottom: "6px",
                  fontWeight: "500", border: "1px solid #f1f5f9"
                }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#a78bfa", flexShrink: 0 }} />
                  {a}
                </div>
              ))}
            </div>
          </div>

          {/* 48-HOUR RECOVERY */}
          <div style={{
            background: "linear-gradient(145deg, #0f172a, #1e1b4b)",
            borderRadius: "24px", padding: "32px",
            boxShadow: "0 32px 64px -12px rgba(15,23,42,0.3)",
            border: "1px solid rgba(255,255,255,0.06)", position: "relative", overflow: "hidden"
          }}>
            {/* glow */}
            <div style={{
              position: "absolute", top: "-40px", right: "-40px",
              width: "160px", height: "160px", borderRadius: "50%",
              background: "radial-gradient(circle, rgba(251,191,36,0.12), transparent 70%)"
            }} />

            <div style={{
              display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px", position: "relative"
            }}>
              <div style={{
                width: "32px", height: "32px", borderRadius: "10px",
                background: "rgba(251,191,36,0.15)", border: "1px solid rgba(251,191,36,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center", fontSize: "15px"
              }}>⚡</div>
              <span style={{
                fontSize: "11px", fontWeight: "800", color: "#fbbf24",
                letterSpacing: "1.2px", textTransform: "uppercase"
              }}>48-Hour Recovery Plan</span>
            </div>

            {[
              {
                title: "Alternative Keywords",
                color: "#93c5fd",
                items: ['"car rental service Haryana"', '[taxi service in Haryana]', '"local car hire Haryana"']
              },
              {
                title: "New Headlines",
                color: "#a5b4fc",
                items: ["Rent Cars in Haryana Now!", "Your Haryana Journey Starts", "Trusted Car Hire, Great Rates"]
                },
              {
                title: "Quick Fixes",
                color: "#6ee7b7",
                items: ["Simplify form to 3 fields only", "Add click-to-call above the fold", "Change CTA to 'Get Instant Quote'"]
              },
            ].map(section => (
              <div key={section.title} style={{ marginBottom: "18px", position: "relative" }}>
                <div style={{
                  fontSize: "11px", fontWeight: "700", color: "#fbbf24",
                  letterSpacing: "0.8px", textTransform: "uppercase", marginBottom: "8px"
                }}>{section.title}</div>
                {section.items.map(item => (
                  <div key={item} style={{
                    display: "flex", alignItems: "flex-start", gap: "8px",
                    fontSize: "12px", color: "#cbd5e1", padding: "5px 0",
                    fontFamily: section.title === "Alternative Keywords" ? "'SF Mono','Fira Code',monospace" : "inherit",
                    lineHeight: "1.5"
                  }}>
                    <span style={{ color: section.color, marginTop: "2px", flexShrink: 0 }}>›</span>
                    {item}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

          </section>

      {/* ===== FEATURES BAR ===== */}
      <section style={{ maxWidth: "1200px", margin: "0 auto 100px", padding: "0 24px" }}>
        <div className="stats-grid" style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
          borderRadius: "28px", padding: "52px 48px",
          display: "grid", gridTemplateColumns: "repeat(4,1fr)",
          gap: "0", boxShadow: "0 32px 64px rgba(15,23,42,0.2)",
          border: "1px solid rgba(255,255,255,0.06)"
        }}>
          {[
            { icon: "⚡", label: "AI Campaign Builder", desc: "Generate campaigns in minutes", color: "#fbbf24" },
            { icon: "🔑", label: "Keyword Generator", desc: "High-intent keyword ideas", color: "#60a5fa" },
            { icon: "📸", label: "Screenshot Analysis", desc: "Get optimization suggestions", color: "#a78bfa" },
            { icon: "🎯", label: "Google Ads Focused", desc: "Built specifically for advertisers", color: "#34d399" },
          ].map((stat, i) => (
            <div key={i} style={{
              textAlign: "center", padding: "0 24px",
              borderRight: i !== 3 ? "1px solid rgba(255,255,255,0.07)" : "none"
            }}>
              <div style={{
                width: "52px", height: "52px", borderRadius: "16px",
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "22px", margin: "0 auto 16px"
              }}>{stat.icon}</div>
              <div style={{
                fontSize: "14px", fontWeight: "700", color: "#f1f5f9",
                marginBottom: "6px", letterSpacing: "-0.2px"
              }}>{stat.label}</div>
              <div style={{ fontSize: "12px", color: "#64748b", lineHeight: "1.7" }}>{stat.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
        @media (max-width: 768px) {
          .demo-grid { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; padding: 32px 24px !important; }
        }
      `}</style>
    </>
  )
}