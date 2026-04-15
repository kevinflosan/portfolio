export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html suppressHydrationWarning>
      <body className="min-h-full bg-slate-900 text-slate-50 antialiased">
        {children}
      </body>
    </html>
  );
}
