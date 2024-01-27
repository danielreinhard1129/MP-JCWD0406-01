import { baseUrl } from '@/app/utils/database';
import { useAppSelector } from '@/lib/hooks';
import { IUser } from '@/type/user.type';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export const useGetUserById = () => {
  const userId = useAppSelector((state) => state.user);
  const [users, setUsers] = useState<IUser[]>([]);
  console.log(users);
  const getUsers = async () => {
    try {
      const response = await axios.get(`${baseUrl}/data/${userId.id}`);
      setUsers(response.data.data);

      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [userId]);
  return users;
};
