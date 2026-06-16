export default function CampaignBuilderPage() {
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
          Campaign Builder
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "40px",
          }}
        >
          Create Google Ads campaigns using AI.
        </p>

        <input
          placeholder="Business Name"
          style={input}
        />

        <input
          placeholder="Business Category"
          style={input}
        />

        <input
          placeholder="Location"
          style={input}
        />

        <input
          placeholder="Monthly Budget"
          style={input}
        />

        <textarea
          placeholder="Describe your business..."
          style={{
            ...input,
            minHeight: "140px",
          }}
        />

        <button
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "none",
            padding: "16px 30px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Generate Campaign
        </button>
      </div>
    </main>
  );
}

const input = {
  width: "100%",
  padding: "16px",
  marginBottom: "18px",
  borderRadius: "12px",
  border: "1px solid #d1d5db",
};