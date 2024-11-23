import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/Career.css"; 
import profileImg from "../assets/prof.jpg"; 

const Career = () => {
  return (
    <>
      {/* Main Section */}
      <Container fluid className="about-section" style={{ marginTop: "-30px", background: "white" }}>
        <h1 className="text-center" style={{ padding: "0 0 50px 0", color: "darkred" }}>About Me</h1>
        
        <Row>
          {/* Profile Image */}
          <Col md={4} className="text-center">
            <Image src={profileImg} fluid alt="Profile" className="profile-image" />
          </Col>

          {/* About Content */}
          <Col md={8}>
            <h2>Professional Summary</h2>
            <p>
              I’m a licensed Professional Electrical Engineer (P.Eng.) with expertise in engineering solutions, project management, and sustainability. Currently, I lead regional teams at <strong>Black and Veatch</strong>, overseeing projects in energy, environment, and commercial sectors.
            </p>

            <h2>Career Highlights</h2>
            <p>
              My career started at <strong>HCL Tech</strong> in India as a Software Programmer. Later, I pursued research at the University of Calgary, developing advanced power system stabilizers for real-world applications. My work focuses on sustainability, renewable energy, and decarbonization initiatives.
            </p>

            <h2>Education</h2>
            <h4>Penn State University (USA)</h4>
            <p>
              MBA specializing in Marketing Analytics, with courses in Financial Accounting, Data Analytics, and Supply Chain Management.
            </p>
            <h4>University of Calgary (Canada)</h4>
            <p>
              Research-based M.Sc. in Electrical Engineering, focusing on power system dynamics under the mentorship of Dr. O.P. Malik.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Affiliations */}
      <div className="affiliation-block">
        <h2 className="text-center mb-4" style={{ color: "darkred" }}>Affiliations</h2>
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <h5>P.Eng. - Ontario</h5>
              <p>Professional Engineers of Ontario (PEO)</p>
            </Col>
            <Col md={6} className="text-center">
              <h5>P.Eng. - Alberta</h5>
              <p>Professional Engineers of Alberta (APEGA)</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="text-center">
              <h5>IEEE Member</h5>
              <p>Institute of Electrical and Electronics Engineers (IEEE)</p>
            </Col>
            <Col md={6} className="text-center">
              <h5>EGBC Member</h5>
              <p>Engineers and Geoscientists British Columbia</p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Career;
