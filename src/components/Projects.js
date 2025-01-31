import { Container, Row, Col, Nav, Tab, } from "react-bootstrap";
import colorSharp from "../assets/img/color-sharp.png"
import tileb from "../assets/img/tileb.jpg";
import { ProjectCard } from "./ProjectCard";


export const Projects = () => {

    const projectsSE = [
        {
            title: "Weather Forecast Web App",
            description: "Developed a weather application in a group project during university - Programmed using React JS",
            imgUrl: tileb,
        },
        {
            title: "FDM Employee Portal Web App",
            description: "Developed an employee portal for FDM Group during university - Programmed using React JS",
            imgUrl: tileb,
        },
        {
            title: "Job Application Tracker using Gratification",
            description: "Developed a Job Application Tracker as part of my final year dissoation at universty - React JS frontend, Django backend",
            imgUrl: tileb,
        },
        {
            title: "Data Mining",
            description: "Using MatPlotLib and other libraries I mined data and scraped data",
            imgUrl: tileb,
        },
        {
            title: "Database Management",
            description: "Using SQL I ran a variety of different queries to fetch data needed from a database!",
            imgUrl: tileb,
        },
    ]

    
    const projectsSky = [
        {
            title: "EECC One Touch Switching",
            description: "Ofcom regulated project at Sky which is to do with the biggest broadband switching adjustment in the last decade",
            imgUrl: tileb,
        },
    ]

    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Here are some projects I've worked on</p>
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
                                            projectsSE.map((project, index) => {
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
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projectsSky.map((project, index) => {
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
            <img className="background-image-right" src={colorSharp} alt=""></img>
        </section>

    )
}