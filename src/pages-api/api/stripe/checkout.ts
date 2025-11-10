// src/pages-api/api/stripe/checkout.ts
import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-11-19" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).end();
  const { email } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [{
        price_data: {
          product_data: { name: "EmoVibe Weekly Membership" },
          unit_amount: 9900,
          currency: "usd",
          recurring: { interval: "week" }
        },
        quantity: 1
      }],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/?checkout=success`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?checkout=cancel`
    });
    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "stripe_error" });
  }
}