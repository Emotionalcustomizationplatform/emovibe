import { Box, Text } from "@chakra-ui/react";

interface ChatBubbleProps {
  role: "user" | "assistant" | "human";
  message: string;
}

export default function ChatBubble({ role, message }: ChatBubbleProps) {
  let bg = "gray.100";
  let align = "flex-start";

  if (role === "user") {
    bg = "teal.100";
    align = "flex-end";
  } else if (role === "human") {
    bg = "yellow.100";
    align = "flex-start";
  }

  return (
    <Box alignSelf={align} bg={bg} borderRadius="md" p={3} maxW="70%" mb={2}>
      <Text>{message}</Text>
    </Box>
  );
}
