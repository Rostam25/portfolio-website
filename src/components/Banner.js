import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap"
import { ArrowRightCircle } from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"

export const Banner = () => {


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h1>{'Rostam Satarzai'}<span className="wrap"></span></h1>
                        <p>Welcome to my Portfolio! This website was created using JavaScript React to show my background in Technology and Business. Feel free to browse around different pages where I dive into my education, skillset and career journey. If you would like to reach out to me, you can connect with me on LinkedIn by clicking the icon on the top right. You can also email me by clicking the "Contact Me" button below. Hope you enjoy!</p>
                        <button onClick={() => console.log('connect')}>Contact Me <ArrowRightCircle size={25}></ArrowRightCircle></button>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={headerImg} alt="Header Img" ></img>
                    </Col>
                </Row>
            </Container>

        </section>
    )
}

