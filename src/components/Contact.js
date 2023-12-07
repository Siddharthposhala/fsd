// Contact.js

import React, { useState } from "react";
import "./App.css";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    console.log(`Email: ${email}, Message: ${message}`);
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <h2 className="heading">Contact Me</h2>
      <div className="form-container">
        <label id="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={handleMessageChange}
          placeholder="Write your message here"
        />

        <button className="send-button" onClick={handleSendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
