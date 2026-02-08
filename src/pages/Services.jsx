import ServiceCard from '../components/ServiceCard';
import './Services.css';
import LeakRepairImg from '../pictures/leak-repair.png';
import PlumbingServicesImg from '../pictures/plumbing-services.png';
import FixtureInstallationImg from '../pictures/Fixture_instalation.png';
import ElectricalServicesImg from '../pictures/Electrical-services.png';
import OutletSwitchRepairImg from '../pictures/Outlet-Switch-Repair.png';
import LightingSolutionsImg from '../pictures/Lighting-solutions.png';
import PaintingImg from '../pictures/Interior-Exterior-Painting.png';
import HandymanWorkImg from '../pictures/General-Handyman-Work.png';
import DoorWindowImg from '../pictures/Door-WindowRepair.png';

function Services() {
  const plumbingServices = [
    {
      title: 'Leak Repair',
      description: 'Fast diagnosis and repair of water leaks in pipes, fixtures, and joints.',
      image: LeakRepairImg,
      tags: ['Leak Repairs', 'Pipe Work'],
    },
    {
      title: 'Plumbing Services',
      description: 'From leaky faucets to pipe installations, I handle all your plumbing needs with precision and care. Emergency repairs available.',
      image: PlumbingServicesImg,
      tags: ['Main Line Maintenance', 'Leak Repairs', 'Fixture Installation', 'Pipe Work'],
    },
    {
      title: 'Fixture Installation',
      description: 'Expert installation of sinks, faucets, toilets, and other fixtures with professional care.',
      image: FixtureInstallationImg,
      tags: ['Fixture Installation', 'Pipe Work'],
    },
  ];

  const electricalServices = [
    {
      title: 'Electrical Services',
      description: 'Expert electrical work for all your home needs. From installations to repairs, I provide safe, code-compliant solutions.',
      image: ElectricalServicesImg,
      tags: ['Circuit Installation', 'Outlet & Switch Repair', 'Lighting Solutions'],
    },
    {
      title: 'Outlet & Switch Repair',
      description: 'Safe repair and replacement of faulty outlets, switches, and breakers with professional expertise.',
      image: OutletSwitchRepairImg,
      tags: ['Outlet & Switch Repair', 'Circuit Installation'],
    },
    {
      title: 'Lighting Solutions',
      description: 'Installation and repair of interior and exterior lighting systems to brighten your home.',
      image: LightingSolutionsImg,
      tags: ['Lighting Solutions', 'Installation'],
    },
  ];

  const handymanServices = [
    {
      title: 'Interior & Exterior Painting',
      description: 'Transform your home with professional painting services. From color consultation to final touch-ups, I ensure a flawless finish every time.',
      image: PaintingImg,
      tags: ['Color Consultation', 'Surface Preparation', 'Premium Paints', 'Clean Finish'],
    },
    {
      title: 'General Handyman Work',
      description: 'Whatever needs fixing, building, or improving around your home. I\'ve got the skills and tools to get the job done right.',
      image: HandymanWorkImg,
      tags: ['Home Repairs', 'Home Maintenance', 'Assembly', 'Maintenance', 'Installations'],
    },
    {
      title: 'Door & Window Repair',
      description: 'Professional repair and installation of doors, windows, and frames to improve security and aesthetics.',
      image: DoorWindowImg,
      tags: ['Installation', 'Repairs', 'Home Maintenance'],
    },
  ];

  return (
    <div className="page page-services">
      <section className="services-hero">
        <div className="services-hero-container">
          <h1>Our Services</h1>
          <p>Professional home repair and maintenance services</p>
        </div>
      </section>

      <section className="service-section service-section--alt">
        <div className="service-section-container">
          <h2>🔧 Plumbing Services</h2>
          <div className="service-cards-grid">
            {plumbingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon="💧"
                tags={service.tags}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section--alt">
        <div className="service-section-container">
          <h2>⚡ Electrical Services</h2>
          <div className="service-cards-grid">
            {electricalServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon="⚡"
                tags={service.tags}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-section service-section--alt">
        <div className="service-section-container">
          <h2>🔨 Handyman Services</h2>
          <div className="service-cards-grid">
            {handymanServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                image={service.image}
                icon="🔨"
                tags={service.tags}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;