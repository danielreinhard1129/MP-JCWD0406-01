'use client';

import React, { useEffect } from 'react';
import Login from './components/CardLogin';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';

const LoginPage = () => {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (user?.id) {
      router.push('/');
    }
  });
  return (
    <main>
      <Login />
    </main>
  );
};

export default LoginPage;
