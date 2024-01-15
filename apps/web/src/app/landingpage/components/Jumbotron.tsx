import { Button, Carousel, Select } from 'flowbite-react';
import Image from 'next/image';
import {
  FiArrowLeft,
  FiArrowRight,
  FiArrowUpRight,
  FiInbox,
} from 'react-icons/fi';
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
          <Button className="mt-[60px] bg-[#270C03]">
            Get Started
            <FiArrowUpRight />
          </Button>
        </div>
      </div>
      <div className="z-50 absolute hidden md:block">
        <div className="flex flex-wrap ml-[50px] mt-[-20px]">
          <div className="w-[45px] h-[50px] pl-2 pt-4 border border-solid bg-slate-500 border-black">
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
            <FiInbox size={50} />
          </div>
          <text className="font-semibold"> Lorem, ipsum dolor.</text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex
            repellendus rem voluptatibus. Quam recusandae
          </p>
        </div>
        <div className="box md:text-left text-center">
          <div className="flex md:justify-start justify-center">
            <FiInbox size={50} />
          </div>
          <text className="font-semibold"> Lorem, ipsum dolor.</text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex
            repellendus rem voluptatibus. Quam recusandae
          </p>
        </div>
        <div className="box md:text-left text-center">
          <div className="flex md:justify-start justify-center">
            <FiInbox size={50} />
          </div>
          <text className="font-semibold"> Lorem, ipsum dolor.</text>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia ex
            repellendus rem voluptatibus. Quam recusandae
          </p>
        </div>
      </div>
    </section>
  );
};

export default Jumbotron;
