"use client";
import { Box, Text, Link as CLink } from "@chakra-ui/react";
import Link from "next/link";

export default function Footer() {
  return (
    <Box as="footer" borderTop="1px" borderColor="gray.200" py={6} textAlign="center">
      <Text fontSize="sm" color="gray.500">
        &copy; 2025 EmoVibe. All rights reserved. | 
        <Link href="/privacy" passHref><CLink ml={1} color="teal.500">Privacy Policy</CLink></Link>
      </Text>
    </Box>
  );
}
