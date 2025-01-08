import React, { useEffect } from 'react';
import "./Contact.css";

const generateConfetti = () => {
    const confettiContainer = document.querySelector('.contact');
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 70%, 60%)`; // Random colors
        confettiContainer.appendChild(confetti);
    }
};

const Contact = () => {
    useEffect(() => {
        generateConfetti();
    }, []);

    return (
        <div className="contact">
           
            <h1>Contact Us</h1>
            <p>We'd love to hear from you!</p>

            
            <p>We're here to help! For any questions, feedback, or support regarding the app, feel free to reach out to us through the following channels:</p>

            <ul>
                <li><strong>Email:</strong> support@eventsplacemanagement.com</li>
                <li><strong>Phone:</strong> +123 456 7890</li>
                <li><strong>Operating Hours:</strong> Monday to Friday, 9:00 AM - 6:00 PM</li>
                <li><strong>Social Media:</strong> Follow us on Facebook, Twitter, and Instagram for updates and announcements.</li>
            </ul>

            <p>We're dedicated to providing you with the best experience, and our team is always ready to assist you!</p>
            <div className="floating-circle"></div>
      <div className="floating-circle"></div>
      <div className="floating-circle"></div>
        </div>
    );
};

export default Contact;

