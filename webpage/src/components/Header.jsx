import React from 'react';
import "./Header.css";
import { Navbar, Container, Nav } from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" bg="light" className="main">
            <Container>
                <Navbar.Brand href="#home">React</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Nav.Link className="link" href="#home">Home</Nav.Link>
                        <Nav.Link className="link" href="#about">About</Nav.Link>
                        <Nav.Link className="link" href="#facts">Facts</Nav.Link>
                        <Nav.Link className="link" href="#reviews">Reviews</Nav.Link>
                        <Nav.Link className="link" href="#team">Team</Nav.Link>
                        <Nav.Link className="link" href="#contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Header