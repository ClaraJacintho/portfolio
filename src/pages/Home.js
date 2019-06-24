import React, {Component} from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap'
import Picture from '../assets/petit.jpg'
import './Home.css'

class Home extends React.Component {
    render() {
        return (
            <div className="background">
                <Container className="big">
                    <Row>
                        <Col lg={true} >
                            <Image src={Picture}  roundedCircle className="profile"/>
                        </Col>
                        <Col lg={true}>
                            <h1 className="title">Clara Jacintho</h1>
                            <h2 className="description">Computer Science student</h2>
                            <h2 className="description">Software Engineering | Machine Learning | Web Dev</h2>
                            <div className="text-center">
                                <a className="btn" href="https://github.com/claraJacintho" target="_blank"><i className="fab fa-github"></i></a>
                                <a className="btn" href="https://www.linkedin.com/in/clarajacintho/" target="_blank"><i className="fab fa-linkedin"></i></a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Home;