'use client';
import { useEffect, useState } from 'react';
import ChatRoom from './ChatRoom';
import MembershipButton from './MembershipButton';

export default function ProtectedChatRoom() {
  const [hasMembership, setHasMembership] = useState(false);

  useEffect(() => {
    const status = localStorage.getItem('membership') === 'active';
    setHasMembership(status);
  }, []);

  return hasMembership ? <ChatRoom /> : (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h2>You need a membership to enter the chat</h2>
      <MembershipButton />
    </div>
  );
}
