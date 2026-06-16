"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
const router = useRouter();

const [email, setEmail] =
useState("");

const [password, setPassword] =
useState("");

const [loading, setLoading] =
useState(false);

const [error, setError] =
useState("");

useEffect(() => {
checkSession();
}, []);

const checkSession = async () => {
const {
data: { session },
} =
await supabase.auth.getSession();

if (session) {
  router.replace("/");
}

};

const handleLogin = async () => {
try {
setLoading(true);
setError("");

  const { error } =
    await supabase.auth.signInWithPassword({
      email: email
        .trim()
        .toLowerCase(),
      password,
    });

if (error) {

  if (
    error.message
      .toLowerCase()
      .includes("invalid login credentials")
  ) {
    setError(
      "Invalid email or password. If you don't have an account, please sign up first."
    );
  } else {
    setError(
      "Unable to login. Please try again."
    );
  }

  return;
}

  router.replace("/chat");

} catch (err) {
  console.error(err);

  setError(
    "Login failed. Please try again later."
  );
} finally {
  setLoading(false);
}

};

return (
<div
style={{
minHeight: "100vh",
display: "flex",
justifyContent: "center",
alignItems: "center",
background:
"linear-gradient(180deg,#f8fafc,#eef2ff)",
padding: "20px",
}}
> 
<div
style={{
width: "100%",
maxWidth: "450px",
background: "#fff",
padding: "40px",
borderRadius: "24px",
boxShadow:
"0 20px 60px rgba(0,0,0,.08)",
}}
> 
<h1
style={{
fontSize: "36px",
fontWeight: "800",
marginBottom: "10px",
}}
> 
Welcome Back 👋
</h1>

    <p
      style={{
        color: "#64748b",
        marginBottom: "25px",
      }}
    >
      Login to AdsMaster AI
    </p>

    <input
      type="email"
      placeholder="Email Address"
      value={email}
      onChange={(e) =>
        setEmail(
          e.target.value
        )
      }
      style={input}
    />

    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) =>
        setPassword(
          e.target.value
        )
      }
      style={input}
    />

    {error && (
      <p
        style={{
          color: "#dc2626",
          marginBottom: "14px",
        }}
      >
        {error}
      </p>
    )}

    <button
      onClick={handleLogin}
      disabled={loading}
      style={button}
    >
      {loading
        ? "Logging In..."
        : "Login"}
    </button>

    <p
      style={{
        textAlign: "center",
        marginTop: "20px",
        color: "#64748b",
      }}
    >
      Don't have an account?{" "}
      <span
        onClick={() =>
          router.push(
            "/signup"
          )
        }
        style={{
          color: "#2563eb",
          cursor: "pointer",
          fontWeight: "700",
        }}
      >
        Sign Up
      </span>
    </p>
  </div>
</div>

);
}

const input = {
width: "100%",
padding: "14px",
marginBottom: "14px",
borderRadius: "12px",
border:
"1px solid #d1d5db",
fontSize: "15px",
};

const button = {
width: "100%",
padding: "14px",
borderRadius: "12px",
border: "none",
background: "#2563eb",
color: "#fff",
fontWeight: 700,
cursor: "pointer",
fontSize: "15px",
};