'use client';

import { useAppSelector } from '@/lib/hooks';
import { Textarea } from 'flowbite-react';
import React from 'react';

const HomePage = () => {
  const user = useAppSelector((state) => state.user);
  console.log('data get user', user);

  return (
    <div className="mt-24 text-4xl md:text-8xl text-center">
      HomePage
      <div>selamat datang </div>
      <div>{user.email}</div>
    </div>
  );
};

export default HomePage;
