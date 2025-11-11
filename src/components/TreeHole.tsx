
"use client";
import { Box, VStack, Textarea, Button, Text } from "@chakra-ui/react";
import { useState } from "react";

export default function TreeHole() {
  const [text, setText] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = () => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, text.trim()]);
    setText("");
  };

  return (
    <Box
      p={6}
      bgImage="url('/tree-bg.jpg')"   /* 树洞背景图，可自己换 */
      bgSize="cover"
      bgPos="center"
      borderRadius="md"
      minH="500px"
    >
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        🌳 树洞 - 你可以匿名倾诉任何心事
      </Text>
      <VStack spacing={4} align="stretch">
        <Textarea
          placeholder="写下你的心里话..."
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleSubmit}>
          提交
        </Button>
        <VStack align="start" mt={4}>
          {messages.map((msg, i) => (
            <Box key={i} p={3} bg="whiteAlpha.800" borderRadius="md" width="100%">
              {msg}
            </Box>
          ))}
        </VStack>
      </VStack>
    </Box>
  );
}