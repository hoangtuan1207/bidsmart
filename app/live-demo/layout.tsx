export default function LiveDemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // không có AppBar / Footer
}