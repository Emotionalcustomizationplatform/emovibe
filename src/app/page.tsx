'use client';

import Link from 'next/link';
import ResponsiveContainer from '@/components/ui/ResponsiveContainer';

export default function Home() {
  return (
    <ResponsiveContainer>
      <h1>💬 Welcome to Emovibe</h1>
      <p>Your emotional support AI companion — made for international users.</p>

      <div style={{ marginTop: 20 }}>
        <Link href="/chat">
          <button>Start Chat</button>
        </Link>
        <Link href="/customize" style={{ marginLeft: 10 }}>
          <button>Create Custom Character</button>
        </Link>
      </div>
    </ResponsiveContainer>
  );
}