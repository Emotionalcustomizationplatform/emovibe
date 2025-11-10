import CustomizeRoleForm from "@/components/CustomizeRoleForm";
import ResponsiveContainer from "@/components/ui/ResponsiveContainer";

export default function CustomizePage() {
  return (
    <ResponsiveContainer>
      <h1 style={{ fontSize: '1.75rem', fontWeight: 600, color: '#2C7A7B', marginBottom: 24 }}>Create Your AI Companion</h1>
      <CustomizeRoleForm />
      <p style={{ marginTop: 16, fontSize: '0.85rem', color: '#718096' }}>
        Tip: Describe the companion's personality, gender, and special instructions. Do not request illegal actions.
      </p>
    </ResponsiveContainer>
  );
}