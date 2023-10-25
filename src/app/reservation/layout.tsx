import "../global.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // background color is #f5f5f5
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body>{children}</body>
    </html>
  );
}
