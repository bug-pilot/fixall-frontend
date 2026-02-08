import ServiceCard from '../components/ServiceCard';
import './Services.css';

function Services() {
  const plumbingServices = [
    {
      title: 'Leak Repair',
      description: 'Fast diagnosis and repair of water leaks in pipes, fixtures, and joints.',
      image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&h=300&fit=crop',
      tags: ['Leak Repairs', 'Pipe Work'],
    },
    {
      title: 'Plumbing Services',
      description: 'From leaky faucets to pipe installations, I handle all your plumbing needs with precision and care. Emergency repairs available.',
      image: 'https://images.unsplash.com/photo-1585707572537-64cfc0c03f7b?w=500&h=300&fit=crop',
      tags: ['Main Line Maintenance', 'Leak Repairs', 'Fixture Installation', 'Pipe Work'],
    },
    {
      title: 'Fixture Installation',
      description: 'Expert installation of sinks, faucets, toilets, and other fixtures with professional care.',
      image: 'https://images.unsplash.com/photo-1584622181563-430f63602d4b?w=500&h=300&fit=crop',
      tags: ['Fixture Installation', 'Pipe Work'],
    },
  ];

  const electricalServices = [
    {
      title: 'Electrical Services',
      description: 'Expert electrical work for all your home needs. From installations to repairs, I provide safe, code-compliant solutions.',
      image: 'https://images.unsplash.com/photo-1621905267537-b85faf00c4b7?w=500&h=300&fit=crop',
      tags: ['Circuit Installation', 'Outlet & Switch Repair', 'Lighting Solutions'],
    },
    {
      title: 'Outlet & Switch Repair',
      description: 'Safe repair and replacement of faulty outlets, switches, and breakers with professional expertise.',
      image: 'https://images.unsplash.com/photo-1581092162562-40038f81f10e?w=500&h=300&fit=crop',
      tags: ['Outlet & Switch Repair', 'Circuit Installation'],
    },
    {
      title: 'Lighting Solutions',
      description: 'Installation and repair of interior and exterior lighting systems to brighten your home.',
      image: 'https://images.unsplash.com/photo-1565636192335-14c46fa1120d?w=500&h=300&fit=crop',
      tags: ['Lighting Solutions', 'Installation'],
    },
  ];

  const handymanServices = [
    {
      title: 'Interior & Exterior Painting',
      description: 'Transform your home with professional painting services. From color consultation to final touch-ups, I ensure a flawless finish every time.',
      image: 'https://images.unsplash.com/photo-1589939705066-5470cc9b6230?w=500&h=300&fit=crop',
      tags: ['Color Consultation', 'Surface Preparation', 'Premium Paints', 'Clean Finish'],
    },
    {
      title: 'General Handyman Work',
      description: 'Whatever needs fixing, building, or improving around your home. I\'ve got the skills and tools to get the job done right.',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop',
      tags: ['Home Repairs', 'Home Maintenance', 'Assembly', 'Maintenance', 'Installations'],
    },
    {
      title: 'Door & Window Repair',
      description: 'Professional repair and installation of doors, windows, and frames to improve security and aesthetics.',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=300&fit=crop',
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