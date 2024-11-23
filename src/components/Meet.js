import React from 'react';
import '../styles/Meet.css'; // Updated styling for responsiveness
import { Container } from 'react-bootstrap';

const Calender = () => {
  return (
    <Container className="calender-container text-center">
      <h1 className="calender-title">Schedule a Meeting</h1>
      <p className="calender-description">
        Use Calendly to easily book a meeting at your convenience. Select a time slot that works for you, and I’ll be notified right away.
        Feel free to choose a duration that fits your needs!
      </p>
      <div className="calender-button-container">
        <a
          className="calender-button"
          href="https://calendly.com/gangeswaran375/30min"
          target="_blank"
          rel="noopener noreferrer"
        >
          Book a Slot
        </a>
      </div>
    </Container>
  );
};

export default Calender;
