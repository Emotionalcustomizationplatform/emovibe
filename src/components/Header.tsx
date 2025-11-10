"use client";
import { Box, Flex, Button, Spacer, Link as CLink } from "@chakra-ui/react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    supabase.auth.getUser().then(r => setUser(r.data.user));
    const sub = supabase.auth.onAuthStateChange((_, session) => setUser(session?.user ?? null));
    return () => sub.subscription.unsubscribe();
  }, []);
  async function signOut() {
    await supabase.auth.signOut();
    setUser(null);
  }
  return (
    <Box borderBottom="1px" borderColor="gray.200">
      <Flex maxW="1100px" mx="auto" align="center" p={3}>
        <Link href="/"><CLink fontWeight="bold">EmoVibe</CLink></Link>
        <Spacer />
        <Link href="/customize"><CLink mr={4}>Customize</CLink></Link>
        <Link href="/treehole"><CLink mr={4}>Treehole</CLink></Link>
        <Link href="/help"><CLink mr={4}>Help</CLink></Link>
        {user ? (
          <>
            <Link href="/chat"><Button size="sm" mr={3}>Chat</Button></Link>
            <Button size="sm" onClick={signOut}>Sign out</Button>
          </>
        ) : (
          <Link href="/login"><Button size="sm">Login</Button></Link>
        )}
      </Flex>
    </Box>
  );
}
