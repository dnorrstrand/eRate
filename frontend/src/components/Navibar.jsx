import React from "react";
import { Link } from "react-router-dom";
import "./Navibar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';


function Navibar() {

    return (
        <Container fluid style={{ marginBottom: "100px" }}>
            <Navbar collapseOnSelect expand="lg" fixed="top" className="bg-dark">
                < Navbar.Brand href="#home" > AEROFLOT</Navbar.Brand >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <Nav.Item>
                            <Nav.Link eventKey="1" href="#/home">
                                <Link className="link" to="/">Home</Link>
                            </Nav.Link>
                        </Nav.Item>

                        <NavDropdown title="View" id="nav-dropdown1">
                            <NavDropdown.Item>
                                <Link className="link" to="/notes">Notes</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/rates">Rates</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/airports">Airports</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/carriers">Carriers</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Create" id="nav-dropdown2">
                            <NavDropdown.Item>
                                <Link className="link" to="/create">Create Note</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/createRate">Create Rate</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/createAirport">Create Airport</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Item>
                                <Link className="link" to="/createCarrier">Create Carrier</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar >
        </Container>
    );
}

export default Navibar;