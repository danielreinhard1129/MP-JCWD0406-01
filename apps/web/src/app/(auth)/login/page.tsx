'use client';

import React, { useEffect } from 'react';
import Login from './components/CardLogin';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/lib/hooks';

const LoginPage = () => {
  const userId = useAppSelector((state) => state.user);

  const router = useRouter();
  useEffect(() => {
    if (userId?.id) {
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
