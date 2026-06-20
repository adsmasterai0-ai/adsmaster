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
color: "#111827",
}}
>
Contact Us
</h1>

    <p
      style={{
        color: "#64748b",
        marginBottom: "35px",
        fontSize: "16px",
        lineHeight: "1.8",
      }}
    >
      Have questions about AdsMaster AI, subscriptions, billing or platform
      usage? We'd love to help. Contact our team and we'll get back to you
      as soon as possible.
    </p>

    {/* Contact Info */}
    <div
      style={{
        background: "#f8fafc",
        border: "1px solid #e2e8f0",
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "30px",
      }}
    >
      <div
        style={{
          marginBottom: "12px",
          color: "#0f172a",
        }}
      >
        <strong>📧 Email:</strong>
        <br />
        adsmasterai0@gmail.com
      </div>

      <div
        style={{
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        Support Hours: Monday – Saturday, 9:00 AM – 6:00 PM IST
      </div>
    </div>

    <input
      placeholder="Your Name"
      style={input}
    />

    <input
      placeholder="Your Email Address"
      type="email"
      style={input}
    />

    <input
      placeholder="Subject"
      style={input}
    />

    <textarea
      placeholder="Tell us how we can help..."
      style={{
        ...input,
        minHeight: "160px",
        resize: "vertical",
      }}
    />

    <button
      style={{
        width: "100%",
        background:
          "linear-gradient(135deg,#2563eb,#4f46e5)",
        color: "#fff",
        border: "none",
        padding: "16px",
        borderRadius: "14px",
        cursor: "pointer",
        fontWeight: "700",
        fontSize: "15px",
        boxShadow:
          "0 10px 25px rgba(37,99,235,0.25)",
      }}
    >
      Send Message
    </button>

    <p
      style={{
        marginTop: "20px",
        color: "#94a3b8",
        fontSize: "13px",
        textAlign: "center",
      }}
    >
      We typically respond within 24–48 business hours.
    </p>
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
outline: "none",
fontSize: "15px",
background: "#fff",
};