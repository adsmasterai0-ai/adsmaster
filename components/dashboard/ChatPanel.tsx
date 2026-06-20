"use client";


import { useState, useRef, useEffect, useCallback } from "react";
import { supabase } from "../../lib/supabase";
import UpgradeModal from "../../components/dashboard/UpgradeModal";


interface Message {
  id: string;
  role: "user" | "ai";
  text: string;
  image?: string;
  timestamp: Date;
}

const uid = () => Math.random().toString(36).slice(2, 9);

function TypingIndicator() {
  return (
    <div style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      padding: "4px 0",
      animation: "fadeSlideUp 0.3s ease forwards"
    }}>
    <img
  src="/logo.png"
  alt="AdsMaster"
  style={{
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    objectFit: "cover",
  }}
/>
      <div style={{
        background: "#ffffff",
        border: "1px solid rgba(15,98,254,0.12)",
        borderRadius: "6px 18px 18px 18px",
        padding: "14px 20px",
        display: "flex", gap: "6px", alignItems: "center",
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)"
      }}>
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            width: "7px", height: "7px", borderRadius: "50%",
            background: "linear-gradient(135deg, #0f62fe, #0043ce)",
            animation: "adsBounce 1.4s infinite ease-in-out",
            animationDelay: `${i * 0.18}s`
          }} />
        ))}
      </div>
    </div>
  );
}

function MessageBubble({ msg }: { msg: Message }) {
  const isUser = msg.role === "user";
  return (
    <div style={{
      display: "flex",
      justifyContent: isUser ? "flex-end" : "flex-start",
      alignItems: "flex-end",
      gap: "10px",
      animation: "fadeSlideUp 0.32s cubic-bezier(.22,1,.36,1) forwards"
    }}>
   {!isUser && (
  <div
    style={{
      width: "34px",
      height: "34px",
      borderRadius: "50%",
      overflow: "hidden",
    }}
  >
    <img
      src="/logo.png"
      alt="AdsMaster"
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
      }}
    />
  </div>
)}

      <div style={{
        maxWidth: "72%",
        background: isUser
          ? "linear-gradient(135deg, #0f62fe 0%, #0043ce 100%)"
          : "#ffffff",
        color: isUser ? "#ffffff" : "#161616",
        borderRadius: isUser ? "18px 18px 6px 18px" : "6px 18px 18px 18px",
        padding: "14px 18px",
        fontSize: "14.5px",
        lineHeight: "1.75",
        boxShadow: isUser
          ? "0 6px 24px rgba(15,98,254,0.32)"
          : "0 2px 16px rgba(0,0,0,0.07)",
        border: isUser ? "none" : "1px solid rgba(0,0,0,0.07)",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
        letterSpacing: "0.012em"
      }}>
        {msg.image && (
          <img
            src={msg.image}
            alt=""
            style={{
              maxWidth: "220px",
              borderRadius: "12px",
              display: "block",
              marginBottom: "10px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.18)"
            }}
          />
        )}
        {msg.text}
        <div style={{
          fontSize: "10px",
          opacity: 0.42,
          marginTop: "7px",
          textAlign: "right",
          letterSpacing: "0.03em"
        }}>
          {msg.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </div>
      </div>

  {isUser && (
  <div
    style={{
      width: "40px",
      height: "40px",
      borderRadius: "50%",
      background:
        "linear-gradient(135deg,#2563eb 0%, #4f46e5 100%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#ffffff",
      fontSize: "15px",
      fontWeight: "800",
      flexShrink: 0,
      boxShadow:
        "0 8px 24px rgba(37,99,235,0.35)",
      border: "2px solid rgba(255,255,255,0.9)",
      fontFamily: "'Sora','Inter',sans-serif",
    }}
  >
    U
  </div>
)}
    </div>
  );
}

export default function ChatPanel() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showUpgrade, setShowUpgrade] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [plan, setPlan] = useState("free");
  const [userId, setUserId] = useState<string | null>(null);
  useEffect(() => {
  const loadPlan = async () => {

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) return;
    setUserId(user.id);
  const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", user.id)
  .maybeSingle();

console.log("AUTH USER:", user.id);
console.log("PROFILE:", data);
console.log("ERROR:", error);

setPlan(data?.plan || "free");
  };

  loadPlan();
}, []);


  const chatEndRef = useRef<HTMLDivElement>(null);

//    useEffect(() => {
//   const last = messages[messages.length - 1];

//   if (last?.role === "ai") {
//     chatEndRef.current?.scrollIntoView({
//       behavior: "smooth",
//     });
//   }
// }, [messages]);


  const handleSend = useCallback(async () => {
    const trimmed = input.trim();
    if (plan === "free") {
  alert(
    "Chat is available in Pro plan."
  );

  return;
}
    if (!trimmed && !imagePreview) return;
    if (isLoading) return;

    const userMsg: Message = {
      id: uid(),
      role: "user",
      timestamp: new Date(),
      text: trimmed || "📷 Analyze this screenshot",
      ...(imagePreview ? { image: imagePreview } : {}),
    };

    const updatedMsgs = [...messages, userMsg];
    setMessages(updatedMsgs);
    setInput("");
    const savedImage = imagePreview;
    setImagePreview(null);
    setIsLoading(true);

    try {
      let body: Record<string, unknown> = {};

      if (savedImage) {
  body = {
    type: "image",
    userId: userId, // ADD THIS
    imageBase64: savedImage,
    messages: updatedMsgs.map((m) => ({
      role: m.role,
      text: m.text,
    })),
        };
      } else {
       body = {
  
      type: "chat",
      userId: userId,
      messages: updatedMsgs.map((m) => ({
        role: m.role,
              text: m.text,
            })),
          };
             }



            console.log("SENDING BODY =", body);
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      if (data.upgrade) {
  setShowUpgrade(true);
  return;
}
      if (data.error) throw new Error(data.error);

      setMessages((p) => [
        ...p,
        {
          id: uid(),
          role: "ai",
          text: data.result || "No response received. Please retry.",
          timestamp: new Date(),
        },
      ]);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Unknown error";
      setMessages((p) => [
        ...p,
        {
          id: uid(),
          role: "ai",
          timestamp: new Date(),
          text: `⚠️ Error: ${msg}\n\nPlease retry karein.`,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [input, imagePreview, messages, isLoading, plan]);

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (plan === "free") {
  alert(
    "Screenshot Analysis Pro Plan me available hai."
  );
  return;
}
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = () => setImagePreview(r.result as string);
    r.readAsDataURL(f);
    e.target.value = "";
  };

  return (
    <div style={{
      minHeight: "40px",
      background: "linear-gradient(160deg, #f0f4ff 0%, #e8eeff 40%, #f5f0ff 100%)",
      display: "flex",
      alignItems: "center",
      borderRadius: "20px",
      justifyContent: "center",
      boxSizing: "border-box",
      fontFamily: "'Sora', 'DM Sans', system-ui, sans-serif"
    }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');

        @keyframes adsBounce {
          0%, 60%, 100% { transform: translateY(0); opacity: .35; }
          30% { transform: translateY(-9px); opacity: 1; }
        }
        @keyframes fadeSlideUp {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
          0%   { background-position: -400px 0; }
          100% { background-position: 400px 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(15,98,254,0); }
          50%       { box-shadow: 0 0 0 6px rgba(15,98,254,0.10); }
        }

        .am-scroll::-webkit-scrollbar { width: 4px; }
        .am-scroll::-webkit-scrollbar-track { background: transparent; }
        .am-scroll::-webkit-scrollbar-thumb { background: #c7d2fe; border-radius: 4px; }
        .am-scroll::-webkit-scrollbar-thumb:hover { background: #a5b4fc; }

        .am-chip {
          cursor: pointer;
          padding: 8px 15px;
          border-radius: 12px;
          background: rgba(255,255,255,0.85);
          border: 1.5px solid rgba(15,98,254,0.13);
          color: #3f4a6b;
          font-size: 13px;
          font-weight: 600;
          font-family: inherit;
          transition: all 0.2s cubic-bezier(.22,1,.36,1);
          display: flex;
          align-items: center;
          gap: 6px;
          backdrop-filter: blur(8px);
        }
        .am-chip:hover {
          background: rgba(15,98,254,0.08) !important;
          border-color: rgba(15,98,254,0.35) !important;
          color: #0f62fe !important;
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(15,98,254,0.12);
        }
        .am-chip:active { transform: translateY(0) scale(0.97); }

        .am-send {
          background: linear-gradient(135deg, #0f62fe 0%, #0043ce 100%);
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 12px 28px;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          font-family: inherit;
          letter-spacing: 0.02em;
          transition: all 0.25s cubic-bezier(.22,1,.36,1);
          display: flex;
          align-items: center;
          gap: 7px;
          box-shadow: 0 6px 20px rgba(15,98,254,0.30);
          animation: pulseGlow 3s infinite;
        }
        .am-send:hover:not(:disabled) {
          transform: translateY(-3px) !important;
          box-shadow: 0 12px 32px rgba(15,98,254,0.42) !important;
        }
        .am-send:active:not(:disabled) { transform: translateY(0) scale(0.98) !important; }
        .am-send:disabled { opacity: 0.45; cursor: not-allowed; animation: none; }

        .am-input-box {
          background: rgba(255,255,255,0.92);
          border: 1.5px solid rgba(15,98,254,0.14);
          border-radius: 20px;
          padding: 16px 18px 13px;
          box-shadow: 0 4px 24px rgba(15,98,254,0.07);
          transition: border-color 0.2s, box-shadow 0.2s;
          backdrop-filter: blur(12px);
        }
        .am-input-box:focus-within {
          border-color: rgba(15,98,254,0.50) !important;
          box-shadow: 0 6px 32px rgba(15,98,254,0.14) !important;
        }

        .am-empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 48px 20px;
          opacity: 0;
          animation: fadeSlideUp 0.6s 0.2s ease forwards;
        }
      `}</style>

      {/* CARD */}
      <div style={{
        width: "100%",
        maxWidth: "100%",
        background: "rgba(255,255,255,0.75)",
        borderRadius: "22px",
        position: isFullscreen ? "fixed" : "relative",
        inset: isFullscreen ? "0" : "auto",
        zIndex: isFullscreen ? 9999 : 1,
        height: isFullscreen ? "100vh" : "auto",
        boxShadow: "0 32px 80px rgba(15,98,254,0.11), 0 8px 32px rgba(0,0,0,0.06)",
        border: "1px solid rgba(15,98,254,0.10)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        backdropFilter: "blur(20px)"
      }}>





<div
  style={{
    textAlign: "center",
    padding: "20px",
    borderBottom: "1px solid #e5e7eb",
    background: "#ffffff",
  }}
>

  <div
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  }}
>
  <button
    onClick={() =>
      setIsFullscreen(!isFullscreen)
    }
    style={{
      padding: "10px 16px",
      borderRadius: "10px",
      border: "1px solid #e2e8f0",
      background: "#ffffff",
      cursor: "pointer",
      fontWeight: "600",
    }}
  >
    {isFullscreen ? "✖️ Exit" : "⛶ Full Screen"}
  </button>
</div>


  <h2
    style={{
      fontSize: "32px",
      fontWeight: "800",
      marginBottom: "10px",
      color: "#0f172a",
    }}
  >
    🤖 AI Google Ads Assistant
  </h2>

  <p
    style={{
      color: "#64748b",
      fontSize: "15px",
      marginBottom: "18px",
    }}
  >
    Ask questions, analyze screenshots, discover keywords and optimize campaigns.
  </p>

  <div
    style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "10px",
    }}
  >
    <span className="feature-chip">📚 Learn Google Ads</span>
    <span className="feature-chip">🚀 Build Campaign</span>
    <span className="feature-chip">🎯 Find Keywords</span>
    <span className="feature-chip">📝 Generate Ad Copy</span>
    <span className="feature-chip">💰 Reduce CPC</span>
    <span className="feature-chip">📈 Increase ROAS</span>
    <span className="feature-chip">⭐ Quality Score</span>
    <span className="feature-chip">📊 Campaign Audit</span>
    <span className="feature-chip">📷 Screenshot Analysis</span>
    <span className="feature-chip">🏆 Ads Strategy</span>
  </div>
</div>

<style>{`
.feature-chip{
  padding:8px 14px;
  border-radius:999px;
  background:#f8fafc;
  border:1px solid #e2e8f0;
  font-size:10px;
  font-weight:600;
  color:#1e293b;
  white-space:nowrap;
}
`}</style>

        {/* MESSAGES */}
        <div
          className="am-scroll"
          style={{
            height: "280px",
            overflowY: "auto",
            padding: "24px 20px",
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            background: "transparent"
          }}
        >
          {messages.length === 0 && (
            <div className="am-empty-state">
              <div style={{
                width: "60px", height: "60px", borderRadius: "18px",
                background: "linear-gradient(135deg, #ffffff 0%, #ffffff 100%)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "26px",
                boxShadow: "0 12px 32px rgba(255, 255, 255, 0.3)"
              }}> 
              
              </div>
       
            </div>
          )}

          {messages.map((msg) => (
            <MessageBubble key={msg.id} msg={msg} />
          ))}

          {isLoading && <TypingIndicator />}
          <div ref={chatEndRef} />
        </div>

        {/* DIVIDER */}
        <div style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(15,98,254,0.10), transparent)"
        }} />

        {/* INPUT AREA */}
        <div style={{ padding: "16px 20px 22px", background: "rgba(248,250,255,0.8)" }}>

          {/* Image preview */}
          {imagePreview && (
            <div style={{ marginBottom: "14px", position: "relative", display: "inline-block" }}>
              <img
                src={imagePreview}
                alt=""
                style={{
                  maxHeight: "100px",
                  borderRadius: "14px",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.14)",
                  border: "2px solid rgba(15,98,254,0.20)"
                }}
              />
              <button
                onClick={() => setImagePreview(null)}
                style={{
                  position: "absolute", top: "-9px", right: "-9px",
                  background: "linear-gradient(135deg, #ef4444, #dc2626)",
                  color: "#fff",
                  border: "2.5px solid #fff",
                  borderRadius: "50%",
                  width: "24px", height: "24px",
                  cursor: "pointer",
                  fontSize: "14px", fontWeight: 800,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 12px rgba(239,68,68,0.40)",
                  transition: "transform 0.15s"
                }}
              >×</button>
            </div>
          )}

          {/* Textarea card */}
          <div className="am-input-box">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about Google Ads"
              rows={3}
              style={{
                width: "100%",
                border: "none",
                outline: "none",
                resize: "none",
                fontSize: "14.5px",
                lineHeight: "1.75",
                color: "#161616",
                background: "transparent",
                boxSizing: "border-box",
                fontFamily: "inherit",
                letterSpacing: "0.012em"
              }}
            />

            {/* Bottom bar */}
            <div style={{
              borderTop: "1px solid rgba(15,98,254,0.09)",
              paddingTop: "11px",
              marginTop: "6px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px"
            }}>
              {/* Screenshot upload */}
             <label className="am-chip">
  {plan === "free"
    ? "🔒 Upload (Pro)"
    : "📷 Upload"}

  <input
    type="file"
    hidden
    accept="image/*"
    onChange={handleImage}
  />
</label>

              {/* Send button */}
              <button
                className="am-send"
                onClick={handleSend}
                disabled={isLoading || (!input.trim() && !imagePreview)}
              >
                {isLoading ? (
                  <>
                    <span style={{
                      width: "14px", height: "14px", border: "2px solid rgba(255,255,255,0.4)",
                      borderTopColor: "#fff", borderRadius: "50%",
                      animation: "spin 0.7s linear infinite",
                      display: "inline-block"
                    }} />
                    Thinking…
                  </>
                ) : (
                  <>Send →</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
 <UpgradeModal
  open={showUpgrade}
  message="Upgrade to Pro to continue using this feature."
/>
    </div>
  );
}