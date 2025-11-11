export default function ResponsiveContainer({ children }: any) {
  return (
    <div style={{
      maxWidth: 800,
      margin: '0 auto',
      padding: 20
    }}>
      {children}
    </div>
  );
}