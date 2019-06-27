import React, {Component} from 'react';
import {Container, Row, Col, Card, Button, Modal} from 'react-bootstrap'
import './Project.css'
import PortfolioPicture from "../assets/portfolio_banner.jpg"
import GesturePicture from "../assets/gesture_banner.jpg"
import HandymanPicture from "../assets/handyman_banner.jpg"
import project from '../assets/content/projects.json'
//There must be another way!
import GestureP from "../assets/gesture_project.png"
import HandymanP from "../assets/handyman_project.png"
import PortfolioP from "../assets/portfolio_project.png"
import questionPicture from "../assets/undefined.jpg"

class Project extends Component {
    constructor(props, context) {
        super(props, context);
    
        this.state = {
            show: false,
            project: {},
            img: {}
        };
      }
      

      handleClose = () => {
        this.setState({ project: "" });

        this.setState({ show: false });
      }
    
      handleShow = (target) => {
        this.setState({ project: target });
        switch(target.img){
            case("portfolio"): this.setState({ image: PortfolioP }); break;
            case("gesture"): this.setState({ image: GestureP }); break;
            case("handyman"): this.setState({ image:  HandymanP}); break;
            default:  this.setState({ image:  questionPicture}); break;
        }
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
                                        <div className="text-center">
                                            <Button block size="sm" variant="primary"  onClick={this.handleShow.bind(this, project.portfolio)}>More</Button>
                                        </div>
                                        </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={true}>
                                <Card  className="card">
                                    <Card.Img variant="top" src={GesturePicture} className="projectBanner"/>
                                    <Card.Body>
                                        <Card.Title>{project.gesture.title}</Card.Title>
                                        <Card.Text>{project.gesture.previewText}</Card.Text>
                                        <div className="text-center">
                                            <Button block size="sm" variant="primary" onClick={this.handleShow.bind(this, project.gesture)}>More</Button>
                                        </div>
                                        
                                    </Card.Body>
                                </Card> 
                            </Col>
                            <Col lg={true}>
                                <Card className="card">
                                    <Card.Img variant="top" src={HandymanPicture} className="projectBanner"/>
                                    <Card.Body>
                                    <Card.Title>{project.handyman.title}</Card.Title>
                                        <Card.Text>{project.handyman.previewText}</Card.Text>
                                        <div className="text-center">
                                            <Button block size="sm" className="centerButton" variant="primary" onClick={this.handleShow.bind(this, project.handyman)}>More</Button>
                                        </div>
                                    </Card.Body>
                                </Card>   
                            </Col>                            
                        </Row>
                    </Container>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose} size="lg" >
                    <Modal.Header closeButton className="project">
                    <Modal.Title className="modalTitle">{this.state.project.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="text-center">
                            <img className="modalImg" src={this.state.image}/>
                        </div>
                        <br/><br/>

                        <h5 className="modalSubtitle"><b>The project</b></h5>
                        {this.state.project.description}
                        <br/><br/>

                        <h5 className="modalSubtitle"><b>Technologies used</b></h5>
                        {this.state.project.technologies}
                        <br/><br/>

                        <h5 className="modalSubtitle"><b>What I would do differently</b></h5>
                        {this.state.project.mistakes}
                    </Modal.Body>
                    <Modal.Footer  className="project">
                        <div className="text-left">
                            <a  className="icons hov"style={{fontSize: 40}} href={this.state.project.link} target="_blank"><i className="fab fa-github"></i></a>
                        </div>
                    </Modal.Footer>
                </Modal>  
            </div>
        );
    }
}

export default Project;