import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {VictoryBar, VictoryLabel} from 'victory'
import './Skills.css'

//TODO: prettyfy
class Skills extends Component {
    
    render() {
        const software = [
            {x: 4, y:5, label:'Java'},
            {x: 3, y:4, label:'C/C++'},
            {x: 2, y:4, label:'Design Patterns'},
            {x: 1, y:3, label:'Project Management'}
        ];

        const ml = [
            {x: 4, y:5, label:'Python'},
            {x: 3, y:4.5, label:'R'},
            {x: 2, y:4, label:'Keras'},
            {x: 1, y:3, label:'Tensor Flow'}
        ];

        const webdev = [
            {x: 4, y:4, label:'HTML/CSS'},
            {x: 3, y:4, label:'JavaScript'},
            {x: 2, y:3, label:'React'},
            {x: 1, y:3, label:'Bootstrap'}
        ];

          
        return (
            <div className="background top">
                <div> ⠀ </div>
                <div className="page">
                <Container>
                    <h1 className="pageTitle">Skills</h1>
                    <Row>
                        <Col lg={true}>
                            <h1 className="subtitle" style={{color: "#072C82"}}>Software Engineering</h1>
                            <p>I'm very good. Trust me!</p>
                        </Col>
                        <Col lg={true}>    
                            <VictoryBar horizontal data={software} barRatio={1.4} style={{
                                                                                        data: {
                                                                                            fill: "#072C82",
                                                                                        },
                                                                                        labels: {
                                                                                            fontFamily: "oswald",
                                                                                            fill: "white"
                                                                                        }
                                                                                        }}
                            labelComponent={
                                <VictoryLabel verticalAnchor="middle" textAnchor="end"  dx={-20}/>
                                }
                                animate={{ duration: 1000, easing: "bounce" }}
                                domain={{x: [0, 4], y: [0, 5]}}
                                className="graph"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={true}>
                            <h1 className="subtitle" style={{color: "#076D82"}}>Machine Learning</h1>
                            <p>Good, not amazing</p>
                        </Col>
                        <Col lg={true}>
                            <VictoryBar horizontal data={ml} barRatio={1.4} style={{
                                                                                        data: {
                                                                                            fill: "#076D82",
                                                                                        },
                                                                                        labels: {
                                                                                            fontFamily: "oswald",
                                                                                            fill: "white"
                                                                                        }
                                                                                        }}
                                labelComponent={
                                    <VictoryLabel verticalAnchor="middle" textAnchor="end"  dx={-20}/>
                                }
                                animate={{ duration: 1, easing: "bounce" }}
                                domain={{x: [0, 4], y: [0, 5]}}
                                className="graph"
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={true}>
                            <h1 className="subtitle" style={{color: "#06786C"}}>Web development</h1>
                            <p>Basically a noob!</p>
                        </Col>
                        <Col lg={true}>
                            <VictoryBar horizontal data={webdev} barRatio={1.4} style={{
                                                                                        data: {
                                                                                            fill: "#06786C",
                                                                                        },
                                                                                        labels: {
                                                                                            fontFamily: "oswald",
                                                                                            fill: "white"
                                                                                        }
                                                                                        }}
                                labelComponent={
                                    <VictoryLabel verticalAnchor="middle" textAnchor="end"  dx={-20}/>
                                }
                                domain={{x: [0, 4], y: [0, 5]}}
                                animate={{ duration: 1, easing: "bounce" }}
                                className="graph"
                            />
                        </Col>
                    </Row>
                    </Container>
                </div>  
            </div>
        );
    }
}

export default Skills;