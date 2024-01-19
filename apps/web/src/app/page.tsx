'use client';
import { useAppSelector } from '@/lib/hooks';
import HomePage from './home/page';

export default function Home() {
  const user = useAppSelector((state) => state.user);

  return <main>{user.id ? <HomePage /> : null}</main>;
}
