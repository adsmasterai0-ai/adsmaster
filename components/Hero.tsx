export default function Hero() {
  return (
    <section
      style={{
        background: "#ffffff",
        padding: "80px 20px",
      }}
    >
     <div
  style={{
    textAlign: "center",
    marginBottom: "20px",
  }}
>
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
      marginBottom: "24px",
    }}
  >
    ⚡ AI-Powered Google Ads Platform
  </div>

  <h2
    style={{
      fontSize: "64px",
      fontWeight: "900",
      lineHeight: "1.05",
      letterSpacing: "-2px",
      color: "#111827",
      marginBottom: "24px",
      maxWidth: "1000px",
      margin: "0 auto 24px",
    }}
  >
    Stop Wasting Money
    <br />

    <span
      style={{
        background:
          "linear-gradient(135deg,#2563eb,#4f46e5)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      On Google Ads
    </span>
  </h2>

  <p
    style={{
      maxWidth: "850px",
      margin: "0 auto",
      fontSize: "20px",
      lineHeight: "1.9",
      color: "#64748b",
      fontWeight: "500",
    }}
  >
    Generate high-converting campaigns, discover profitable
    keywords, reduce wasted spend, improve CTR and scale your
    ROAS with AI-powered recommendations built specifically
    for Google Ads advertisers.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "center",
      flexWrap: "wrap",
      gap: "14px",
      marginTop: "32px",
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
            "0 4px 12px rgba(0,0,0,0.04)",
        }}
      >
        {item}
      </div>
    ))}
  </div>
</div>
    </section>
  );
}