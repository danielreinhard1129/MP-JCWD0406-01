import { useAppSelector } from '@/lib/hooks';
import { redirect } from 'next/navigation';

export const CustomerGuard = (Component: any) => {
  return function IsCustomer(props: any) {
    const role = useAppSelector((state) => state.user.roleId);

    if (role === 1) {
      redirect('/admin/dashboard');
    } else {
      return <Component {...props} />;
    }
  };
};