import React, {Component} from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap'
import './Project.css'
import PortfolioPicture from "../assets/portfolio.jpg"
import GesturePicture from "../assets/gesture.jpg"
import HandymanPicture from "../assets/handyman.jpg"
class Project extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    
        this.state = {
          show: false,
        };
      }
    
      handleClose() {
        this.setState({ show: false });
      }
    
      handleShow() {
        this.setState({ show: true });
      }    

    render() {
        return (
            <div className="background top">
                <div> ⠀ </div>
                <div className="page">
                    <Container>
                        <h1 className="pageTitle">Projects</h1>
                        <Row>
                            <Col lg={true}>
                                <Card className="card">
                                    <Card.Img variant="top" src={PortfolioPicture} className="projectBanner"/>
                                    <Card.Body>
                                        <Card.Title>Portfolio Website</Card.Title>
                                        <Card.Text>
                                            A Portfolio website built with React
                                        </Card.Text>
                                        <Button size="sm" variant="danger"  onClick={this.handleShow}>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={true}>
                                <Card  className="card">
                                    <Card.Img variant="top" src={GesturePicture} className="projectBanner"/>
                                    <Card.Body>
                                        <Card.Title>Gesture recognition</Card.Title>
                                        <Card.Text>
                                            A project to recognize simple hand gestures
                                        </Card.Text>
                                        <Button size="sm" variant="danger">More</Button>
                                    </Card.Body>
                                </Card> 
                            </Col>
                            <Col lg={true}>
                                <Card className="card">
                                    <Card.Img variant="top" src={HandymanPicture} className="projectBanner"/>
                                    <Card.Body>
                                        <Card.Title>Handymen application</Card.Title>
                                        <Card.Text>
                                            A Java application to hire handymen
                                        </Card.Text>
                                        <Button size="sm" variant="danger">More</Button>
                                    </Card.Body>
                                </Card>   
                            </Col>                            
                        </Row>
                    </Container>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleClose}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>  
            </div>
        );
    }
}

export default Project;