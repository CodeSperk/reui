export default function ComponentsLayout({ children }) {
  return (
    <div style={{ display: 'flex' }}>
      <aside style={{ width: '20%' }}>
        {/* Sidebar navigation */}
      </aside>
      <main style={{ flex: 1 }}>{children}</main>
    </div>
  );
}
