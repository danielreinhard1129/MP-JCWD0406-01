'use client';
import { baseUrl } from '@/app/utils/database';
import { useAppSelector } from '@/lib/hooks';
import { IEvent } from '@/type/event.type';
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useGetEventByid = () => {
  const userId = useAppSelector((state) => state.user.id);
  console.log('data', userId);

  const [events, setEvent] = useState<IEvent[]>([]);

  console.log(events);

  const getEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/${userId}`);
      setEvent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (userId) {
      getEvents();
    }
  }, [userId]);

  return events;
};
