import { Card } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const ReccomendationEventsComp = () => {
  return (
    <div className="w-fit">
      <div className="flex flex-wrap shadow-xl rounded-2xl ">
        <div className="md:w-[300px] w-[300px] rounded-tl-2xl rounded-bl-2xl relative h-[210px] overflow-hidden">
          <Image
            src={'/images/herobg-min.jpg'}
            fill
            objectFit="cover"
            alt={'card event'}
          />
        </div>
        <div className="p-2">
          <h1 className="font-semibold text-[20px]">Lorem, ipsum dolor.</h1>
          <p className="font-light mt-2">
            Lorem ipsum dolor sit amet consectetur .
          </p>
          <div className="mt-1 flex justify-between flex-wrap">
            <div className="grid grid-cols-2 gap-2">
              <span className="text-[15px] text-white font-medium bg-third rounded-lg px-3">
                Music
              </span>
              <span className="text-[15px] text-white font-medium bg-third rounded-lg px-3">
                Food
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1 font-light">
              <FiCalendar />
              date time
            </div>
          </div>
          <div className="mt-2 flex flex-wrap justify-between">
            <text>Promotor</text>
            <text className="flex flex-wrap items-center gap-1 font-light">
              <FiMapPin /> Location
            </text>
          </div>
          <div className="mt-2 text-[15px]">
            <text>Event price</text>
          </div>
          <div className="mt-3">
            <text className="underline text-[15px] text-green-600">
              View Details
            </text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReccomendationEventsComp;
