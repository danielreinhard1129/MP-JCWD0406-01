import { Badge } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import Category from './Category';

interface ICardItems {
  event: any;
}

const CardAllEvents: React.FC<ICardItems> = ({ event }) => {
  console.log('testtttt', event);
  return (
    <Link href={`/events/${event.id}`}>
      <div className="md:w-[300px] w-[350px] h-[400px] bg-[#b0bfd1] rounded-2xl shadow-xl">
        <div className="md:w-[300px] w-[350px] rounded-tl-2xl rounded-tr-2xl  relative h-[180px] overflow-hidden">
          <Image
            src={'/images/herobg-min.jpg'}
            fill
            objectFit="cover"
            alt={'card event'}
          />
        </div>
        <div className="px-3 mt-2 ">
          <h1 className="font-semibold text-[19px] line-clamp-1">
            {event.title}
          </h1>
          <div className=" flex justify-between flex-wrap">
            <div className=" flex gap-1 items-center">
              <FiCalendar />
              {event.startDate.slice(0, 10)}
            </div>
            <div>
              <span className="flex flex-wrap items-center gap-1 font-light">
                <FiMapPin /> {event.location.city}
              </span>
            </div>
          </div>
          <div className=" flex flex-wrap justify-between">
            <text>{event.user.first_name}</text>
          </div>
          <div className="mt-1 text-[15px]">
            <text className="font-bold">Prize: Rp: {event.price}</text>
          </div>
          <div className="flex gap-2">
            {/* <Badge className="bg-[#ffb6c1]">{event.category}</Badge> */}
            {event.Event_category?.slice(0, 3).map((value: any) => {
              return <Category key={value.id} value={value} />;
            })}
          </div>
          <p className="font-light mt-2 line-clamp-2">{event.description}</p>
          <Link href={'/viewdetails'}>
            <text className="underline font-bold text-[#1f2a38]">
              view details
            </text>
          </Link>
        </div>
      </div>
    </Link>
  );
};

export default CardAllEvents;
