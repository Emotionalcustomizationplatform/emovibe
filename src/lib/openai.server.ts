// src/lib/openai.server.ts
import OpenAI from "openai";
import { rateLimiter } from "./rateLimit";
import { checkForSelfHarm } from "@/utils/validators";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function chatWithAI({ messages, systemPrompt, userId }: { messages: { role: string; content: string }[]; systemPrompt?: string; userId?: string; }) {
  await rateLimiter(userId ?? "anon");
  for (const m of messages) if (checkForSelfHarm(m.content)) throw new Error("CRISIS_DETECTED");

  const res = await client.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: systemPrompt ?? "You are a compassionate support companion." },
      ...messages
    ],
    temperature: 0.8,
    max_tokens: 900
  });
  return res.choices?.[0]?.message?.content ?? "";
}