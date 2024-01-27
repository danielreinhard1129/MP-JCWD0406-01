import { Badge, Button, Carousel } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';
import CardTransactionComp from '../transaction/CardTransaction';
import { FiBookOpen, FiCalendar, FiClock } from 'react-icons/fi';
import { FaMapLocationDot } from 'react-icons/fa6';
import VoucherComp from '../../transactions/components/Voucher';
import TotalPrice from '../../transactions/components/TotalPrice';

const HeroComp = () => {
  return (
    <section>
      <div className="p-5 bg-[#E0DFD8] shadow-xl">
        <div className=" shadow-xl">
          <Carousel className="p-5" slideInterval={5000}>
            <div className="w-[900px] relative h-[380px] shadow-2xl">
              <Image
                src={'/images/herobg-min.jpg'}
                fill
                loading="lazy"
                quality={100}
                alt="background"
              />
            </div>
            <div className="w-[900px] relative h-[380px] shadow-2xl">
              <Image
                src={'/images/herobg-min.jpg'}
                fill
                loading="lazy"
                quality={100}
                alt="background"
              />
            </div>
            <div className="w-[900px] relative h-[380px] shadow-2xl">
              <Image
                src={'/images/herobg-min.jpg'}
                fill
                loading="lazy"
                quality={100}
                alt="background"
              />
            </div>
          </Carousel>
        </div>
      </div>
      <div className=" mt-5 flex">
        <div className="gap-2">
          <div className="flex flex-wrap gap-3">
            <Badge className="bg-[#CB9489]">Category</Badge>
            <Badge className="bg-[#CB9489]">Category</Badge>
          </div>
          <h1 className="text-4xl mt-2">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <div className="mt-5">
            <text className="text-[25px] font-bold">Date and Time</text>
            <div className="flex flex-wrap justify-start items-center gap-3 pt-2">
              <FiCalendar />
              <text className="font-light">
                Sat, 20 Jan 2024 09:00 - 17:00 GMT+8
              </text>
            </div>
          </div>
          <div className="mt-5">
            <text className="text-[25px] font-bold">Location</text>
            <div className=" flex flex-wrap gap-3 pt-4">
              <FaMapLocationDot />
              <div className="">
                <text className="font-semibold">Buddhist Fellowship West</text>
                <br />
                <text className="font-light">
                  2 Telok Blangah St 31 #02-00 Building Singapore, 108942
                  Singaporet
                </text>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <text className="text-[25px] font-bold">About this event</text>
            <div className="mt-3">
              <div className="flex flex-wrap items-center">
                <FiClock />
                <text className="ml-2">Duration: 6 Hours</text>
              </div>
              <h2 className="font-medium mt-2">
                What are the goals of the learning series?
              </h2>
              <ul className="list-disc ml-5 mt-3">
                <li>
                  Assist participants in understanding the complexity, and the
                  simplicity, of racism using critical thinking,
                  self-reflection, and communication.
                </li>
                <li>
                  Connect this to an understanding of other systems of
                  oppression.
                </li>
                <li>
                  Create a safe, healing learning environment for participants
                  to learn, grow, and explore racism in our society, and in
                  ourselves.
                </li>
                <li>
                  Begin to develop implementable strategies to address/repair
                  the harm racism has caused.
                </li>
                <li>
                  Introduce the Dock C. Bracy Center for Human Reconciliation
                  and offer a path forward.
                </li>
              </ul>
            </div>
          </div>
          <h2 className="mt-5 font-semibold"> Categories </h2>
          <div className="flex flex-wrap mt-3 gap-2">
            <Button pill className="bg-third">
              Music
            </Button>
            <Button pill className="bg-third">
              Food
            </Button>
            <Button pill className="bg-third">
              Health
            </Button>
            <Button pill className="bg-third">
              Hobbies
            </Button>
            <Button pill className="bg-third">
              Bussiness
            </Button>
          </div>
        </div>
        <div className="sticky top-2 h-fit">
          <div>
            <CardTransactionComp />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroComp;
