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
            color: "#111827",
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
          AdsMaster AI is an AI-powered Google Ads Assistant designed to
          help businesses, freelancers, marketers, startups, and agencies
          create better advertising campaigns faster and more efficiently.
          <br />
          <br />
          Creating successful Google Ads campaigns often requires keyword
          research, headline creation, ad copywriting, campaign planning,
          and continuous optimization. For many businesses, this process
          can be time-consuming, expensive, and difficult to manage.
          <br />
          <br />
          AdsMaster AI simplifies this process by helping users generate
          keywords, headlines, descriptions, campaign ideas, and campaign
          recommendations using Artificial Intelligence.
          <br />
          <br />
          Our mission is simple: help businesses save time, improve
          productivity, and create better Google Ads assets through the
          power of AI.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={card}>
            <h3>🚀 AI Campaign Builder</h3>
            <p>
              Generate campaign ideas, keywords, headlines and
              descriptions within minutes using Artificial
              Intelligence.
            </p>
          </div>

          <div style={card}>
            <h3>🎯 Keyword Generator</h3>
            <p>
              Discover high-intent keywords designed to improve
              targeting and campaign performance.
            </p>
          </div>

          <div style={card}>
            <h3>📈 AI Recommendations</h3>
            <p>
              Get actionable suggestions to improve ad quality,
              click-through rate and campaign effectiveness.
            </p>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "20px",
              color: "#111827",
            }}
          >
            Who Uses AdsMaster AI?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(250px,1fr))",
              gap: "20px",
            }}
          >
            <div style={card}>
              <h3>🏢 Small Businesses</h3>
              <p>
                Create advertising assets without hiring expensive
                agencies.
              </p>
            </div>

            <div style={card}>
              <h3>💼 Freelancers</h3>
              <p>
                Generate campaigns faster and serve more clients
                efficiently.
              </p>
            </div>

            <div style={card}>
              <h3>📊 Marketing Agencies</h3>
              <p>
                Reduce campaign creation time and improve team
                productivity.
              </p>
            </div>

            <div style={card}>
              <h3>🚀 Startups</h3>
              <p>
                Launch advertising campaigns faster with AI-powered
                assistance.
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "60px",
            padding: "35px",
            background: "#f8fafc",
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#111827",
            }}
          >
            Our Mission
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              lineHeight: "1.9",
            }}
          >
            We believe powerful advertising tools should not be limited
            to large corporations with massive budgets. AdsMaster AI was
            built to make campaign creation faster, simpler and more
            accessible for everyone.
          </p>
        </div>

        <div
          style={{
            marginTop: "40px",
            padding: "35px",
            background: "#f8fafc",
            borderRadius: "20px",
            border: "1px solid #e5e7eb",
          }}
        >
          <h2
            style={{
              fontSize: "36px",
              fontWeight: "700",
              marginBottom: "15px",
              color: "#111827",
            }}
          >
            Contact Us
          </h2>

          <p
            style={{
              color: "#64748b",
              fontSize: "18px",
              lineHeight: "1.9",
            }}
          >
            Have questions, feedback, partnership inquiries or need
            support? We'd love to hear from you.
          </p>

          <p
            style={{
              marginTop: "15px",
              fontSize: "20px",
              fontWeight: "700",
              color: "#111827",
            }}
          >
            📧 adsmasterai0@gmail.com
          </p>
        </div>
      </div>
    </main>
  );
}

const card = {
  padding: "24px",
  border: "1px solid #e5e7eb",
  borderRadius: "18px",
  background: "#ffffff",
};