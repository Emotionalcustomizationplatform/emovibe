// src/app/page.tsx
import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function Home() {
  return (
    <Box textAlign="center" py={16}>
      <Heading as="h1" size="2xl" color="teal.700">EmoVibe</Heading>
      <Text mt={4} fontSize="lg">AI customizable companions & vetted human supporters — Weekly membership $99.</Text>
      <HStack spacing={4} justify="center" mt={6}>
        <Link href="/customize" legacyBehavior><Button colorScheme="teal">Create AI Role</Button></Link>
        <Link href="/chat" legacyBehavior><Button variant="outline">Enter Chat</Button></Link>
      </HStack>
    </Box>
  );
}