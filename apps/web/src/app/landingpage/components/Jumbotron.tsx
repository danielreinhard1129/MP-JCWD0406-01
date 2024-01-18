import { Button, Carousel } from 'flowbite-react';
import Image from 'next/image';
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi';
import { HiUserGroup } from 'react-icons/hi';
import { IoGlobeOutline } from 'react-icons/io5';
import { TbMoodCheck } from 'react-icons/tb';
import Autocomplete from './Autocomplete';

const Jumbotron = () => {
  return (
    <section className="pt-3 md:h-screen w-full pb-5">
      <div className="md:px-[200px] px-[20px]">
        <Autocomplete />
      </div>
      {/* Phone carausel */}
      <div className="md:hidden mt-3 h-[230px] ">
        <Carousel slideInterval={5000}>
          <div className=" md:ml-[50px] md:w-[800px] relative h-[380px] shadow-2xl">
            <Image
              src={'/images/herobg-min.jpg'}
              fill
              loading="lazy"
              quality={100}
              alt="background"
            />
          </div>
          <div className=" md:ml-[50px] md:w-[800px] relative h-[380px] shadow-2xl">
            <Image
              src={'/images/herobg-min.jpg'}
              fill
              loading="lazy"
              quality={100}
              alt="background"
            />
          </div>
          <div className=" md:ml-[50px] md:w-[800px] relative h-[380px] shadow-2xl">
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
      {/* Desktop layout */}
      <div className="mt-3 grid grid-cols-2">
        <div className="hidden md:block md:ml-[50px] md:w-[800px] relative h-[380px] shadow-2xl">
          <Image
            src={'/images/herobg-min.jpg'}
            fill
            loading="lazy"
            quality={100}
            alt="background"
          />
        </div>
        <div className="hidden md:block ml-[-100px] mt-[30px] mb-[25px] a p-[20px] backdrop-blur-sm border border-solid border-black">
          <h1 className="text-5xl"> Find your event</h1>
          <h1 className="text-5xl pt-3"> with your style</h1>
          <p className="mt-6">
            Creating unforgettable experiences and turning every event into an
            extraordinary moment that will be remembered forever.
          </p>
          <Button className="mt-[60px] bg-[#DAAB6E]">
            Get Started
            <FiArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="z-40 absolute hidden md:block">
        <div className="flex flex-wrap ml-[50px] mt-[-20px]">
          <div className="w-[45px] h-[50px] pl-2 pt-4 border border-solid bg-[#DAAB6E] border-black">
            <FiArrowLeft />
          </div>
          <div className="w-[45px] h-[50px] pl-2 pt-4  border border-solid bg-[#9B9A79] border-black">
            <FiArrowRight />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-3 mt-[30px] col-span-1 gap-3 md:ml-[100px] md:mr-[80px] ">
        <div className="box md:text-left text-center">
          <div className="flex md:justify-start justify-center">
            <HiUserGroup size={50} />
          </div>
          <text className="font-semibold">More than 500 ++ promoters.</text>
          <p>
            Eventerss has registered more than 500 ++ promoters ready to create
            unforgettable experiences
          </p>
        </div>
        <div className="box md:text-left text-center">
          <div className="flex md:justify-start justify-center">
            <IoGlobeOutline size={50} />
          </div>
          <text className="font-semibold">Eventerss are everywhere.</text>
          <p>
            Eventerss provides events in various places that will always be
            there for you
          </p>
        </div>
        <div className="box md:text-left text-center">
          <div className="flex md:justify-start justify-center">
            <TbMoodCheck size={50} />
          </div>
          <text className="font-semibold"> Good ratings from users.</text>
          <p>
            eventerss has been an intermediary and issued more than 250++ events
            and received satisfactory reviews from users
          </p>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
