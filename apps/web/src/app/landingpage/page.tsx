import EventComp from './components/Event';
import EventByLocation from './components/EventByLocation';
import Jumbotron from './components/Jumbotron';
import OurPartnersComp from './components/OurPartners';

const LandingPage = () => {
  return (
    <section className="">
      <div className="bg-fourth">
        <div className="contianer mx-auto max-w-7xl px-2">
          <Jumbotron />
        </div>
      </div>
      <div className="bg-fourth shadow-inner">
        <div className="contianer mx-auto max-w-7xl px-2">
          <EventComp />
        </div>
      </div>
      {/* <div className="bg-gray-300 shadow-inner">
        <div className="container mx-auto max-w-7xl px-2">
          <EventByLocation />
        </div>
      </div> */}
      <div className="">
        <div className="contianer mx-auto max-w-7xl px-2">
          <OurPartnersComp />
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
