'use client';
import { useEffect } from 'react';

export default function RootPage() {
  useEffect(() => {
    window.location.replace('/portfolio/en/');
  }, []);
  return <div style={{ background: '#0f172a', minHeight: '100vh' }} />;
}
