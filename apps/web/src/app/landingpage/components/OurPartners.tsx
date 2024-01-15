import Image from 'next/image'
import React from 'react'

const OurPartnersComp = () => {
  return (
    <section className='pt-5 md:h-screen pb-2 '>
        <div className='text-center'>
            <h1 className='text-4xl'>Our Partners</h1>
            <p className='md:mx-[200px] mt-5 text-center'>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non voluptatibus eaque dicta. Voluptatibus consectetur rerum, rem nesciunt nam suscipit quaerat!
            </p>
            <div className='grid md:grid-cols-3 grid-cols-2 md:gap-y-20 gap-y-5 md:mt-[100px] mt-5'>
                <div className='flex justify-center'>
                    <Image src="/images/tokopedia.png" width={100} height={100} alt={'logo'}/>
                </div>
                <div className='flex justify-center'>
                    <Image src="/images/tokopedia.png" width={100} height={100} alt={'logo'}/>
                </div>
                <div className='flex justify-center'>
                    <Image src="/images/tokopedia.png" width={100} height={100} alt={'logo'}/>
                </div>
                <div className='flex justify-center'>
                    <Image src="/images/tokopedia.png" width={100} height={100} alt={'logo'}/>
                </div>
                <div className='flex justify-center'>
                    <Image src="/images/tokopedia.png" width={100} height={100} alt={'logo'}/>
                </div>
                <div className='flex justify-center'>
                    <Image src="/images/tokopedia.png" width={100} height={100} alt={'logo'}/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default OurPartnersComp