import { Badge, Button } from 'flowbite-react';
import React from 'react';
import { FaMapLocationDot } from 'react-icons/fa6';
import { FiClock } from 'react-icons/fi';
import TransactionComp from './Transaction';
import Category from '@/app/eventdiscovery/components/Category';
import { RiUserVoiceFill } from 'react-icons/ri';

const EventDetailsComp = ({ event }: any) => {
  console.log('titleeee', event);

  return (
    <section className="w-full">
      <div className="flex justify-between gap-2">
        <div className="">
          <div className="mt-5">
            <div className="flex flex-wrap gap-3">
              {event.Event_category?.slice(0, 3).map((value: any) => {
                return <Category key={value.id} value={value} />;
              })}
            </div>
            <h1 className="text-[50px] mt-2 font-serif">{event.title}</h1>
            <div className=" flex flex-wrap items-center gap-3 pt-4">
              <FaMapLocationDot size={30} />
              <div className="">
                <text className="font-semibold text-[20px]">
                  {/* {event.location.country}s */}
                </text>
                <br />
                {/* <text className="font-medium">{event.location.city}</text> */}
              </div>
            </div>
          </div>
          <div className="mt-5">
            <text className="text-[25px] font-bold">About this event</text>
            <div className="mt-2">
              <text className="text-[19px] font-medium">Promotor</text>
              <div className="flex flex-wrap items-center">
                <RiUserVoiceFill />
                {/* <text className="ml-2 font-medium">{event.user.username}</text> */}
              </div>
              <div className="mt-3">{/* <p>{event.description}</p> */}</div>
            </div>
          </div>
        </div>
        <div className="sticky top-2 h-fit">
          <TransactionComp event={event} />
        </div>
      </div>
    </section>
  );
};

export default EventDetailsComp;
