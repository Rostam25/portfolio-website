import { Container, Row, Col, Nav, Tab, } from "react-bootstrap";
import colorSharp2 from "../assets/img/color-sharp2.png"
import tileb from "../assets/img/tileb.jpg";
import { ProjectCard } from "./ProjectCard";


export const Career = () => {

    const jobs = [
        {
            title: "EE Advisor",
            description: "Customer Advisor at EE",
            imgUrl: tileb,
        },
        {
            title: "Sky Graduate Project Manager",
            description: "6 months as a Project Manager for the One Touch Switching Project",
            imgUrl: tileb,
        },
        {
            title: "Sky Graduate Business Analyst",
            description: "Currently a Graduate Business Analyst for the One Touch Switching Project",
            imgUrl: tileb,
        },
    ]

    return (
        <section className="career" id="career">
            <Container>
                <Row>
                    <Col>
                        <h2>Career Journey</h2>
                        <p>Here is my career journey</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav varient="pills" defaultActiveKey="/home" className="nav-pills mb-5 justify-content-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Software Engineering</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Sky</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            jobs.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt=""></img>
        </section>

    )
}