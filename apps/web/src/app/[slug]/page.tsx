import React from 'react';
import EventDetailPage from '../eventdetails/page';

const page = ({ params }) => {
  console.log(params.slug);

  return (
    <div>
      <EventDetailPage />
    </div>
  );
};

export default page;
