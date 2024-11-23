import React, { useState } from 'react';
import { Navbar, Container, Nav, Offcanvas } from 'react-bootstrap';
import '../styles/Navbar.css';

const CustomNavbar = () => {
  const [show, setShow] = useState(false);

  const handleToggle = () => setShow((prev) => !prev);
  const handleClose = () => setShow(false);

  const navLinks = [
    { href: '/career', label: 'Career' },
    { href: '/meeting', label: 'Meet' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <Navbar expand="lg"  className="custom-navbar">
        <Container fluid>
          <Navbar.Brand href="/" className="navbar-brand">
            FELIX VINCENT
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls="offcanvasNavbar" 
            onClick={handleToggle} 
            className="d-lg-none" 
          />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            show={show}
            onHide={handleClose}
            placement="start"
            className="full-canvas" // Use a custom class for full canvas
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Felix Vincent</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column d-lg-none" style={{color:"black"}}>
                {navLinks.map((link) => (
                  <Nav.Link 
                    key={link.href} 
                    href={link.href} 
                    className="nav-item" 
                    onClick={handleClose}
                  >
                    {link.label}
                  </Nav.Link>
                ))}
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* Desktop Navigation Links */}
          <Nav className="d-none d-lg-flex"> {/* Hide on mobile, show on larger screens */}
            {navLinks.map((link) => (
              <Nav.Link 
                key={link.href} 
                href={link.href} 
                className="nav-item"
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
