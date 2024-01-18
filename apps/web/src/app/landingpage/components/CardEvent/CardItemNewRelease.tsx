import Image from 'next/image';
import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';

const CardItemNewRelease = () => {
  return (
    <a href="/eventdetails">
      <div className="md:w-[300px] w-[350px] bg-[#C8AA8E] rounded-2xl shadow-xl">
        <div className="md:w-[300px] w-[350px] rounded-tl-2xl rounded-tr-2xl  relative h-[180px] overflow-hidden">
          <Image
            src={'/images/herobg-min.jpg'}
            fill
            objectFit="cover"
            alt={'card event'}
          />
        </div>
        <div className="px-3 mt-4">
          <h1 className="font-semibold text-[20px]">Lorem, ipsum dolor.</h1>
          <p className="font-light mt-2">
            Lorem ipsum dolor sit amet consectetur .
          </p>
          <div className="mt-3 flex justify-between flex-wrap">
            <div className="grid grid-cols-2 gap-2">
              <span className="text-[15px] bg-[#B45948] font-light bg-slate-500 rounded-lg px-2">
                Music
              </span>
              <span className="text-[15px] bg-[#B45948] font-light bg-slate-500 rounded-lg px-2">
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
          <div className="mt-3 pb-2">
            <text className="underline text-[15px] text-green-600">
              View Deatails
            </text>
          </div>
        </div>
      </div>
    </a>
  );
};

export default CardItemNewRelease;
