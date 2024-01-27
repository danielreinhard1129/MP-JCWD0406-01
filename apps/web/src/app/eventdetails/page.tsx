'use client';
import React, { useEffect, useState } from 'react';
import HeroComp from './components/Hero';
import ReccomendationEventsComp from './components/ReccomendationEvents';
import axios from 'axios';
import { baseUrl } from '../utils/database';
import { useParams } from 'next/navigation';

const EventDetailPage = ({ slug }: any) => {
  const [event, setEventId] = useState([]);
  console.log(event);

  const params = useParams();
  console.log('iddddddd', params.slug);

  // const getEventId = async () => {
  //   try {
  //     const response = await axios.get(`${baseUrl}/events/${params.id}`);
  //     setEventId(response.data.data);
  //     console.log('dataaaaa', response.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   if (slug) {
  //     getEventId();
  //   }
  // }, [slug]);
  return (
    <main>
      <div className="bg-[#F6EEEA]">
        <div className="container mx-auto max-w-7xl p-5">
          <HeroComp />
        </div>
      </div>
      <div className="bg-[#F6EEEA]">
        <hr className="container mx-auto max-w-7xl" />
        <div className="container mx-auto max-w-7xl pt-5 pb-5 grid grid-cols-2">
          <ReccomendationEventsComp />
          <ReccomendationEventsComp />
        </div>
      </div>
    </main>
  );
};

export default EventDetailPage;
