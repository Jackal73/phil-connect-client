import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useHistory } from "react-router-dom";
import { userLogout } from "../../api/userApi";
import freedom from "../../assets/img/freedom-title-logo.png";
import tikkitLogo from "../../assets/img/tikkitLogo.png";

export const Header = () => {
  const history = useHistory();

  const logMeOut = () => {
    sessionStorage.removeItem("accessJWT");
    localStorage.removeItem("tikkit");
    userLogout();
    history.push("/");
  };

  return (
    <Navbar
      collapseOnSelect
      variant="dark"
      expand="md"
      className="freedom-grad nav-bor-rad"
    >
      <Navbar.Brand className="headerNav nav-bor-rad">
        <img src={tikkitLogo} className="mr-2" alt="logo" width="100px" />
        <span className="font8">@</span>
        <img
          src={freedom}
          id="free-logo"
          className="ml-2"
          alt="logo"
          width="60px"
          onClick={() => window.open("https://freedom-title.com", "_blank")}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />

      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <LinkContainer to="/adminDashboard">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/tickets-all">
            <Nav.Link>Requests</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/add-ticket">
            <Nav.Link>Add Request</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
