export default function Hero() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "30px 20px 20px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Badge */}

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            padding: "10px 18px",
            borderRadius: "999px",
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            color: "#2563eb",
            fontWeight: "700",
            fontSize: "14px",
            marginBottom: "20px",
          }}
        >
          ⚡ Built For Freelancers, Agencies & Small Businesses
        </div>

        {/* Heading */}

        <h1
          style={{
            fontSize: "48px",
            fontWeight: "900",
            lineHeight: "1.08",
            letterSpacing: "-2px",
            color: "#111827",
            maxWidth: "900px",
            margin: "0 auto 16px",
          }}
        >
          AI Google Ads Assistant

          <br />

          <span
            style={{
              background:
                "linear-gradient(135deg,#2563eb,#4f46e5)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Generate Keywords, Headlines &
            Descriptions In Seconds
          </span>
        </h1>

        {/* Description */}

        <p
          style={{
            maxWidth: "760px",
            margin: "0 auto",
            fontSize: "18px",
            lineHeight: "1.8",
            color: "#64748b",
            fontWeight: "500",
          }}
        >
          Create better Google Ads without spending hours researching.
          Generate high-intent keywords, persuasive headlines,
          ad descriptions and campaign ideas instantly with AI-powered
          recommendations.
        </p>

        {/* Feature Pills */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "12px",
            marginTop: "28px",
          }}
        >
          {[
            "🚀 AI Campaign Generator",
            "📷 Screenshot Analysis",
            "🎯 Google Ads Coach",
            "📈 ROAS Optimization",
          ].map((item) => (
            <div
              key={item}
              style={{
                padding: "10px 18px",
                borderRadius: "999px",
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                fontWeight: "600",
                color: "#374151",
                boxShadow:
                  "0 4px 12px rgba(0,0,0,0.05)",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Stats */}

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "40px",
            marginTop: "35px",
            paddingTop: "25px",
            borderTop: "1px solid #f1f5f9",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "800",
                color: "#111827",
              }}
            >
              15+
            </div>
            <div
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Keywords Generated
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "800",
                color: "#111827",
              }}
            >
              15
            </div>
            <div
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Headlines Per Campaign
            </div>
          </div>

          <div>
            <div
              style={{
                fontSize: "24px",
                fontWeight: "800",
                color: "#111827",
              }}
            >
              AI
            </div>
            <div
              style={{
                color: "#64748b",
                fontSize: "14px",
              }}
            >
              Campaign Recommendations
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}