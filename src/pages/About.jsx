import './About.css';

function About() {
  return (
    <div className="page page-about">
      <section className="about-hero">
        <div className="about-hero-container">
          <h1>About FixAll Home Service</h1>
          <p className="about-tagline">Your trusted partner in Edison, NJ for quality home repairs and maintenance</p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-container">
          <h2>Our Story</h2>
          <p>
            We started FixAll with a simple mission: to provide the Edison, NJ community with honest, reliable, and affordable home service solutions. What began as a one-person operation has grown into a trusted team of certified professionals who take pride in every job we do.
          </p>
          <p>
            Whether you need emergency plumbing repairs, electrical work, or general handyman services, we understand that your home is your sanctuary. We treat every project with the same care and attention that we'd give our own homes.
          </p>
        </div>
      </section>

      <section className="about-values">
        <div className="about-container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Integrity</h3>
              <p>We believe in honest communication, transparent pricing, and standing behind our work with guarantees you can trust.</p>
            </div>
            <div className="value-card">
              <h3>Excellence</h3>
              <p>Every project receives our full attention and expertise. We only use quality materials and proven techniques to ensure lasting results.</p>
            </div>
            <div className="value-card">
              <h3>Reliability</h3>
              <p>We show up on time, respect your home, and get the job done right the first time. You can count on us when you need us most.</p>
            </div>
            <div className="value-card">
              <h3>Community Focus</h3>
              <p>We're proud to serve our neighbors in Edison and the surrounding areas. We're invested in the success and satisfaction of everyone we work with.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-service-area">
        <div className="about-container">
          <h2>Serving Edison, NJ and the Surrounding Area</h2>
          <p>
            We proudly serve Edison, New Jersey and the surrounding communities. Whether you're in the heart of Edison or nearby towns, we're ready to help with your plumbing, electrical, and handyman needs. Our local expertise and quick response times mean you can get the service you need when you need it.
          </p>
          <p>
            No job is too small, and we take just as much care with minor repairs as we do with major projects. From routine maintenance to emergency service calls, we're your one-stop shop for all your home service needs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;
