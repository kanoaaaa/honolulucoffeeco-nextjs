'use client';

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import Image from 'next/image'; // Import Next.js Image for optimization
import logo from '/public/HC_Logo_Color.png.webp'; // Correct path to logo image
import { Search, Person, Cart } from 'react-bootstrap-icons'; // Import icons

const NavBar = () => (
  <>
    {/* Top Navbar */}
    <Navbar bg="light" className="justify-content-center">
      <Container fluid>
        <Navbar.Brand className="mx-auto">
          <Image src={logo} alt="Honolulu Coffee" width={150} height={150} />
        </Navbar.Brand>
        <div className="d-flex justify-content-end">
          <Nav.Link href="#" className="icon-spacing">
            <Search />
          </Nav.Link>
          <Nav.Link href="#" className="icon-spacing">
            <Person />
          </Nav.Link>
          <Nav.Link href="#" className="icon-spacing">
            <Cart />
          </Nav.Link>
        </div>
      </Container>
    </Navbar>

    {/* Main Navbar */}
    <Navbar expand="lg" bg="light" className="justify-content-center">
      <Container>
        <Nav className="mx-auto">
          <NavDropdown title="Shop" id="shopDropdown">
            <NavDropdown.Item href="#">All Coffee</NavDropdown.Item>
            <NavDropdown.Item href="#">Coffee By Type</NavDropdown.Item>
            <NavDropdown.Item href="#">Gourmet Food</NavDropdown.Item>
            <NavDropdown.Item href="#">Merchandise</NavDropdown.Item>
            <NavDropdown.Item href="#">Firepot Tea</NavDropdown.Item>
            <NavDropdown.Item href="#">Gift Cards</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Subscriptions</Nav.Link>
          <Nav.Link href="#">Locations</Nav.Link>
          <NavDropdown title="Learn" id="learnDropdown">
            <NavDropdown.Item href="#">Blog</NavDropdown.Item>
            <NavDropdown.Item href="#">About Us</NavDropdown.Item>
            <NavDropdown.Item href="#">Our Farm to Cup</NavDropdown.Item>
            <NavDropdown.Item href="#">Wholesale</NavDropdown.Item>
            <NavDropdown.Item href="#">Learn More About Kona</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#">Careers</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
);

export default NavBar;
