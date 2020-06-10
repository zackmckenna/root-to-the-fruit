import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Nav, Navbar } from 'react-bootstrap'

const Header = () => (
  <header>
    <Navbar expand="lg">
      {/* <Navbar.Brand href="#home">root to the fruit</Navbar.Brand> */}
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link><Link style={{ color: 'black'}} to='/'>Home</Link></Nav.Link>
          <Nav.Link><Link style={{ color: 'black'}} to='/contact/'>Contact</Link></Nav.Link>
          <Nav.Link><Link style={{ color: 'black'}} to='/about/'>About</Link></Nav.Link>
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
