"use client";

const suggestions = [
  "📚 Learn Google Ads",
  "🚀 Build Campaign",
  "🎯 Find Keywords",
  "📝 Generate Ad Copy",
  "💰 Reduce CPC",
  "📈 Increase ROAS",
  "⭐ Quality Score",
  "🔍 Campaign Audit",
  "📷 Screenshot Analysis",
  "🏆 Ads Strategy",
  "🛒 Ecommerce Ads",
];

export default function ChatWelcome() {
  return (
    <div
      style={{
        width: "100%",
        padding: "12px",
      }}
    >
      <div
        style={{
          width: "100%",
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "24px",
          padding: "28px",
          boxShadow: "0 8px 30px rgba(0,0,0,0.05)",
        }}
      >
       

        {/* Description */}
        <p
          style={{
            textAlign: "center",
            color: "#64748b",
            fontSize: "20px",
            lineHeight: "1.7",
            maxWidth: "900px",
            margin: "0 auto 22px auto",
          }}
        >
          Learn Google Ads, build campaigns, generate ad copy,
          discover keywords, improve CTR, reduce CPC and
          increase ROAS with AI-powered recommendations.
        </p>

        {/* Chips */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          {suggestions.map((item) => (
            <div
              key={item}
              style={{
                padding: "10px 14px",
                borderRadius: "999px",
                background: "#eff6ff",
                border: "1px solid #bfdbfe",
                color: "#1d4ed8",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}