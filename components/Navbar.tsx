"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleDashboard = () => {
    setLoading(true);
    router.push("/chat");
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: "16px",
          zIndex: 100,
          margin: "1px 20px",
          background: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(16px)",
          border: "1px solid #e5e7eb",
          borderRadius: "20px",
          boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "12px 16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div
          className= "navbar-brand"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flex: 1,
              minWidth : 0,
            }}
          >
            <img
              src="/logo.png"
              alt="AdsMaster AI"
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.25)",
              }}
            />

            <div>


       <div
       className= "navbar-title"
  style={{
    fontSize: "20px",
    fontWeight: 900,
    color: "#111827",
    letterSpacing: "-1px",
    lineHeight: 1,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  }}
>
  AdsMaster
</div>
            </div>
          </div>

          {/* Menu */}
          <div
          className="navbar-actions"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              flexShrink: 0,
            }}
          >
     <button
  onClick={handleDashboard}
  disabled={loading}
  style={{
    padding: "10px 16px",
    borderRadius: "14px",
    fontSize: "13px",
    border: "none",
    background:
      "linear-gradient(135deg,#4f46e5,#2563eb)",
    color: "#fff",
    fontWeight: 700,
       cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow:
      "0 10px 25px rgba(79,70,229,0.25)",
  }}
>
   {loading ? "Loading..." : "Dashboard"}
</button>

            <Link href="/login">
              <button
                style={{
                  padding: "11px 18px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  background: "#fff",
                  cursor: "pointer",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Get Started
              </button>
            </Link>

            <Link href="/signup">
              
            </Link>
          </div>
        </div>
      </nav>

      {loading && (
        <div
        className = "navbar-container"
          style
          ={{
            maxWidth: "1400px",
            margin: "0 auto",
            padding: "18px, 28px",
            position: "fixed",
            inset: 0,
            background: "rgba(255,255,255,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 9999,
          }}
        >
          <div
            style={{
              width: "60px",
              height: "60px",
              border: "6px solid #e5e7eb",
              borderTop: "6px solid #2563eb",
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
            }}
          />
        </div>
      )}

      <style jsx global>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
         
@media (max-width:768px){

.navbar-brand{
  gap:8px !important;
  flex:1 !important;
  min-width:0 !important;
}

.navbar-title{
  font-size:14px !important;
  max-width:95px !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
  white-space:nowrap !important;
}

.navbar-actions{
  gap:6px !important;
}

.navbar-actions button{
  padding:8px 10px !important;
  font-size:11px !important;
}

}

      `}</style>
    </>
  );
}

