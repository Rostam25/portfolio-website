import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          <p>Copyright 2024. All Rights Reserved</p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/rostamsatarzai" target="_blank"  rel="noreferrer nofollow"><img src={navIcon1} alt="LinkedIn" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}