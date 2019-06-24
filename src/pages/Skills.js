import React, {Component} from 'react';
import {Container, Row, Col, Image, Button} from 'react-bootstrap'
import '../../node_modules/react-vis/dist/style.css';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalGridLines,
    HorizontalGridLines,
    HorizontalBarSeries
  } from 'react-vis'
import './Skills.css'

//background-image: linear-gradient(rgb(217,83,79),rgb(226, 29, 115));

class Skills extends Component {
    
    render() {
        const software = [
            {x: 5, y: 'Java'},
            {x: 4.5, y: 'C/C++'},
            {x: 4.5, y: 'Design Patterns'},
            {x: 3, y: 'Project Management'}
        ];
          
        return (
            <Container className="page">
                <h1>Skills</h1>
                <Row>
                    <Col>
                        <XYPlot height={300} width={300} stackBy="y" color="hotpink" className="graph">
                            <VerticalGridLines />
                            <HorizontalGridLines />
                            <XAxis />
                            <YAxis />
                            <HorizontalBarSeries yType="ordinal" data={software} />
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