import React, {Component} from 'react';
import {Container, Row, Col, Card, Image, Button} from 'react-bootstrap'
import './Project.css'


class Project extends Component {

    render() {
        return (
            <div className="background top">
                <div> ⠀ </div>
                <div className="page">
                    <h1 className="skill">Projects</h1>
                    <Container>
                        <Row>
                            <Col lg={true}>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src="https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg" />
                                    <Card.Body>
                                        <Card.Title>Portfolio Website</Card.Title>
                                        <Card.Text>
                                             v hard aa
                                        </Card.Text>
                                        <Button size="sm" variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col lg={true}>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src="https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg" />
                                    <Card.Body>
                                        <Card.Title>Portfolio Website</Card.Title>
                                        <Card.Text>
                                             v hard aa
                                        </Card.Text>
                                        <Button size="sm" variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card> 
                            </Col>
                            <Col lg={true}>
                                <Card style={{ width: '16rem' }}>
                                    <Card.Img variant="top" src="https://www.guidedogs.org/wp-content/uploads/2018/01/Mobile.jpg" />
                                    <Card.Body>
                                        <Card.Title>Portfolio Website</Card.Title>
                                        <Card.Text>
                                             v hard aa
                                        </Card.Text>
                                        <Button size="sm" variant="primary">Go somewhere</Button>
                                    </Card.Body>
                                </Card>   
                            </Col>                            
                        </Row>
                    </Container>
                </div>  
            </div>
        );
    }
}

export default Project;