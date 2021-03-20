import { Button, Collapse } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/esm/NavbarToggle";

function NavBar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      const scrollHeight = document.body.scrollHeight;

      console.log((scrollHeight * 10) / 100, window.pageYOffset);

      if (window.pageYOffset > (scrollHeight * 10) / 100) {
        console.log(window.pageYOffset);
        setOpen(true);
      }
      if (window.pageYOffset < (scrollHeight * 10) / 100) {
        console.log(window.pageYOffset);
        setOpen(false);
      }
    };
  });

  return (
    <>
      <Navbar
        className="justify-content-end navbar d-none d-md-flex navbarTransparent"
        defaultactiveKey="/home"
      >
        <Nav.Item>
          <Nav.Link href="/">HOME</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services">SERVICES</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">BLOG</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contactus">CONTACT US</Nav.Link>
        </Nav.Item>
      </Navbar>
      <Nav className="justify-content-end navbar d-sm-flex d-md-none navbarTransparent">
        <NavDropdown>
          <NavDropdown.Item href="/">HOME</NavDropdown.Item>
          <NavDropdown.Item href="/aboutus">ABOUT US</NavDropdown.Item>
          <NavDropdown.Item href="/services">SERVICES</NavDropdown.Item>
          <NavDropdown.Item href="/portfolio">PORTFOLIO</NavDropdown.Item>
          <NavDropdown.Item href="/blog">BLOG</NavDropdown.Item>
          <NavDropdown.Item href="/contactus">CONTACT US</NavDropdown.Item>
        </NavDropdown>
      </Nav>
      {open ? (
        <>
          <Navbar
            className="justify-content-end navbar d-none d-md-flex "
            defaultactiveKey="/home"
            fixed="top"
          >
            <Nav.Item>
              <Nav.Link href="/">HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutus">ABOUT US</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services">SERVICES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">BLOG</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contactus">CONTACT US</Nav.Link>
            </Nav.Item>
          </Navbar>
          <Nav
            className="justify-content-end navbar nav d-sm-flex d-md-none fixed-top"
            fixed="top"
          >
            <NavDropdown>
              <NavDropdown.Item href="/">HOME</NavDropdown.Item>
              <NavDropdown.Item href="/aboutus">ABOUT US</NavDropdown.Item>
              <NavDropdown.Item href="/services">SERVICES</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio">PORTFLIO</NavDropdown.Item>
              <NavDropdown.Item href="/blog">BLOG</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">CONTACT US</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      ) : undefined}
    </>
  );
}

export default NavBar;
