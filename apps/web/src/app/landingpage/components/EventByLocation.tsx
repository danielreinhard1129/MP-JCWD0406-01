'use client';

import { Dropdown, DropdownItem, Pagination } from 'flowbite-react';
import { useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import CardItemByLocationComp from './CardEvent/CardItemByLocation';

const EventByLocation = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => setCurrentPage(page);
  return (
    <section className="pb-5">
      <div>
        <h1 className="text-2xl pt-3 font-medium">Event By Location</h1>
        <div className="flex flex-wrap items-center mt-4">
          <FaLocationDot />
          <Dropdown label="Location" size="lg" color="black">
            <DropdownItem>My Location</DropdownItem>
          </Dropdown>
        </div>
        <div className=" grid md:grid-cols-2 pl-3 grid-cols-1 gap-y-3">
          <CardItemByLocationComp />
          <CardItemByLocationComp />
          <CardItemByLocationComp />
          <CardItemByLocationComp />
        </div>
      </div>
      <div className="mt-4 flex overflow-x-auto sm:justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={100}
          onPageChange={onPageChange}
        />
      </div>
    </section>
  );
};

export default EventByLocation;
