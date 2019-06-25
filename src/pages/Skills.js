import React, {Component} from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    LabelSeries,
    HorizontalBarSeries
  } from 'react-vis'
import './Skills.css'

//background-image: linear-gradient(rgb(217,83,79),rgb(226, 29, 115));

class Skills extends Component {
    
    render() {
        const software = [
            {x: 5, y:4},
            {x: 4.5, y:3},
            {x: 4.5, y:2},
            {x: 3, y:1}
        ];

        const labelSoftware = [
            {x: 0.2, y:0.85, label:'Project Management'},
            {x: 0.2, y:1.85, label:'Design Patterns'},
            {x: 0.2, y:3.15, label:'C/C++'},
            {x: 0.2, y:4.15, label:'Java'}
        ];

          
        return (
            <Container className="page">
                <h1>Skills</h1>
                <Row>
                    <Col>
                        <XYPlot height={300} width={300}  color="hotpink"  animation="wobbly" className="graph">
                            <HorizontalBarSeries  data={software} animation="wobbly" barWidth={0.5}/>
                            <LabelSeries data={labelSoftware} className="label"  animation="wobbly"/>
                        </XYPlot>
                    </Col>
                    <Col>
                        <h1>Software Engineering</h1>
                        <p>I'm very good. Trust me!</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Machine Learning</h1>
                        <p>Good, not amazing</p>
                    </Col>
                    <Col>graph</Col>
                </Row>
                <Row>
                    <Col>graph</Col>
                    <Col>
                        <h1>Web development</h1>
                        <p>Basically a noob!</p>
                    </Col>
                </Row>
            </Container>  
        );
    }
}

export default Skills;