"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer
      style={{
        background: "#ffffff",
        borderTop: "1px solid #e5e7eb",
        marginTop: "120px",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "90px 24px 40px",
        }}
      >
 <div
  className="footer-grid"
  style={{
    display: "grid",
    gridTemplateColumns: "1.5fr 1fr 1fr",
    gap: "40px",
    alignItems: "start",
  }}
>
          {/* Brand */}
          <div>
            <h2
              style={{
                fontSize: "32px",
                fontWeight: 900,
                color: "#111827",
                marginBottom: "18px",
                letterSpacing: "-1px",
              }}
            >
              AdsMaster AI
            </h2>

            <p
              style={{
                color: "#64748b",
                lineHeight: 1.9,
                fontSize: "16px",
                maxWidth: "420px",
              }}
            >
              AI-powered Google Ads platform helping businesses generate
              high-converting campaigns, keywords, ad copy and optimize
              budgets automatically.
            </p>
          </div>

          {/* Company */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 800,
                marginBottom: "24px",
                color: "#0f172a",
              }}
            >
              Company
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <Link
                href="/about"
                style={{
                  textDecoration: "none",
                  color: "#475569",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                About
              </Link>

              <Link
                href="/contact"
                style={{
                  textDecoration: "none",
                  color: "#475569",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Contact
              </Link>
              </div>
          </div>

          {/* Legal */}
          <div
            style={{
              background: "#ffffff",
              border: "1px solid #e2e8f0",
              borderRadius: "24px",
              padding: "30px",
              boxShadow: "0 10px 35px rgba(0,0,0,0.05)",
            }}
          >
            <h3
              style={{
                fontSize: "22px",
                fontWeight: 800,
                marginBottom: "24px",
                color: "#0f172a",
              }}
            >
              Legal
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "18px",
              }}
            >
              <Link
                href="/legal/privacy-policy"
                style={{
                  textDecoration: "none",
                  color: "#475569",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Privacy Policy
              </Link>

              <Link
                href="/legal/terms"
                style={{
                  textDecoration: "none",
                  color: "#475569",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Terms & Conditions
              </Link>

              <Link
                href="/legal/refund-policy"
                style={{
                  textDecoration: "none",
                  color: "#475569",
                  fontSize: "16px",
                  fontWeight: 500,
                }}
              >
                Refund Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: "60px",
            paddingTop: "25px",
            borderTop: "1px solid #e5e7eb",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <p
            style={{
              color: "#64748b",
              margin: 0,
              fontSize: "15px",
            }}
          >
            © 2026 AdsMaster AI. All rights reserved.
          </p>

          <div
            style={{
              background: "#ecfdf5",
              color: "#10b981",
              padding: "10px 18px",
              borderRadius: "999px",
              fontSize: "14px",
              fontWeight: 700,
            }}
          >
            ● All Systems Operational
          </div>
        </div>
      </div>
      <style jsx global>{`
  @media (max-width:768px){

    .footer-grid{
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }

  }
`}</style>
    </footer>
  );
}