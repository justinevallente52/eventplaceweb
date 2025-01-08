import React from 'react'; 
import Carousel from '../components/Carousel';
import ContactForm from '../components/ContactForm';
import './Home.css';

// Import local images
import venue1Image from '../images/bday.jpg';
import venue2Image from '../images/par.jpg';
import venue3Image from '../images/pool.jpg';
import venue4Image from '../images/wed.jpg';

const Home = () => {
  const slides = [
    { title: 'Birthday', image: venue1Image, link: '/venues/birthday' },
    { title: 'Party', image: venue2Image, link: '/venues/party' },
    { title: 'Pool', image: venue3Image, link: '/venues/pool' },
    { title: 'Wedding', image: venue4Image, link: '/venues/wedding' },
  ];

  return (
    <div className="home">
      {/* Floating circles */}
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>

      <h1>Welcome to EventPlace</h1>
      <p>Your one-stop solution for venue reservations!</p>

      {/* APK Download Button */}
      <a 
        href="/apk/universal.apk" 
        download 
        className="download-button"
      >
        Download APK
      </a>

      {/* Pass slides to the Carousel, which will handle Link rendering */}
      <Carousel autoPlay={true} useRightLeftTriangles={true} slides={slides} />

      {/* ABOUT MANAGEMENT Section */}
      <section className="about-management">
        <h2>About Management</h2>
        <p>
          Greetings to the Events Place, the perfect tool for effortlessly organizing unforgettable events. If you're getting ready for a birthday party, a wedding, a reunion, or any other special event, our app makes it easier to find the ideal venue. <br />
          Explore a wide variety of event venues designed to meet different requirements and preferences, each accompanied by detailed information and high-quality images to assist you in making a well-informed decision.
        </p>
        <p>
          After completing your booking and payment, you'll be able to view your own booking details, which include a QR code. <br />
          This QR code serves as your digital pass, allowing smooth entry to your chosen venue. Our app allows you to not only discover venue options but also compare different packages, easily book your chosen location, and manage your reservations with ease. Elevate every event with the Events Place, where your event planning journey begins and concludes seamlessly.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form">
        <ContactForm />
      </section>
    </div>
  );
};

export default Home;
