import EventComp from './components/Event'
import Jumbotron from './components/Jumbotron'
import OurPartnersComp from './components/OurPartners'

const LandingPage = () => {
  return (
    <section className=''>
      <div className='bg-fix'>
        <div className='contianer mx-auto max-w-7xl px-2'>
        <Jumbotron />
        </div>
      </div>
      <div className='bg-[#9A846C]'>
        <div className='contianer mx-auto max-w-7xl px-2'>
          <EventComp />
        </div>
      </div>
      <div className=''>
        <div className='contianer mx-auto max-w-7xl'>
          <OurPartnersComp />
        </div>
      </div>
    </section>
  )
}

export default LandingPage