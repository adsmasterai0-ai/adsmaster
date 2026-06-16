export default function RefundPolicyPage() {
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
          Refund Policy
        </h1>

        <p style={{ color: "#64748b", marginBottom: "30px" }}>
          Last Updated: May 2026
        </p>

        <h2>No Refund Policy</h2>

        <p>
          All payments made to AdsMaster AI are final and
          non-refundable.
        </p>

        <p>
          Users will continue to have access to their purchased
          subscription until the end of the billing period.
        </p>

        <p>
          No refunds will be provided for:
        </p>

        <ul>
          <li>Unused subscriptions</li>
          <li>Partial usage</li>
          <li>Change of mind</li>
          <li>Performance expectations</li>
        </ul>

        <h2>Contact</h2>

        <p>adsmasterai0@gmail.com</p>
      </div>
    </main>
  );
}