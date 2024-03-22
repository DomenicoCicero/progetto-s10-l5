import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Link, useLocation } from "react-router-dom";

const MyNavbar = () => {
  const location = useLocation();
  console.log(location);

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      data-bs-theme="dark"
      className="position-sticky top-0"
      style={{ zIndex: 1 }}
    >
      <Container fluid>
        <Navbar.Brand href="#home">EpiMeteo!</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Link
              to="/"
              className={
                location.pathname === "/"
                  ? "text-decoration-underline text-white nav-link"
                  : "text-decoration-none text-white nav-link"
              }
            >
              Homepage
            </Link>
            <Link
              to="/regions"
              className={
                location.pathname === "/regions"
                  ? "text-decoration-underline text-white nav-link"
                  : "text-decoration-none text-white nav-link"
              }
            >
              Regions
            </Link>
            <Link
              to="/news"
              className={
                location.pathname === "/news"
                  ? "text-decoration-underline text-white nav-link"
                  : "text-decoration-none text-white nav-link"
              }
            >
              News
            </Link>
            <Link
              to="/info"
              className={
                location.pathname === "/info"
                  ? "text-decoration-underline text-white nav-link"
                  : "text-decoration-none text-white nav-link"
              }
            >
              Info
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
