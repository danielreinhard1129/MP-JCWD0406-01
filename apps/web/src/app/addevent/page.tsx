import React from 'react';
import BasicInfoComp from './components/BasicInfo';
import LocationComp from './components/LocationComp';
import DateAndTimeComp from './components/DateAndTime';

const AddEvent = () => {
  return (
    <section>
      <div className="">
        <div className="container mx-auto max-w-7xl pb-4">
          <BasicInfoComp />
        </div>
      </div>
      <div className="">
        <div className="container mx-auto max-w-7xl pt-4 pb-4 shadow-inner">
          <LocationComp />
        </div>
      </div>
      <div className="">
        <div className="container mx-auto max-w-7xl pt-4 pb-4 shadow-inner">
          <DateAndTimeComp />
        </div>
      </div>
    </section>
  );
};

export default AddEvent;
