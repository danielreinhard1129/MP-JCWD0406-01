'use client';
import { Button, TabItem, Tabs } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import CardItemPopular from './CardEvent/CardItemPopular';
import CardItemThisWeekend from './CardEvent/CardItemThisWeekend';
import CardItemNewRelease from './CardEvent/CardItemNewRelease';
import CardItemForYou from './CardEvent/CardItemForYou';
import { baseUrl } from '@/app/utils/database';
import axios from 'axios';
import { event } from 'cypress/types/jquery';

const EventComp = () => {
  // state for get all event
  const [allEvent, setAllEvent] = useState([]);
  const getAllEvents = async () => {
    try {
      const response = await axios.get(`${baseUrl}/events/all-events`);
      setAllEvent(response.data.data);
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
              {randomEvent.map((randomevent) => {
                return (
                  <CardItemPopular key={randomevent} event={randomevent} />
                );
              })}
            </div>
          </TabItem>
          <TabItem active title="This weekend">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              <CardItemThisWeekend />
              <CardItemThisWeekend />
              <CardItemThisWeekend />
              <CardItemThisWeekend />
            </div>
          </TabItem>
          <TabItem active title="For you">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              {allEvent.map((event) => {
                return <CardItemForYou key={event} event={event} />;
              })}
            </div>
          </TabItem>
          <TabItem active title="New release">
            <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
              <CardItemNewRelease />
              <CardItemNewRelease />
              <CardItemNewRelease />
              <CardItemNewRelease />
              <CardItemNewRelease />
              <CardItemNewRelease />
            </div>
          </TabItem>
        </Tabs>
      </div>
      <div className="flex justify-center mt-5">
        <Button className="bg-[#DAAB6E]">show more</Button>
      </div>
    </section>
  );
};

export default EventComp;
