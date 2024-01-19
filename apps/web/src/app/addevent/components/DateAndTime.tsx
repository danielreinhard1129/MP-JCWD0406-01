import {
  Datepicker,
  Dropdown,
  DropdownItem,
  Label,
  TextInput,
} from 'flowbite-react';
import React from 'react';

const DateAndTimeComp = () => {
  return (
    <div className="">
      <div className="mx-[200px]">
        <h1 className="text-[20px] font-medium">Date And Time</h1>
        <p className="font-light">
          Tell event-goers when your event starts and ends so they can make
          plans to attend.
        </p>
        <div>
          <div className="mt-3">
            <form>
              <div className=" mt-5">
                <div className="flex flex-wrap gap-6">
                  <div>
                    <Label
                      htmlFor="input-info"
                      color="info"
                      value="Event Starts"
                    />
                    <Datepicker />
                  </div>
                  <div>
                    <Label
                      htmlFor="input-info"
                      color="info"
                      value="Event End"
                    />
                    <Datepicker />
                  </div>
                  <div>
                    <Label
                      htmlFor="input-info"
                      color="info"
                      value="Start Time"
                    />
                    <TextInput placeholder="07:00 Pm" required color="info" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-fourth hover:bg-
        blue-600 text-black font-bold py-2 px-8 rounded
        focus:outline-none focus:shadow-outline"
        >
          Create Event
        </button>
      </div>
    </div>
  );
};

export default DateAndTimeComp;
