import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
inport logo from '../assets'

export const NavBar = () => { 
  const [activeLink, setActiveLink] = useState('home');
  const [scolled, seScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50){
        seScrolled(true);
      } else {
        seScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

const onUpadteActiveLink = (value) => {
  setActiveLink(value);
}

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home"/>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpadteActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#experiencias" className={activeLink === 'experiencias' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpadteActiveLink('experiencias')} >Experiências</Nav.Link>
            <Nav.Link href="#habilidades" className={activeLink === 'habilidades' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpadteActiveLink('habilidades')} >Habilidades</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href=""><img src={} alt="" /></a>
              <a href=""><img src={} alt="" /></a>
              <a href=""><img src={} alt="" /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Contate-me</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}