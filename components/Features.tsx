"use client";

export default function Features() {
  const features = [
    {
      icon: "🎯",
      title: "AI Keyword Generator",
      desc: "Generate high-intent keywords tailored to your business and target audience.",
    },
    {
      icon: "✍️",
      title: "Headline Generator",
      desc: "Create click-worthy Google Ads headlines optimized for better CTR.",
    },
    {
      icon: "📝",
      title: "Description Generator",
      desc: "Generate persuasive ad descriptions in seconds with AI assistance.",
    },
    {
      icon: "📸",
      title: "Screenshot Analysis",
      desc: "Upload campaign screenshots and receive actionable improvement suggestions.",
    },
    {
      icon: "🚀",
      title: "Google Ads Coach",
      desc: "Get step-by-step recommendations to improve campaign performance.",
    },
    {
      icon: "📈",
      title: "ROAS Optimization",
      desc: "Identify opportunities to increase conversions and reduce wasted spend.",
    },
    {
      icon: "🚫",
      title: "Negative Keywords Finder",
      desc: "Discover irrelevant search terms and prevent budget leakage.",
    },
    {
      icon: "⚡",
      title: "Landing Page Analyzer",
      desc: "Analyze landing pages and uncover conversion improvement opportunities.",
    },
  ];

  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "100px auto",
        padding: "0 20px",
      }}
    >
      {/* Heading */}

      <div
        style={{
          textAlign: "center",
          marginBottom: "60px",
        }}
      >
        <div
          style={{
            display: "inline-block",
            padding: "10px 18px",
            background: "#eff6ff",
            border: "1px solid #bfdbfe",
            borderRadius: "999px",
            color: "#2563eb",
            fontWeight: 700,
            fontSize: "14px",
          }}
        >
          Powerful Features
        </div>

        <h2
          style={{
            fontSize: "48px",
            fontWeight: "900",
            lineHeight: "1.1",
            color: "#111827",
            marginTop: "22px",
            marginBottom: "18px",
            letterSpacing: "-1.5px",
          }}
        >
          Everything You Need To Improve Google Ads
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: "#64748b",
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          Generate keywords, headlines, descriptions and optimization
          recommendations without spending hours researching.
        </p>
      </div>

      {/* Feature Grid */}

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-box">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

            <span className="feature-number">
              {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>

      <style jsx>{`
        .feature-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 24px;
        }

        .feature-card {
          position: relative;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 24px;
          padding: 28px;
          min-height: 240px;
          transition: all 0.25s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
        }

        .feature-card:hover {
          transform: translateY(-8px);
          border-color: #c7d2fe;
          box-shadow: 0 20px 50px rgba(37, 99, 235, 0.15);
        }

        .icon-box {
          width: 58px;
          height: 58px;
          border-radius: 18px;
          background: linear-gradient(
            135deg,
            #eff6ff,
            #dbeafe
          );
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 28px;
          margin-bottom: 20px;
        }

        .feature-card h3 {
          font-size: 22px;
          font-weight: 800;
          color: #111827;
          margin-bottom: 12px;
        }

        .feature-card p {
          color: #64748b;
          line-height: 1.8;
          font-size: 15px;
          margin: 0;
        }

        .feature-number {
          position: absolute;
          bottom: 18px;
          right: 24px;
          font-size: 13px;
          font-weight: 800;
          color: #d1d5db;
        }

        @media (max-width: 768px) {
          .feature-grid {
            grid-template-columns: 1fr;
          }

          .feature-card {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  );
}