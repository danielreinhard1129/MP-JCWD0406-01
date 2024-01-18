import React from 'react';
import HeroComp from './components/Hero';
import ReccomendationEventsComp from './components/ReccomendationEvents';

const EventDetailPage = () => {
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
