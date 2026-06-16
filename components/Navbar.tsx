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
          margin: "12px 20px",
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
            padding: "18px 28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
            }}
          >
            <img
              src="/logo.png"
              alt="AdsMaster AI"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "20px",
                objectFit: "cover",
                boxShadow:
                  "0 10px 25px rgba(37,99,235,0.25)",
              }}
            />

            <div>
              <div
                style={{
                  fontSize: "30px",
                  fontWeight: 900,
                  color: "#111827",
                  letterSpacing: "-1px",
                  lineHeight: 1,
                }}
              >
                AdsMaster AI
              </div>
            </div>
          </div>

          {/* Menu */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "28px",
            }}
          >
            <button
              onClick={handleDashboard}
              disabled={loading}
              style={{
                textDecoration: "none",
                color: "#374151",
                fontWeight: 700,
                fontSize: "15px",
                border: "none",
                background: "transparent",
                cursor: "pointer",
              }}
            >
              {loading ? "Loading..." : "DASHBOARD"}
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
                Login
              </button>
            </Link>

            <Link href="/signup">
              
            </Link>
          </div>
        </div>
      </nav>

      {loading && (
        <div
          style={{
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
      `}</style>
    </>
  );
}



// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <nav
//       style={{
//         position: "sticky",
//         top: "16px",
//         zIndex: 100,
//         margin: "12px 20px",
//         background: "rgba(255,255,255,0.92)",
//         backdropFilter: "blur(16px)",
//         border: "1px solid #e5e7eb",
//         borderRadius: "20px",
//         boxShadow: "0 10px 40px rgba(0,0,0,0.08)",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: "1400px",
//           margin: "0 auto",
//           padding: "18px 28px",
//           display: "flex",
//           justifyContent: "space-between",
//           alignItems: "center",
//         }}
//       >
//         {/* Logo */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "14px",
//           }}
//         >
//           <img
//             src="/logo.png"
//             alt="AdsMaster AI"
//             style={{
//               width: "48px",
//               height: "48px",
//               borderRadius: "20px",
//               objectFit: "cover",
//               boxShadow:
//                 "0 10px 25px rgba(37,99,235,0.25)",
//             }}
//           />

//           <div>
//             <div
//               style={{
//                 fontSize: "30px",
//                 fontWeight: 900,
//                 color: "#111827",
//                 letterSpacing: "-1px",
//                 lineHeight: 1,
//               }}
//             >
//               AdsMaster AI
//             </div>
//           </div>
//         </div>

//         {/* Menu */}
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             gap: "28px",
//           }}
//         >
//           <a
//             href="/chat"
//             style={{
//               textDecoration: "none",
//               color: "#374151",
//               fontWeight: 700,
//               fontSize: "15px",
//             }}
//           >
//             Dashboard
//           </a>

//           <Link href="/login">
//             <button
//               style={{
//                 padding: "11px 18px",
//                 borderRadius: "12px",
//                 border: "1px solid #d1d5db",
//                 background: "#fff",
//                 cursor: "pointer",
//                 fontWeight: 600,
//                 fontSize: "14px",
//               }}
//             >
//               Login
//             </button>
//           </Link>

//           <Link href="/signup">
//             <button
//               style={{
//                 padding: "12px 22px",
//                 borderRadius: "12px",
//                 border: "none",
//                 background:
//                   "linear-gradient(135deg,#2563eb,#4f46e5)",
//                 color: "#fff",
//                 cursor: "pointer",
//                 fontWeight: 700,
//               }}
//             >
//               Start Free →
//             </button>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// }