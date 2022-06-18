import {
  Container,
  Form,
  Button,
  Navbar,
  Nav,
  FormControl,
} from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
          <Nav className="me-auto navbar_wrapper">
            <Link to="/add">AddProduct</Link>
            <Link to="/update">UpdateProduct</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </Nav>
        </Container>
        <Form>
          <FormControl type="text" placeholder="search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
