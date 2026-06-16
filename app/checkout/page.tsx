"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    startPayment();
  }, []);

  const startPayment = async () => {
    try {
      const plan =
        searchParams.get("plan") || "pro";

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        alert("Please login first");
        router.push("/");
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
            plan,
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

        name: "AdsMaster AI",

        description:
          "Pro Subscription",

        order_id: order.id,

        handler: async (
          response: any
        ) => {
          const verify =
            await fetch(
              "/api/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type":
                    "application/json",
                },
                body: JSON.stringify({
                  razorpay_order_id:
                    response.razorpay_order_id,

                  razorpay_payment_id:
                    response.razorpay_payment_id,

                  razorpay_signature:
                    response.razorpay_signature,

                  userId: user.id,

                  plan,
                }),
              }
            );

          const result =
            await verify.json();

          if (result.success) {
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

      const razorpay =
        new window.Razorpay(options);

      razorpay.open();
    } catch (error) {
      console.log(error);

      alert(
        "Payment failed"
      );
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent:
          "center",
        alignItems: "center",
      }}
    >
      <h2>
        Opening Payment Gateway...
      </h2>
    </div>
  );
}