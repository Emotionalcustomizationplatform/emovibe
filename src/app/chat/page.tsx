"use client";
import { useState, useRef, useEffect } from "react";
import { VStack, Box, Input, IconButton, HStack, Select, Text } from "@chakra-ui/react";
import ChatBubble from "@/components/ui/ChatBubble";
import ButtonPrimary from "@/components/ui/ButtonPrimary";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";
import { FaPaperPlane } from "react-icons/fa";
import { supabase } from "@/lib/supabase";

type Message = { role: "user" | "assistant" | "human"; content: string };

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"ai"|"human">("ai");
  const [isMember, setIsMember] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const user = supabase.auth.user(); // 当前登录用户

  useEffect(() => {
    if (user) {
      fetch(`/api/membership?user_id=${user.id}`)
        .then(res => res.json())
        .then(data => setIsMember(data.isMember));
    }
  }, [user]);

  const sendMessage = () => {
    if (!input.trim()) return;
    if (!isMember) return alert("You need to be a member to chat! Please pay $99/week.");

    const newMsg: Message = { role: "user", content: input.trim() };
    setMessages(prev => [...prev, newMsg]);

    // 模拟 AI / 人类回复
    setTimeout(() => {
      const reply: Message = {
        role: mode === "ai" ? "assistant" : "human",
        content: mode === "ai" ? "AI: " + input.split("").reverse().join("") : "Human: Thanks for sharing!"
      };
      setMessages(prev => [...prev, reply]);
    }, 800);

    setInput("");
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  if (!user) return (
    <ResponsiveContainer>
      <Text color="red.500" fontSize="lg">Please login to access the chat.</Text>
    </ResponsiveContainer>
  );

  return (
    <ResponsiveContainer>
      <Box mb={4}>
        <HStack spacing={4}>
          <Select value={mode} onChange={e => setMode(e.target.value as any)}>
            <option value="ai">AI Companion</option>
            <option value="human">Human Supporter</option>
          </Select>
          {!isMember && <ButtonPrimary onClick={() => window.location.href="/payment"}>Become Member $99</ButtonPrimary>}
        </HStack>
      </Box>

      <Box
        border="1px solid #CBD5E0"
        borderRadius="md"
        p={4}
        height="500px"
        overflowY="auto"
        display="flex"
        flexDirection="column"
      >
        <VStack spacing={3} align="stretch">
          {messages.map((msg, i) => (
            <ChatBubble key={i} role={msg.role} message={msg.content} />
          ))}
        </VStack>
        <div ref={messagesEndRef} />
      </Box>

      <HStack mt={3}>
        <Input
          placeholder={isMember ? "Type your message..." : "Become a member to chat"}
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && sendMessage()}
          isDisabled={!isMember}
        />
        <IconButton
          aria-label="Send"
          icon={<FaPaperPlane />}
          colorScheme="teal"
          onClick={sendMessage}
          isDisabled={!isMember}
        />
      </HStack>
    </ResponsiveContainer>
  );
}