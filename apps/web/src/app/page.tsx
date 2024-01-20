'use client';
import { useAppSelector } from '@/lib/hooks';
import LandingPage from './landingpage/page';

export default function Home() {
  const user = useAppSelector((state) => state.user);

  return <main>{user.id ? <LandingPage /> : null}</main>;
}
