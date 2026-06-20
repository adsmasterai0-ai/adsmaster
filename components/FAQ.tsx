"use client";

import { useState } from "react";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is AdsMaster AI?",
      answer:
        "AdsMaster AI helps advertisers generate Google Ads keywords, headlines, descriptions and optimization recommendations using AI."
    },
    {
      question: "Does AdsMaster AI connect to Google Ads?",
      answer:
        "No. AdsMaster AI currently works as an AI assistant and coaching platform. It does not directly modify or manage Google Ads accounts."
    },
    {
      question: "Can I generate keywords for any business?",
      answer:
        "Yes. You can generate keyword ideas for local businesses, eCommerce stores, SaaS companies, agencies and service providers."
    },
    {
      question: "Can AI generate ad headlines and descriptions?",
      answer:
        "Yes. AdsMaster AI creates Google Ads headlines and descriptions tailored to your business and advertising goals."
    },
    {
      question: "What is Screenshot Analysis?",
      answer:
        "Upload screenshots of your campaigns and receive AI-powered recommendations to improve performance."
    },
    {
      question: "Do I need Google Ads experience?",
      answer:
        "No. AdsMaster AI is built for beginners, freelancers, agencies and business owners."
    },
    {
      question: "Is my data secure?",
      answer:
        "Yes. Uploaded information is processed securely and we do not sell your business data."
    },
    {
      question: "Who should use AdsMaster AI?",
      answer:
        "Freelancers, marketers, startups, agencies and businesses looking to create better Google Ads assets faster."
    }
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        {/* Heading */}

        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "10px 18px",
              borderRadius: "999px",
              background: "#eff6ff",
              border: "1px solid #bfdbfe",
              color: "#2563eb",
              fontWeight: 700,
              fontSize: "14px",
            }}
          >
            Frequently Asked Questions
          </div>

          <h2
            style={{
              fontSize: "44px",
              fontWeight: "900",
              marginTop: "20px",
              color: "#111827",
              lineHeight: "1.1",
              letterSpacing: "-1px",
            }}
          >
            Questions? We've Got Answers.
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "18px auto 0",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#64748b",
            }}
          >
            Everything you need to know about AdsMaster AI before getting started.
          </p>
        </div>

        {/* FAQ */}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "22px",
                background: "#ffffff",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,.04)",
                transition: "all .25s ease",
              }}
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                style={{
                  width: "100%",
                  padding: "28px",
                  border: "none",
                  background: "transparent",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  fontSize: "18px",
                  fontWeight: "700",
                  color: "#111827",
                  textAlign: "left",
                }}
              >
                {faq.question}

                <span
                  style={{
                    fontSize: "28px",
                    color: "#2563eb",
                    fontWeight: "400",
                  }}
                >
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div
                  style={{
                    padding: "0 28px 28px",
                    color: "#64748b",
                    lineHeight: "1.9",
                    fontSize: "16px",
                  }}
                >
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}