'use client';
import { useState } from 'react';

export default function CustomizeRoleForm({ onSubmit }: any) {
  const [roleName, setRoleName] = useState('');
  const [personality, setPersonality] = useState('');
  const [style, setStyle] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit({ roleName, personality, style });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input value={roleName} onChange={(e) => setRoleName(e.target.value)} required />

      <label>Personality</label>
      <textarea value={personality} onChange={(e) => setPersonality(e.target.value)} />

      <label>Style</label>
      <input value={style} onChange={(e) => setStyle(e.target.value)} />

      <button type="submit" style={{ marginTop: 10 }}>Save</button>
    </form>
  );
}