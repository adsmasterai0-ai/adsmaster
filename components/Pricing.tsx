"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../lib/supabase";

export default function Pricing() {
  const router = useRouter();

const handlePlanPurchase = async (
  planId: string
) => {
  try {
    if (planId === "free") {
      router.push("/chat");
      return;
    }

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      alert("Please login first");
      router.push("/login");
      return;
    }

    const orderRes = await fetch(
      "/api/create-order",
      {
        method: "POST",
        headers: {
          "Content-Type":
            "application/json",
        },
      body: JSON.stringify({
  plan: planId,
  userId: user.id,
}),
      }
    );

    const order =
      await orderRes.json();

    const options = {
      key: process.env
        .NEXT_PUBLIC_RAZORPAY_KEY_ID,

      amount: order.amount,

      currency: order.currency,

      order_id: order.id,

      name: "AdsMaster AI",

      description: `${planId.toUpperCase()} Subscription`,

      handler: async (
        response: any
      ) => {

        const verifyRes =
          await fetch(
            "/api/verify-payment",
            {
              method: "POST",
              headers: {
                "Content-Type":
                  "application/json",
              },
              body: JSON.stringify({
                ...response,
                userId: user.id,
                plan: planId,
              }),
            }
          );

        const verify =
          await verifyRes.json();

        if (verify.success) {
          router.push(
            "/success"
          );
        } else {
          alert(
            "Payment verification failed"
          );
        }
      },

      theme: {
        color: "#2563eb",
      },
    };

    const rzp =
      new (window as any).Razorpay(
        options
      );

    rzp.open();

  } catch (error) {
    console.log(error);

    alert(
      "Something went wrong"
    );
  }
};
const plans = [
  {
    name: "Free",
    price: "₹0",
    badge: "",
    planId: "free",
    features: [
      "10 AI Chat",
      "2 Screenshot Analysis",
      "10 AI Suggestion",
      "❌ Headlines Generator",
      "❌ Descriptions Generator",
      "❌ Keywords Generator",
      "❌ Keyword Suggestions",
      
    ],
    button: "Start Free",
  },

  {
    name: "Pro",
    price: "₹999",
    badge: "MOST POPULAR",
    planId: "pro",
    features: [
      " 300 Headlines Generator",
      " 100 Descriptions Generator",
      " 400 Keywords Generator",
      " 100 AI Chats / Month",
      " 15 Screenshot Uploads / Month",
      " Keyword Suggestions",
      " Advanced Recommendations",
    ],
    button: "Upgrade to Pro",
  },

  {
  name: "Custom",
  price: "Contact Us",
  badge: "UNLIMITED",
  planId: "custom",
  features: [
    " Unlimited Headlines",
    " Unlimited Descriptions",
    " Unlimited Keywords",
    " Unlimited AI Chats",
    " Unlimited Screenshot Analysis",
    " Unlimited Campaign Generation",
    " Dedicated Onboarding",
      ],
  button: "Contact Sales",
},

];

  return (
    <section
      style={{
        padding: "80px 20px",
        background:
          "linear-gradient(to bottom,#ffffff,#f8fafc)",
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "56px",
            fontWeight: 900,
            letterSpacing: "-2px",
            color: "#0f172a",
            marginBottom: "12px",
          }}
        >
          Pricing Plans
        </h2>

        <p
          style={{
            color: "#64748b",
            fontSize: "18px",
            marginBottom: "50px",
          }}
        >
          Choose the perfect plan for your growth.
        </p>

      <div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: "24px",
    flexWrap: "wrap",
  }}
>
          {plans.map((plan, index) => (
            <div
              key={index}
              style={{
                width: "400px",
                minHeight: "100%",
                background:
                
                  "linear-gradient(180deg,#ffffff,#f8fafc)",
                borderRadius: "28px",
                padding: "32px",
                border:
                  index === 1
                    ? "2px solid #2563eb"
                    : "1px solid #e2e8f0",
                boxShadow:
                  index === 1
                    ? "0 20px 60px rgba(37,99,235,0.15)"
                    : "0 10px 35px rgba(15,23,42,0.06)",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    right: "18px",
                    background:
                      index === 1
                        ? "#2563eb"
                        : "#0f172a",
                    color: "#fff",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "11px",
                    fontWeight: 800,
                    letterSpacing: "1px",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "#0f172a",
                  marginBottom: "18px",
                }}
              >
                {plan.name}
              </h3>

              <div
                style={{
                  marginBottom: "25px",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    fontWeight: 900,
                    color: "#0f172a",
                    lineHeight: 1,
                  }}
                >
                  {plan.price}
                </div>

                <div
                  style={{
                    color: "#64748b",
                    marginTop: "8px",
                    fontSize: "14px",
                  }}
                >
                  Per Month
                </div>
              </div>

              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: "0 0 30px 0",
                  textAlign: "left",
                }}
              >
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "10px 0",
                      borderBottom:
                        "1px solid rgba(148,163,184,0.12)",
                      color: "#475569",
                      fontSize: "15px",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "999px",
                        background:
                          "linear-gradient(135deg,#2563eb,#7c3aed)",
                        color: "#fff",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "12px",
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>

                    {feature}
                  </li>
                ))}
              </ul>
<button
onClick={() => {
  if (plan.planId === "custom") {
    window.location.href = "/contact";
  } else {
    handlePlanPurchase(plan.planId);
  }
}}
  style={{
    width: "100%",
    padding: "16px",
    borderRadius: "16px",
    border: "none",
    cursor: "pointer",
    fontSize: "15px",
    fontWeight: 700,
    color: "#fff",
    background:
      plan.planId === "pro"
        ? "linear-gradient(135deg,#2563eb,#4f46e5)"
        : plan.planId === "agency"
        ? "linear-gradient(135deg,#7c3aed,#4f46e5)"
        : "#0f172a",
  }}
>
  {plan.button}
</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}