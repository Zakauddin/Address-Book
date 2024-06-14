import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
          <Navbar.Brand as={Link}  to="/">Address Book</Navbar.Brand>
          <Navbar.Collapse className="justify-content-end">
              <Nav>
                <Nav.Link as={Link} to="/new_contact">Add Contact</Nav.Link>
              </Nav>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  
export default NavBar;