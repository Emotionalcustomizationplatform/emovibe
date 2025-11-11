"use client";

import { Box, Heading, Text, VStack, Button, Image } from "@chakra-ui/react";

export default function PaymentPage() {
  return (
    <Box minH="100vh" py={20} px={10} textAlign="center">
      <Heading mb={6}>Payment Options</Heading>
      <Text mb={4}>Choose your payment method:</Text>
      <VStack spacing={6}>
        <Button colorScheme="blue" size="lg">Pay with Stripe</Button>
        <Button colorScheme="green" size="lg">Pay with PayPal</Button>
        <Box>
          <Text mb={2}>Pay with WeChat:</Text>
          <Image src="/images/wechat-qr.png" alt="WeChat QR" mx="auto" boxSize="200px"/>
        </Box>
      </VStack>
    </Box>
  );
}