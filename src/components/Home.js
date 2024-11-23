import React, { useEffect, useRef } from 'react';
import { Container, Row, Col, Carousel } from 'react-bootstrap';
import '../styles/Home.css';
import jumbo from '../assets/jumbo.jpg';

const Home = () => {
  const headRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          } else {
            entry.target.classList.remove('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (headRef.current) {
      observer.observe(headRef.current);
    }
    return () => {
      if (headRef.current) {
        observer.unobserve(headRef.current);
      }
    };
  }, []);

  return (
    <div className="full-width-container">
      <div className="header">
        <img src={jumbo} alt="Jumbo Header" className="jumbo-image" />
        <div className="head" ref={headRef}>
          <h1 className="display-4">At the Intersection of Enterprise and Sustainability</h1>
        </div>
      </div>

      <div className="slider-section">
        <Carousel controls indicators={false} className="quote-carousel custom-carousel">
          {[
            {
              quote: "As Mendelsohn says, CSOs should act 'as an internal influencer to gain trust - and to create change.'",
              author: "Kristen Talman, Financial Times"
            },
            {
              quote: "Mendelsohn is a pioneer and leader trying to solve the climate crises and a mastermind of building sustainability into long-term planning.",
              author: "Bloomberg"
            },
          ].map((item, index) => (
            <Carousel.Item key={index}>
              <div className="carousel-content">
                <p style={{ color: "darkred" }}>{item.quote}</p>
                <p className="author">- {item.author}</p>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

   
    </div>
  );
};

export default Home;
