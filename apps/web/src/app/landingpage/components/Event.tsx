'use client';
import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import { Button, TabItem, Tabs } from 'flowbite-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import CardItemForYou from './CardEvent/CardItemForYou';
import CardItemNewRelease from './CardEvent/CardItemNewRelease';
import CardItemPopular from './CardEvent/CardItemPopular';

const EventComp = () => {
  // state for get all event
  const [allEvent, setAllEvent] = useState([]);
  const getAllEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/debounce`);
      setAllEvent(response.data.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllEvents();
  }, []);

  // state for get random events
  const [randomEvent, setRandomEvent] = useState([]);
  const getRandomEvent = async () => {
    try {
      const resRandomEvents = await axios.get(
        `${baseUrl}/events/random-events`,
      );
      setRandomEvent(resRandomEvents.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRandomEvent();
  }, []);

  //state for get new release event
  const [newReleases, setNewReleases] = useState([]);
  const newReleaseEvent = async () => {
    try {
      const resNewReleaseEvents = await axios.get(
        `${baseUrl}/events/new-release-events`,
      );
      setNewReleases(resNewReleaseEvents.data.data);
      console.log('eventtttttttt', resNewReleaseEvents.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    newReleaseEvent();
  }, []);
  return (
    <section className="pt-5 pb-5">
      <h1 className="text-4xl text-center">Events</h1>
      <p className="md:mx-[200px] mt-5 text-center mb-3 font-serif">
        Choose an event to accompany your days
      </p>
      <div>
        <Tabs
          aria-label="tabs with underline"
          className="flex justify-around bg-[#B0BFD1] px-3 rounded-xl"
          style="underline"
        >
          <TabItem active title="Popular">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
              {randomEvent.slice(0, 8).map((randomevent) => {
                return (
                  <CardItemPopular key={randomevent} event={randomevent} />
                );
              })}
            </div>
          </TabItem>
          <TabItem active title="For you">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              {allEvent.slice(0, 8).map((event) => {
                return <CardItemForYou key={event} event={event} />;
              })}
            </div>
          </TabItem>
          <TabItem active title="New release">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              {newReleases.slice(0, 8).map((newrelease) => {
                return (
                  <CardItemNewRelease key={newrelease} event={newrelease} />
                );
              })}
            </div>
          </TabItem>
        </Tabs>
      </div>
      <Link href={'/eventdiscovery'} className="flex justify-center mt-5">
        <Button className="bg-[#DAAB6E]">show more</Button>
      </Link>
    </section>
  );
};

export default EventComp;
