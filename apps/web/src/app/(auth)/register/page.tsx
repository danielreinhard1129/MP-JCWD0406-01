'use client';

import { useAppSelector } from '@/lib/hooks';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import CardRegister from './components/CardRegister';

const RegisterPage = () => {
  const user = useAppSelector((state) => state.user);
  const router = useRouter();
  useEffect(() => {
    if (user?.id) {
      router.push('/');
    }
  });
  return (
    <main>
      <CardRegister />
    </main>
  );
};

export default RegisterPage;
