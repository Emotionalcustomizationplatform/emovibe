import { Box, Heading, Text, Button, HStack } from "@chakra-ui/react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <Box
      bgImage="url('/images/home-bg.svg')"
      bgSize="cover"
      bgPosition="center"
      borderRadius="md"
      py={24}
      px={6}
      textAlign="center"
    >
      <Heading as="h1" size="2xl" color="teal.700" mb={4}>
        EmoVibe
      </Heading>
      <Text fontSize="lg" color="gray.700" mb={6}>
        AI customizable companions & vetted human supporters — Weekly membership $99.
      </Text>
      <HStack spacing={4} justify="center">
        <Link href="/customize" legacyBehavior>
          <Button colorScheme="teal" size="lg">Create AI Role</Button>
        </Link>
        <Link href="/chat" legacyBehavior>
          <Button variant="outline" size="lg">Enter Chat</Button>
        </Link>
      </HStack>
    </Box>
  );
}
