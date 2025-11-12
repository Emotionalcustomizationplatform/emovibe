import { useState } from 'react';
import axios from 'axios';

export default function CustomizeRoleForm() {
  const [roleName, setRoleName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await axios.post('/api/ai-role', { roleName, description });
      alert('Role created successfully!');
      setRoleName('');
      setDescription('');
    } catch {
      alert('Error saving role');
    }
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