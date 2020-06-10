import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Form, FormControl, Button, NavDropdown, Navbar } from 'react-bootstrap'

const Header = () => (
  <header>
    <Navbar expand="lg">
      {/* <Navbar.Brand href="#home">root to the fruit</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link to='/about/'>About</Link></Nav.Link>
          <Nav.Link><Link to='/contact/'>Contact</Link></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
