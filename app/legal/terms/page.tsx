export default function TermsPage() {
  return (
    <main
      style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          border: "1px solid #e5e7eb",
          borderRadius: "24px",
          padding: "50px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "800",
            marginBottom: "20px",
          }}
        >
          Terms & Conditions
        </h1>

        <p style={{ color: "#64748b", marginBottom: "30px" }}>
          Last Updated: May 2026
        </p>

        <h2>Service Description</h2>
        <p>
          AdsMaster AI provides AI-powered Google Ads guidance,
          campaign assistance and educational recommendations.
        </p>

        <h2>No Guarantees</h2>
        <p>
          We do not guarantee conversions, sales, ROAS, leads or
          advertising performance.
        </p>

        <h2>Subscriptions</h2>
        <p>
          Paid plans currently include ₹999/month and ₹2999/month
          subscriptions.
        </p>

        <h2>Acceptable Use</h2>
        <p>
          Users may not abuse, reverse engineer or misuse the
          platform.
        </p>

        <h2>Contact</h2>
        <p>adsmasterai0@gmail.com</p>
      </div>
    </main>
  );
}