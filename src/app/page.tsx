import ProtectedChatRoom from '@/components/ProtectedChatRoom';

export default function Home() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1>Welcome to Emovibe</h1>
      <p>Your personal AI companion chat platform.</p>
      <ProtectedChatRoom />
    </main>
  );
}