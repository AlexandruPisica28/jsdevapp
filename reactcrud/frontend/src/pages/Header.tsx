
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} className="nav-link">
            React CRUD App!!!!
          </Link>
        </Navbar.Brand>
        <Nav className="justify-content-end">
          <Nav>
            <Link to={"/create-user"} className="nav-link">
              Create User
            </Link>
          </Nav>
          <Nav>
            <Link to={"/user-list"} className="nav-link">
              User List
            </Link>
          </Nav>
        </Nav>
      </Container>
    </Navbar>
  </header>

  )
}
