import { Button, TabItem, Tabs } from 'flowbite-react'
import React from 'react'
import CardItemPopular from './CardEvent/CardItemPopular'
import CardItemThisWeekend from './CardEvent/CardItemThisWeekend'
import CardItemNewRelease from './CardEvent/CardItemNewRelease'
import CardItemForYou from './CardEvent/CardItemForYou'

const EventComp= () => {
  return (
    <section className='pt-5 pb-5'>
        <h1 className='text-4xl text-center'>Events</h1>
        <p className='md:mx-[200px] mt-5 text-center mb-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque perferendis reprehenderit amet dolor in
             odio omnis quisquam aperiam mollitia ipsum?
        </p>
        <div>
            <Tabs aria-label='tabs with underline' className='flex justify-around bg-[#CCC3AE] shadow-2xl backdrop-blur-md px-3 rounded-xl'  style='underline'>
                <TabItem active title="Popular" >
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-4'>
                    <CardItemPopular />
                    <CardItemPopular />
                    <CardItemPopular />
                    </div>
                </TabItem>
                <TabItem active title="This weekend" >
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                    <CardItemThisWeekend />
                    <CardItemThisWeekend />
                    <CardItemThisWeekend />
                    <CardItemThisWeekend />
                    </div>
                </TabItem>
                <TabItem active title="For you" >
                <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                    <CardItemForYou />
                </div>
                </TabItem>
                <TabItem active title="New release" >
                    <div className='grid md:grid-cols-4 grid-cols-1 gap-5'>
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
        <div className='flex justify-center mt-5'>
        <Button color='gray'>show more</Button>
        </div>
    </section>
  )
}

export default EventComp