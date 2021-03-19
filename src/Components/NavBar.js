import { Button, Collapse } from "bootstrap";
import React, { useEffect, useState } from "react";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";

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
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/aboutus">About us</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/services"> Services</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/blog">Blog</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/contactus">Contact us</Nav.Link>
        </Nav.Item>
      </Navbar>
      <Nav className="justify-content-end navbar d-sm-flex d-md-none navbarTransparent">
        <NavDropdown>
          <NavDropdown.Item href="/">Home</NavDropdown.Item>
          <NavDropdown.Item href="/aboutus">About us</NavDropdown.Item>
          <NavDropdown.Item href="/services">Services</NavDropdown.Item>
          <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
          <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
          <NavDropdown.Item href="/contactus">Contact us</NavDropdown.Item>
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
              <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/aboutus">About us</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/services"> Services</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/blog">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/contactus">Contact us</Nav.Link>
            </Nav.Item>
          </Navbar>
          <Nav className="justify-content-end navbar d-sm-flex d-md-none">
            <NavDropdown>
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/aboutus">About us</NavDropdown.Item>
              <NavDropdown.Item href="/services">Services</NavDropdown.Item>
              <NavDropdown.Item href="/portfolio">Portfolio</NavDropdown.Item>
              <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
              <NavDropdown.Item href="/contactus">Contact us</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </>
      ) : undefined}
    </>
  );
}

export default NavBar;
