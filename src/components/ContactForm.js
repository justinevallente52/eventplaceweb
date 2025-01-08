import React, { useState } from "react";
import Swal from "sweetalert2"; // Import SweetAlert2
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("https://eventsplace-server.onrender.com/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        // Success SweetAlert
        Swal.fire({
          title: "Success!",
          text: "Your message was sent successfully!",
          icon: "success",
          confirmButtonText: "OK",
          background: "#B5C99A", // Optional: adds a soft background color
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Error SweetAlert
        Swal.fire({
          title: "Error!",
          text: "Failed to send your message. Please try again.",
          icon: "error",
          confirmButtonText: "OK",
          background: "#B5C99A", // Optional: red background for error
        });
      }
    } catch (error) {
      // General error SweetAlert
      Swal.fire({
        title: "Oops!",
        text: "An error occurred. Please try again.",
        icon: "error",
        confirmButtonText: "OK",
        background: "#B5C99A", 
        // Optional: red background for error
      });
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h2>Send Us a Message</h2>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default ContactForm;
