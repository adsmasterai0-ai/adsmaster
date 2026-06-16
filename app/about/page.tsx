export default function AboutPage() {
  return (
    <main
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          background: "#fff",
          border: "1px solid #e5e7eb",
          borderRadius: "24px",
          padding: "50px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            fontSize: "56px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          About AdsMaster AI
        </h1>

        <p
          style={{
            color: "#64748b",
            lineHeight: "1.9",
            fontSize: "18px",
          }}
        >
          AdsMaster AI is an AI-powered Google Ads coaching platform
          built to help businesses create better campaigns, generate
          high-converting keywords, improve ad copy and optimize
          advertising performance.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={card}>
            <h3>AI Campaign Builder</h3>
            <p>Create campaigns in minutes.</p>
          </div>

          <div style={card}>
            <h3>Keyword Generator</h3>
            <p>Find high-intent keywords instantly.</p>
          </div>

          <div style={card}>
            <h3>AI Optimization</h3>
            <p>Get recommendations to improve results.</p>
          </div>
        </div>
      </div>
    </main>
  );
}

const card = {
  padding: "24px",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
};