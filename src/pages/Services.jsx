import ServiceCard from '../components/ServiceCard';
import './Services.css';

function Services() {
  const plumbingServices = [
    {
      title: 'Leak Repair',
      description: 'Fast diagnosis and repair of water leaks in pipes, fixtures, and joints.',
    },
    {
      title: 'Drain Cleaning',
      description: 'Professional drain cleaning and unclogging services for all pipes.',
    },
    {
      title: 'Fixture Installation',
      description: 'Expert installation of sinks, faucets, toilets, and other fixtures.',
    },
  ];

  const electricalServices = [
    {
      title: 'Circuit Installation',
      description: 'Safe installation of new circuits and electrical upgrades.',
    },
    {
      title: 'Outlet & Switch Repair',
      description: 'Repair and replacement of faulty outlets, switches, and breakers.',
    },
    {
      title: 'Lighting Solutions',
      description: 'Installation and repair of interior and exterior lighting systems.',
    },
  ];

  const handymanServices = [
    {
      title: 'Drywall & Painting',
      description: 'Wall repair, patching, and professional interior painting.',
    },
    {
      title: 'Door & Window Repair',
      description: 'Repair and installation of doors, windows, and frames.',
    },
    {
      title: 'General Repairs',
      description: 'General home maintenance and repair services.',
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

      <section className="service-section">
        <div className="service-section-container">
          <h2>🔧 Plumbing Services</h2>
          <div className="service-cards-grid">
            {plumbingServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon="💧"
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
                icon="⚡"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="service-section">
        <div className="service-section-container">
          <h2>🔨 Handyman Services</h2>
          <div className="service-cards-grid">
            {handymanServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon="🔨"
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;

