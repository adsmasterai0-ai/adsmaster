"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function FeedbackSection() {
  
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const starLabels = ["", "Poor", "Fair", "Good", "Great", "Excellent"];
  const activeStar = hoveredStar || rating;

  async function handleSubmit() {
    if (!rating) {
      setError("Please select a star rating before submitting.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const { error: dbError } = await supabase.from("feedback").insert({
        user_id: user?.id ?? null,
        rating,
        message: message.trim() || null,
        email: email.trim() || user?.email || null,
        created_at: new Date().toISOString(),
      });

      if (dbError) throw dbError;

      setSubmitted(true);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Something went wrong. Please try again.";
      setError(msg);
    } finally {
      setLoading(false);
    }
  }

  /* ── Success State ── */
  if (submitted) {
    return (
      <>
        <style>{`
          @keyframes popIn {
            0%   { transform: scale(0.5); opacity: 0; }
            70%  { transform: scale(1.08); }
            100% { transform: scale(1); opacity: 1; }
          }
          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(12px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>
        <div
          style={{
            minHeight: "100vh",
            background: "#F7F8FA",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "24px 16px",
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          }}
        >
          <div
            style={{
              background: "#fff",
              borderRadius: 24,
              padding: "52px 40px",
              maxWidth: "100%",
              width: "100%",
              textAlign: "center",
              boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
              border: "1px solid #EAECF0",
              animation: "fadeUp 0.4s ease both",
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "linear-gradient(135deg, #D1FAE5, #6EE7B7)",
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                margin: "0 auto 24px",
                fontSize: 32,
                animation: "popIn 0.5s cubic-bezier(0.175,0.885,0.32,1.275) both",
                boxShadow: "0 8px 20px rgba(16,185,129,0.2)",
              }}
            >
              ✓
            </div>
            <h2
              style={{
                margin: "0 0 10px",
                fontSize: 22,
                fontWeight: 700,
                color: "#111827",
                letterSpacing: "-0.02em",
              }}
            >
              🎉 Thank you!
            </h2>
            <p style={{ margin: "0 0 28px", fontSize: 15, color: "#6B7280", lineHeight: 1.6 }}>
              Your feedback helps us improve AdsMaster AI.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                setRating(0);
                setMessage("");
                setEmail("");
              }}
              style={{
                padding: "10px 24px",
                borderRadius: 10,
                border: "1.5px solid #E5E7EB",
                background: "#fff",
                color: "#374151",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Submit another
            </button>
          </div>
        </div>
      </>
    );
  }

  /* ── Main Form ── */
  return (
    <>
      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "#F7F8FA",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 16px",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        }}
      >
        <div
          style={{
            background: "#fff",
            borderRadius: 24,
            padding: "40px 36px",
            maxWidth: "100%",
            width: "100%",
            boxShadow: "0 4px 24px rgba(0,0,0,0.07), 0 1px 4px rgba(0,0,0,0.04)",
            border: "1px solid #EAECF0",
          }}
        >
          {/* Header */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ fontSize: 28, marginBottom: 10 }}>⭐</div>
            <h1
              style={{
                margin: "0 0 6px",
                fontSize: 22,
                fontWeight: 750,
                color: "#111827",
                letterSpacing: "-0.025em",
              }}
            >
              Help us improve AdsMaster AI
            </h1>
            <p style={{ margin: 0, fontSize: 14, color: "#6B7280", lineHeight: 1.5 }}>
              Your feedback helps us build a better product.
            </p>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: "#F3F4F6", marginBottom: 28 }} />

          {/* Star Rating */}
          <div style={{ marginBottom: 28 }}>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                marginBottom: 12,
                letterSpacing: "0.01em",
              }}
            >
              Overall rating
              <span style={{ color: "#EF4444", marginLeft: 4 }}>*</span>
            </label>

            <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  onClick={() => setRating(n)}
                  onMouseEnter={() => setHoveredStar(n)}
                  onMouseLeave={() => setHoveredStar(0)}
                  aria-label={`${n} star`}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "2px 3px",
                    fontSize: 34,
                    lineHeight: 1,
                    transition: "transform 0.12s ease",
                    transform: n <= activeStar ? "scale(1.15)" : "scale(1)",
                    color: n <= activeStar ? "#FBBF24" : "#E5E7EB",
                    filter:
                      n <= activeStar
                        ? "drop-shadow(0 2px 4px rgba(251,191,36,0.4))"
                        : "none",
                  }}
                >
                  ★
                </button>
              ))}
              {activeStar > 0 && (
                <span
                  style={{
                    marginLeft: 8,
                    fontSize: 13,
                    fontWeight: 600,
                    color: "#FBBF24",
                  }}
                >
                  {starLabels[activeStar]}
                </span>
              )}
            </div>
          </div>

          {/* Message */}
          <div style={{ marginBottom: 20 }}>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                marginBottom: 8,
                letterSpacing: "0.01em",
              }}
            >
              Your feedback
            </label>
            <textarea
              rows={4}
              placeholder="Tell us what you loved or what we can improve..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onFocus={() => setFocusedField("message")}
              onBlur={() => setFocusedField(null)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: focusedField === "message" ? "2px solid #6366F1" : "2px solid #E5E7EB",
                background: focusedField === "message" ? "#FAFAFE" : "#FAFAFA",
                fontSize: 14,
                color: "#111827",
                outline: "none",
                resize: "vertical",
                fontFamily: "inherit",
                lineHeight: 1.6,
                transition: "border-color 0.15s, box-shadow 0.15s",
                boxShadow:
                  focusedField === "message"
                    ? "0 0 0 3px rgba(99,102,241,0.1)"
                    : "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Email */}
          <div style={{ marginBottom: 28 }}>
            <label
              style={{
                display: "block",
                fontSize: 13,
                fontWeight: 600,
                color: "#374151",
                marginBottom: 8,
                letterSpacing: "0.01em",
              }}
            >
              Email{" "}
              <span style={{ fontWeight: 400, color: "#9CA3AF" }}>(optional)</span>
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setFocusedField("email")}
              onBlur={() => setFocusedField(null)}
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: 12,
                border: focusedField === "email" ? "2px solid #6366F1" : "2px solid #E5E7EB",
                background: focusedField === "email" ? "#FAFAFE" : "#FAFAFA",
                fontSize: 14,
                color: "#111827",
                outline: "none",
                fontFamily: "inherit",
                transition: "border-color 0.15s, box-shadow 0.15s",
                boxShadow:
                  focusedField === "email"
                    ? "0 0 0 3px rgba(99,102,241,0.1)"
                    : "none",
                boxSizing: "border-box",
              }}
            />
          </div>

          {/* Error */}
          {error && (
            <div
              style={{
                marginBottom: 18,
                padding: "11px 14px",
                borderRadius: 10,
                background: "#FEF2F2",
                border: "1.5px solid #FECACA",
                fontSize: 13,
                color: "#DC2626",
                fontWeight: 500,
              }}
            >
              ⚠️ {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              padding: "14px 0",
              borderRadius: 12,
              border: "none",
              background: loading
                ? "#C7D2FE"
                : "linear-gradient(135deg, #6366F1 0%, #4F46E5 100%)",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              letterSpacing: "0.01em",
              cursor: loading ? "not-allowed" : "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              boxShadow: loading ? "none" : "0 4px 16px rgba(99,102,241,0.3)",
              transition: "opacity 0.15s",
            }}
          >
            {loading ? (
              <>
                <span
                  style={{
                    width: 16,
                    height: 16,
                    border: "2px solid rgba(255,255,255,0.35)",
                    borderTopColor: "#fff",
                    borderRadius: "50%",
                    display: "inline-block",
                    animation: "spin 0.7s linear infinite",
                  }}
                />
                Submitting…
              </>
            ) : (
              "Submit feedback"
            )}
          </button>

          <p
            style={{
              marginTop: 16,
              textAlign: "center",
              fontSize: 12,
              color: "#9CA3AF",
            }}
          >
            Takes less than 30 seconds · Anonymous unless you add your email
          </p>
        </div>
      </div>
    </>
  );
}