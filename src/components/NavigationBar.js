import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import './NavigationBar.css'
//TODO: Make a navbar you can click out of (instead of having to click hamburger icon)
//TODO: Fix navbar errors on inspector
export const NavigationBar = () =>(
    <>
        <Navbar className="nav" variant="dark" expand="lg" fixed="top">
            <Navbar.Brand className="brand">Clara Jacintho</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/" className="link">Home</Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/skills" className="link">Skills</Link>
                        </Nav.Link>
                    </Nav.Item>
                   {/* <Nav.Item>
                        <Nav.Link>
                            <Link to="/education" className="link">Work and Education</Link>
                        </Nav.Link>
                   </Nav.Item> */}
                    <Nav.Item>
                        <Nav.Link>
                            <Link to="/projects" className="link">Projects</Link>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    </>
)
