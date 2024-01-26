import { Badge } from 'flowbite-react';
import React from 'react';

interface ICategory {
  value: any;
}

const Category: React.FC<ICategory> = ({ value }) => {
  return (
    <div className="">
      <Badge className="flex bg-[#e2b385] text-black  rounded-xl">
        {value.category.title}
      </Badge>
    </div>
  );
};

export default Category;
