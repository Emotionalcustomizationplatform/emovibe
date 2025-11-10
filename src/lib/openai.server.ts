// src/lib/openai.server.ts
import OpenAI from "openai";
import { z } from "zod";
import { rateLimiter } from "./rateLimit";
import { checkForSelfHarm } from "@/utils/validators";

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export async function chatWithAI({ messages, roleTemplate, userId }: { messages: { role: string; content: string }[]; roleTemplate: string; userId?: string; }) {
  // rate-limit per user
  await rateLimiter(userId || "anon");

  // check for crisis terms
  for (const m of messages) {
    if (checkForSelfHarm(m.content)) {
      throw new Error("CRISIS_DETECTED");
    }
  }

  // build system prompt based on roleTemplate
  const systemPrompt = roleTemplate;

  const response = await client.chat.completions.create({
    model: "gpt-4o-mini", // 或按你的权限选择
    messages: [
      { role: "system", content: systemPrompt },
      ...messages
    ],
    temperature: 0.9,
    max_tokens: 800
  });

  // parse content
  const reply = response.choices?.[0]?.message?.content ?? "Sorry, I can't respond right now.";
  return reply;
}
