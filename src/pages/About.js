import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
       <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <h1>About Us</h1>
      <h3>Welcome to Event Place Management System</h3>
      <div className="columns-container">
        <div className="column">
          <h2>Technologies We Used</h2>
          <p><strong>Frontend:</strong> Our user interface is built using React.js, known for its responsiveness and dynamic features. This allows our clients to enjoy a smooth, interactive experience when managing events or bookings.</p>
          <p><strong>Backend:</strong> For the core functionality, we use Node.js and Express.js. These technologies ensure our system remains fast and scalable, capable of handling high volumes of data without compromising performance.</p>
          <p><strong>Database:</strong> We store all information in a MongoDB database, which allows for secure and flexible data management, perfect for keeping track of multiple venues, clients, and event schedules.</p>
        </div>

        <div className="column">
          <h2>Why Choose Us?</h2>
          <p>Managing event venues can be complex, but with Event Place Management System, you have a reliable partner to simplify the process. Our platform helps you to:</p>
          <ul>
            <li><strong>Simplify Bookings:</strong> Handle reservations, schedules, and client communications effortlessly from a single interface.</li>
            <li><strong>Increase Efficiency:</strong> Minimize administrative work with automation and real-time updates to keep everything running smoothly.</li>
            <li><strong>Enhance Client Experience:</strong> Provide a smooth, well-organized experience for your clients, helping make every event a success.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
