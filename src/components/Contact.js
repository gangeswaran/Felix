import React from 'react';
import { Container } from 'react-bootstrap';
import '../styles/Contact.css'; // Optional custom styling

const Contact = () => {
  return (
    <Container fluid className="text-center bg-light py-5">
      {/* Header Section */}
      <div className="media-jumbotron">
        <h1>Contact</h1>
      </div>
      <hr style={{ border: "2px solid #4f0d0d", margin: "20px 200px" }} />      

      {/* General Inquiries Section */}
      <div className="inquiry-section my-4">
        <h4>For General Inquiries</h4>
        <p>
          Kindly contact:{" "}
          <a href="mailto:fzv5034@psu.edu">fzv5034@psu.edu</a>
        </p>
      </div>
    </Container>
  );
};

export default Contact;
