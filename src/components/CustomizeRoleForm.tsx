"use client";
import { useState } from "react";
import { VStack, Input, Select, Textarea } from "@chakra-ui/react";
import ButtonPrimary from "./ui/ButtonPrimary";
import { supabase } from "@/lib/supabase";

export default function CustomizeRoleForm() {
  const [name, setName] = useState("");
  const [gender, setGender] = useState("female");
  const [personality, setPersonality] = useState("friendly");
  const [instructions, setInstructions] = useState("");

  const user = supabase.auth.user();

  const handleSubmit = async () => {
    if (!user) return alert("Please login first!");
    const res = await fetch("/api/ai-role", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ user_id: user.id, name, gender, personality, instructions })
    });
    const data = await res.json();
    alert(`AI Role "${data.name}" created successfully!`);
    window.location.href = "/chat";
  };

  return (
    <VStack spacing={4} align="stretch">
      <Input placeholder="AI Name" value={name} onChange={e => setName(e.target.value)} />
      <Select value={gender} onChange={e => setGender(e.target.value)}>
        <option value="female">Female</option>
        <option value="male">Male</option>
        <option value="other">Other</option>
      </Select>
      <Select value={personality} onChange={e => setPersonality(e.target.value)}>
        <option value="friendly">Friendly</option>
        <option value="serious">Serious</option>
        <option value="funny">Funny</option>
      </Select>
      <Textarea placeholder="Special instructions for AI behavior" value={instructions} onChange={e => setInstructions(e.target.value)} />
      <ButtonPrimary onClick={handleSubmit}>Create AI Role</ButtonPrimary>
    </VStack>
  );
}