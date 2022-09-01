import { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";

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

    window.addEventListener("scroll", onScroll)

    return () => window.removeEventListener("scroll", onScroll)
  }, [])

    return (
    <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home" className={activeLink === 'home' ? 'active'}></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#experiencias">Experiências</Nav.Link>
            <Nav.Link href="#habilidades">Habilidades</Nav.Link>
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