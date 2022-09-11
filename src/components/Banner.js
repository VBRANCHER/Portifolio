import { Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Banner = () => {
    return (
    <section className="banner" id="home">
        <Container>
        <Row className="algin-items-center">
        <col xs={12} md={6} xl={7}> 
        <span className="tagline">Seja bem vindo(a)!</span>
        <h1>Olá! Sou Vinícius Brancher Almada!</h1> 
        <p>Atualmente trabalhando como DevOps, atuando, investindo conhecimentos e experiências na área de Tecnologia da Informação desde 2017. Possuindo habilidades em desenvolvimento e infraestrutura de Softwares Web e Desktop, com o objetivo de crescer ainda mais neste ramo! </p>
        <button onClick={() => console.log('connect')}>Contate-Me </button>
        </col>
        </Row>
        </Container>
    </section>
    )
}