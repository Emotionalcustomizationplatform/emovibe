// src/components/ChatWindow.tsx
"use client";
import { useState } from "react";
import axios from "axios";

export default function ChatWindow({ initialMessages = [], conversationId }: { initialMessages?: any[]; conversationId?: number }) {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  async function send() {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const { data } = await axios.post("/api/openai/chat", { conversationId, messages: [...messages, userMsg], roleTemplate: "You are a gentle supportive friend." });
      setMessages(prev => [...prev, { role: "assistant", content: data.reply }]);
    } catch (err) {
      setMessages(prev => [...prev, { role: "assistant", content: "Sorry, there was an error." }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-3xl mx-auto border rounded-lg p-4">
      <div className="min-h-[240px]">
        {messages.map((m, i) => (
          <div key={i} className={`mb-3 ${m.role === "user" ? "text-right" : "text-left"}`}>
            <div className={`inline-block p-3 rounded-lg ${m.role === "user" ? "bg-sky-100" : "bg-slate-100"}`}>{m.content}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <input className="flex-1 border p-2 rounded" value={input} onChange={e => setInput(e.target.value)} placeholder="Type a message..." />
        <button className="px-4 py-2 bg-primary text-white rounded" onClick={send} disabled={loading}>{loading ? "..." : "Send"}</button>
      </div>
    </div>
  );
}
