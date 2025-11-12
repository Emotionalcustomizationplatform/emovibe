import { useState } from 'react';

export default function CustomizeRoleForm() {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Role created: ${roleName}`);
    // 这里可以调用 API 保存到 Supabase 或 OpenAI
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <input
        type="text"
        placeholder="Role Name"
        value={roleName}
        onChange={e => setRoleName(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required
      />
      <button type="submit">Create Role</button>
    </form>
  );
}