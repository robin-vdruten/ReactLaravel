import React, { useState, useEffect } from "react";
import {
  Container,
  Form,
  Button,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("userinfo"));
  let navigate = useNavigate();

  function LogOut() {
    localStorage.clear();
    navigate("/register");
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            {localStorage.getItem("userinfo") ? (
              <>
                <Link to="/">ProductList</Link>
                <Link to="/add">AddProduct</Link>
                <Link to="/search">searchProduct</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
          </Nav>
        </Container>
        {/* <Form>
          <FormControl type="text" placeholder="search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form> */}
        {localStorage.getItem("userinfo") ? (
          <>
            <Nav>
              <NavDropdown className="profile" title={user && user.name}>
                <NavDropdown.Item onClick={LogOut}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </>
        ) : null}
      </Navbar>
    </div>
  );
}

export default Header;
