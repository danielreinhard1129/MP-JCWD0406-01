'use client';
import EventDetailsComp from './components/EventDetails';
import ThumbnailComp from './components/Thumbnail';
import ReccomendationEventsComp from './components/ReccomendationEvents';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '@/app/utils/database';
import { useParams } from 'next/navigation';

const EventDetail = () => {
  const [event, setEvent] = useState([]);
  const params = useParams();
  console.log('paramsss', params.slug);

  const getEvent = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/${params.slug}`);
      setEvent(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getEvent();
  }, []);

  return (
    <main>
      <div className="bg-[#F6EEEA]">
        <div className="container mx-auto max-w-7xl p-5">
          <ThumbnailComp />
        </div>
      </div>
      <div className="bg-[#F6EEEA]">
        <div className="container mx-auto px-5 max-w-7xl">
          <EventDetailsComp event={event} />
        </div>
      </div>
      <div className="bg-[#F6EEEA]">
        <div className="container mx-auto max-w-7xl flex overflow-x-scroll pt-5 gap-2">
          <ReccomendationEventsComp />
          <ReccomendationEventsComp />
          <ReccomendationEventsComp />
          <ReccomendationEventsComp />
          <ReccomendationEventsComp />
          <ReccomendationEventsComp />
          <ReccomendationEventsComp />
        </div>
      </div>
    </main>
  );
};

export default EventDetail;
