import { Dropdown, DropdownItem, Label, TextInput } from 'flowbite-react';
import React from 'react';

const BasicInfoComp = () => {
  return (
    <section>
      <h1 className="font-extrabold text-[35px] text-center">
        Create Your Event
      </h1>
      <div className="mx-[200px]">
        <h2 className="text-[20px] font-medium">Basic Information</h2>
        <p className="font-light">
          Basic information must be filled in to make it easier for other people
          to find the event and attract attention
        </p>
        <form>
          <div className="">
            <div className="mb-1 block">
              <Label htmlFor="input-info" color="info" value="Title Event" />
            </div>
            <TextInput
              placeholder="Title Event"
              required
              color="info"
              maxLength={20}
            />
          </div>
          <div className=" mt-5">
            <div className="mb-1 block">
              <Label htmlFor="input-info" color="info" value="Tagline Card" />
            </div>
            <TextInput
              placeholder="Tagline Card"
              required
              color="info"
              maxLength={10}
            />
          </div>
          <div className=" mt-5">
            <div className="mb-1 block">
              <Label htmlFor="input-info" color="info" value="Promotor" />
            </div>
            <TextInput
              placeholder="Promotor"
              required
              color="info"
              maxLength={10}
            />
          </div>
          <div className="flex flex-wrap gap-3  mt-3">
            <Dropdown label="Category" color="black">
              <DropdownItem>Music</DropdownItem>
              <DropdownItem>Food</DropdownItem>
              <DropdownItem>Bussiness</DropdownItem>
              <DropdownItem>Healty</DropdownItem>
            </Dropdown>
            <Dropdown label="Sub Category" color="black">
              <DropdownItem>Music</DropdownItem>
              <DropdownItem>Food</DropdownItem>
              <DropdownItem>Bussiness</DropdownItem>
              <DropdownItem>Healty</DropdownItem>
            </Dropdown>
            <Dropdown label="Sub Category" color="black">
              <DropdownItem>Music</DropdownItem>
              <DropdownItem>Food</DropdownItem>
              <DropdownItem>Bussiness</DropdownItem>
              <DropdownItem>Healty</DropdownItem>
            </Dropdown>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BasicInfoComp;
