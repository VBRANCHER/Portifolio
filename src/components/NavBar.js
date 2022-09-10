import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ImWhatsapp } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
import { ImGithub } from 'react-icons/im';


export const NavBar = () => { 
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, seScrolled] = useState(false);


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
              <a href=""><ImWhatsapp /></a>
              <a href=""><ImLinkedin /></a>
              <a href=""><ImGithub /></a>
            </div>
            <button className="vvd" onClick={() => console.log('connect')}><span>Contate-me</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}