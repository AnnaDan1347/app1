import React from 'react'
import { Button, Navbar, Nav, Form, FormControl} from 'react-bootstrap'
import './../App.css'


const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link to="/">Home</Nav.Link>
        <Nav.Link to="/mytasks">My tasks</Nav.Link>
        <Nav.Link to="/completedtasks">Completed tasks</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}


export default NavBar;

