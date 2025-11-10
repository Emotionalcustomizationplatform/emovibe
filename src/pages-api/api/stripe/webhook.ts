// src/pages-api/api/stripe/webhook.ts
import { buffer } from "micro";
import Stripe from "stripe";
import type { NextApiRequest, NextApiResponse } from "next";
import { supabaseAdmin } from "@/lib/supabase";

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2024-11-19" });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const sig = req.headers["stripe-signature"]!;
  const raw = await buffer(req);
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw.toString(), sig as string, process.env.STRIPE_WEBHOOK_SECRET!);
  } catch (err) {
    console.error("Invalid webhook signature", err);
    return res.status(400).end();
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    // optional: create or update subscription record in DB
    // recommended: call stripe.subscriptions.retrieve(session.subscription) to get period_end
  }

  res.json({ received: true });
}