import React from "react";
import "./Contact.scss";

const Contact = () => {
  const name = "<Hire Me!>";

  // Function to add dummy message
  const addDummyMessage = () => {
    document.getElementById("subject").value = "Sorry, I'm trying to figure out the API part 😅";
  };

  return (
    <div className="contact">
      <h1>{name}</h1>
      <div className="contact_container">
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />

          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject"
            required
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows="4"
            required
          ></textarea>

          <button type="button" onClick={addDummyMessage}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
