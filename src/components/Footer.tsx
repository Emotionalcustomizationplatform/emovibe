import { Box, Text, Link as CLink } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box borderTop="1px" borderColor="gray.200" py={4} mt={12}>
      <Text fontSize="sm" textAlign="center" color="gray.500">
        © 2025 EmoVibe. <CLink href="/privacy">Privacy Policy</CLink> | <CLink href="/terms">Terms</CLink>
      </Text>
    </Box>
  );
}
