'use client';
import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/portfolio/en/');
  }, []);
  return (
    <html lang="en">
      <body style={{ background: '#0f172a', margin: 0 }} />
    </html>
  );
}
