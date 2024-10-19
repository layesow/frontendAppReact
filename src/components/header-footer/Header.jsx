import React from 'react'
//import navbar
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <div>
      <header>
            <div className="container py-3">
                <Navbar expand="lg">
                    <Navbar.Brand href="/" className='logo'><span>Site</span> Web</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="/" className='nav-link'>Accueil</Nav.Link>
                        <Nav.Link href="/services" className='nav-link'>Services</Nav.Link>
                        <Nav.Link href="/projets" className='nav-link'>Projets</Nav.Link>
                        <Nav.Link href="/blog" className='nav-link'>Blog</Nav.Link>
                        <Nav.Link href="/a-propos" className='nav-link'>A-propos</Nav.Link>
                        <Nav.Link href="/contact" className='nav-link'>Contact</Nav.Link>
                        
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        </header>
    </div>
  )
}

export default Header
