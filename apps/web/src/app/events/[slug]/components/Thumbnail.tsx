import { Carousel } from 'flowbite-react';
import Image from 'next/image';
import React from 'react';

const ThumbnailComp = () => {
  return (
    <div>
      <div className=" shadow-xl">
        <Carousel
          className="bg-[#d7d7d7] rounded-2xl py-3"
          slideInterval={5000}
        >
          <div className="w-[900px] relative h-[380px] shadow-2xl">
            <Image
              src={'/images/discoverybg.jpg'}
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
  );
};

export default ThumbnailComp;
