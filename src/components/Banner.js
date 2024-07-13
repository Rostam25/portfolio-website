import { Container, Row, Col } from "react-bootstrap"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'Rostam Satarzai'}<span className="wrap"></span></h1>
                        <p>Welcome to my Portfolio website! This was developed using JavaScript React to show my background in Technology and Business. Feel free to browse through this page where I dive into my education, skillset and career journey. You can connect with me on LinkedIn by clicking the icon on the top right of this page. Hope you enjoy!</p>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="Header Img" ></img>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

