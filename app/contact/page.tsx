export default function ContactPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
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
            fontSize: "52px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          Contact Us
        </h1>

        <p
          style={{
            color: "#64748b",
            marginBottom: "30px",
          }}
        >
          Need help? Reach out anytime.
        </p>

        <div style={{ marginBottom: "25px" }}>
          <strong>Email:</strong>
          <br />
          adsmasterai0@gmail.com
        </div>

        <input
          placeholder="Your Name"
          style={input}
        />

        <input
          placeholder="Your Email"
          style={input}
        />

        <textarea
          placeholder="Message"
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
            padding: "16px 28px",
            borderRadius: "12px",
            cursor: "pointer",
          }}
        >
          Send Message
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