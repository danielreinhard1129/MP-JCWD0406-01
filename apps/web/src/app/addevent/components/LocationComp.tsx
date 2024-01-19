import { Label, TextInput } from 'flowbite-react';
import React from 'react';

const LocationComp = () => {
  return (
    <div className="">
      <div className="mx-[200px]">
        <h1 className="text-[20px] font-medium">Set Location</h1>
        <p className="font-light">
          Help people in the area discover your event and let attendees know
          where to show up.
        </p>
        <div>
          <div className="mt-3">
            <form>
              <div className=" mt-5">
                <div className="mb-1 block">
                  <Label htmlFor="input-info" color="info" value="Location" />
                </div>
                <TextInput
                  placeholder="Set Event Location"
                  required
                  color="info"
                />
                <span className="ml-2 text-[12px] text-red-700">
                  location is required
                </span>
              </div>
            </form>
          </div>
          {/* <div className="mt-6">
              <form className="w-[250px] lg:w-auto relative">
                <div className="relative">
                  <input
                    type="search"
                    placeholder="Search Event"
                    className="w-full p-4 rounded-full bg-milk"
                  />
                  <Button className="absolute right-1 top-1/2 -translate-y-1/2 p-3 bg-orangee rounded-full text-black text-xl  ">
                    <FiSearch />
                  </Button>
                </div>
              </form>
            </div> */}
        </div>
      </div>
    </div>
  );
};

export default LocationComp;
