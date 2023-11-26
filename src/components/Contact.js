// Contact.js

import React, { useState } from "react";
import "./Contact.css";

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
    // Add your logic to send the message (e.g., using an API)
    console.log(`Email: ${email}, Message: ${message}`);
    // Reset the form after sending the message
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact">
      <h2 className="heading">Contact Me</h2>
      <div className="form-container">
        <div className="form-group">
          <span>
            {" "}
            <label id="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              
            />
          </span>
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Write your message here"
          />
        </div>
        <button className="send-button" onClick={handleSendMessage}>
          Send Message
        </button>
      </div>
    </div>
  );
};

export default Contact;
