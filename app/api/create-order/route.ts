import { NextRequest, NextResponse } from "next/server";
import { razorpay } from "../../../lib/razorpay";

export async function POST(req: NextRequest) {
  try {
    const { plan, userId, } = await req.json();

    let amount = 0;


     console.log(
      "KEY ID:",
      process.env.RAZORPAY_KEY_ID
    );

    console.log(
      "SECRET EXISTS:",
      !!process.env.RAZORPAY_KEY_SECRET
    );


    if (plan === "pro") {
      amount = 99900; // ₹999
    }

    if (plan === "agency") {
      amount = 299900; // ₹2999
    }

    const order =
await razorpay.orders.create({
  amount,
  currency: "INR",
  receipt:
    `receipt_${Date.now()}`,

  notes: {
    userId,
    plan,
  },
});
    return NextResponse.json(order);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Order creation failed" },
      { status: 500 }
    );
  }
}