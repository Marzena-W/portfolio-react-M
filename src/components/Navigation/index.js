import React from 'react';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './style.css';


function Navigation() {
    return (
        <Navbar className="nav-style" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand className="logo" href="#about">
                    <NavLink to="/" end
                        className={({ isActive }) =>
                            isActive ? 'nav-link active' : 'nav-link'}> Maggie Wilk
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/" end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'}> About
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/projects" end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'}> Projects
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" end
                                    className={({ isActive }) =>
                                        isActive ? 'nav-link active' : 'nav-link'}> Contact
                                </NavLink>
                            </li>
                        </ul>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation;