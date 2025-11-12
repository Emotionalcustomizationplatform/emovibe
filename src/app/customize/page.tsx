import CustomizeRoleForm from '@/components/CustomizeRoleForm';
import ResponsiveContainer from '@/components/ui/ResponsiveContainer';

export default function CustomizePage() {
  return (
    <ResponsiveContainer>
      <h2>Customize Your AI Companion</h2>
      <CustomizeRoleForm />
    </ResponsiveContainer>
  );
}