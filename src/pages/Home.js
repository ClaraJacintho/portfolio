import React from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import Link from 'react-router-dom/Link'
import Picture from '../assets/petit.jpg'
import CV from '../assets/MariaClaraJacintho_CV.pdf'
import './Home.css'

class Home extends React.Component {
    
    render() {
        return (
            <div className="background">
                <Container className="fullScreen">
                    <Row>
                        <Col lg={true} >
                            <Image src={Picture}  roundedCircle className="profile"/>
                        </Col>
                        <Col lg={true}>
                            <div className="text-center">
                                <h1 className="title">Clara Jacintho</h1>
                                <h2 className="description">Computer Science student</h2>
                                <h2 className="description">Software Engineering | Machine Learning | Web Dev</h2>
                                
                                <div>
                                    <Button variant="link" className="hov icons" href="https://github.com/claraJacintho" target="_blank"><i className="fab fa-github"></i></Button>
                                    <Button variant="link" className="hov icons" href="https://www.linkedin.com/in/clarajacintho/" target="_blank"><i className="fab fa-linkedin"></i></Button>
                                    <Button variant="link" className="hov icons" href="mailto:mcmachry@gmail.com" target="_blank"><i class="fas fa-envelope"></i></Button>
                                    <Button variant="light" classname="cv" style={{marginLeft:15}}>
                                        <a className="hov wordButton"  href={CV} style={{fontSize: 23}} download>Resumé</a>
                                    </Button>
                                </div>
                                <Link to="/skills" className="hov">
                                    <Button className="wordButton hov" style={{fontSize: 50}} variant="light" block>Check out my skills!</Button>
                                </Link>
                            
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;