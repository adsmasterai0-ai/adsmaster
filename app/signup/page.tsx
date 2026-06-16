"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
const router = useRouter();

const [name, setName] =
useState("");

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

const handleSignup = async () => {
try {
setLoading(true);
setError("");

  const { data, error } =
    await supabase.auth.signUp({
      email: email
        .trim()
        .toLowerCase(),
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

  if (error) {
    setError(error.message);
    return;
  }

  if (data.user) {
    const {
      error: profileError,
    } = await supabase
      .from("profiles")
      .upsert({
        id: data.user.id,
        full_name: name,
        email: email
          .trim()
          .toLowerCase(),
        plan: "free",
        ai_chats_used: 0,
        screenshots_used: 0,
        campaigns_used: 0,
      });

    if (profileError) {
      console.log(
        profileError
      );
    }
  }

  router.replace("/chat");

} catch (err) {
  console.error(err);

  setError(
    "Signup failed"
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
CreateAccount 🚀
</h1>

    <p
      style={{
        color: "#64748b",
        marginBottom: "25px",
      }}
    >
      Start using AdsMaster AI
    </p>

    <input
      placeholder="Full Name"
      value={name}
      onChange={(e) =>
        setName(
          e.target.value
        )
      }
      style={input}
    />

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
      onClick={handleSignup}
      disabled={loading}
      style={button}
    >
      {loading
        ? "Creating..."
        : "Create Account"}
    </button>

    <p
      style={{
        textAlign: "center",
        marginTop: "20px",
        color: "#64748b",
      }}
    >
      Already have an account?{" "}
      <span
        onClick={() =>
          router.push(
            "/login"
          )
        }
        style={{
          color: "#2563eb",
          cursor: "pointer",
          fontWeight: "700",
        }}
      >
        Login
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