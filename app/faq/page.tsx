export default function FAQPage() {
  const faqs = [
    {
      q: "What is AdsMaster AI?",
      a: "AdsMaster AI is an AI-powered Google Ads coaching platform."
    },
    {
      q: "Do I need Google Ads experience?",
      a: "No. Beginners and professionals can both use the platform."
    },
    {
      q: "What is included in the free plan?",
      a: "Basic campaign generation features are included."
    },
    {
      q: "What is included in the ₹999 plan?",
      a: "AI chat, campaign guidance and advanced recommendations."
    },
    {
      q: "Do you offer refunds?",
      a: "No. All purchases are final."
    }
  ];

  return (
    <main
      style={{
        maxWidth: "1000px",
        margin: "0 auto",
        padding: "80px 20px",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          fontWeight: "800",
          marginBottom: "40px",
        }}
      >
        Frequently Asked Questions
      </h1>

      {faqs.map((faq, index) => (
        <div
          key={index}
          style={{
            background: "#fff",
            border: "1px solid #e5e7eb",
            borderRadius: "18px",
            padding: "24px",
            marginBottom: "18px",
          }}
        >
          <h3>{faq.q}</h3>

          <p
            style={{
              color: "#64748b",
              marginTop: "10px",
            }}
          >
            {faq.a}
          </p>
        </div>
      ))}
    </main>
  );
}