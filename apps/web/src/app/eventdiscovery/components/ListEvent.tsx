// import { baseUrl } from '@/app/utils/database';
// import axios from 'axios';
// import { useEffect, useState } from 'react';
// import { IoTicketOutline } from 'react-icons/io5';
// import CardAllEvents from './CardAllEvents';
// import EventByLocation from '@/app/landingpage/components/EventByLocation';
// import { Button, Kbd } from 'flowbite-react';

// const EventDics = () => {
//   // state for get all event
//   const [allEvent, setAllEvent] = useState([]);
//   const [page, setPage] = useState(1);
//   const [pageSize, setPageSize] = useState(4);
//   const [totalPages, setTotalPages] = useState(0);

//   const handlePageChange = (newPage: number) => {
//     setPage(newPage);
//   };

//   const handlePreviousClick = () => {
//     setPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   const handleNextClick = () => {
//     setPage((prevPage) => prevPage + 1);
//   };
//   const getAllEvents = async () => {
//     try {
//       const response = await axios.get(
//         `${baseUrl}/events/available?page=${page}&limit=${pageSize}&location=${}&category=${}$search=${}`,
//       );
//       setAllEvent(response.data.data);
//       setTotalPages(response.data.totalPages);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getAllEvents();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [page, limit]);
//   return (
//     <section>
//       <div>
//         <h1 className="text-[40px] text-white font-mono font-medium flex items-center gap-1">
//           <IoTicketOutline />
//           All Events
//         </h1>
//         <div className="flex flex-wrap gap-5 ">
//           {allEvent.slice(0, 4).map((event) => {
//             return <CardAllEvents key={event} event={event} />;
//           })}
//         </div>
//         <div className="flex justify-center">
//           <div className="pagination-controls flex gap-1  mt-6">
//             <Button
//               className="bg-[#d7d7d7] text-black font-bold"
//               onClick={handlePreviousClick}
//               disabled={page === 1}
//             >
//               Prev
//             </Button>
//             <Kbd className="current-page text-lg px-2 items-center">{page}</Kbd>
//             <Button
//               className="bg-[#d7d7d7] text-black font-bold"
//               onClick={handleNextClick}
//               disabled={page === totalPages}
//             >
//               Next
//             </Button>
//           </div>
//         </div>
//       </div>
//       <div className=" mt-3">
//         <EventByLocation />
//       </div>
//     </section>
//   );
// };

// export default EventDics;
