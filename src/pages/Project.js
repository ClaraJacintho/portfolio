import React, {Component} from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap'
import './Project.css'
import PortfolioPicture from "../assets/portfolio.jpg"
import GesturePicture from "../assets/gesture.jpg"
import HandymanPicture from "../assets/handyman.jpg"
import project from '../assets/content/projects.json'

class Project extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            show: false,
            project: {}
        };
      }
      

      handleClose = () => {
        this.setState({ project: "" });
        this.setState({ show: false });
      }
    
      handleShow = (target) => {
        this.setState({ project: target });
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
                                        <Card.Title>{project.portfolio.title}</Card.Title>
                                        <Card.Text>{project.portfolio.previewText}</Card.Text>
                                        <Button size="sm" variant="danger"  onClick={this.handleShow.bind(this, project.portfolio)}>More</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={true}>
                                <Card  className="card">
                                    <Card.Img variant="top" src={GesturePicture} className="projectBanner"/>
                                    <Card.Body>
                                        <Card.Title>{project.gesture.title}</Card.Title>
                                        <Card.Text>{project.gesture.previewText}</Card.Text>
                                        <Button size="sm" variant="danger" onClick={this.handleShow.bind(this, project.gesture)}>More</Button>
                                    </Card.Body>
                                </Card> 
                            </Col>
                            <Col lg={true}>
                                <Card className="card">
                                    <Card.Img variant="top" src={HandymanPicture} className="projectBanner"/>
                                    <Card.Body>
                                    <Card.Title>{project.handyman.title}</Card.Title>
                                        <Card.Text>{project.handyman.previewText}</Card.Text>
                                        <Button size="sm" variant="danger" onClick={this.handleShow.bind(this, project.handyman)}>More</Button>
                                    </Card.Body>
                                </Card>   
                            </Col>                            
                        </Row>
                    </Container>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} size="lg" >
                    <Modal.Header closeButton className="project">
                    <Modal.Title>{this.state.project.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.state.project.description}
                        <h4>Technologies used:</h4>
                        {this.state.project.technologies}
                        <br/>
                        <h4>What I would do differently</h4>
                        {this.state.project.mistakes}
                    </Modal.Body>
                    <Modal.Footer  className="project">
                        <a  className="bigButton" href={this.state.project.link} target="_blank"><i className="fab fa-github"></i></a>
                        <Button variant="danger" onClick={this.handleClose}>
                        Close
                        </Button>
                    </Modal.Footer>
                </Modal>  
            </div>
        );
    }
}

export default Project;