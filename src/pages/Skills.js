import React, {Component} from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import {VictoryBar, VictoryLabel} from 'victory'

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
            <div style={{background: "#e1e1e1"}}>
                <div> ⠀ </div>
                <div className="page">
                <Container>
                    <h1 className="pageTitle">Skills</h1>
                    <Row>
                        <Col lg={true}>
                            <h1 className="subtitle" style={{color: "#072C82"}}>Software Engineering</h1>
                            <p>I  have had the opportunity to apply Software Engineering concepts in many different projects at school and work.</p>
                            <p>Since my current degree is in Computer Science and Management, I have had the opportunity to study and to put in practice many Project Management techniques.</p>
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
                            <p>My university has a robust curriculum of data science and machine learning, which has allowed me to put theory into practice.</p>
                            <p>Recently, I developed a machine learning and computer vision project for gesture recognition for two months in partnership with Boise State University.</p>
                            <p>I have experience using Python, Keras, and TensorFlow for machine learning and R for data science.</p>
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
                            <p>I am self-taught in this domain, using resources such as FreeCodeCamp and Stack Overflow.</p>
                            <p>My first project is this website, built from scratch using React.</p>
                            <p>I am most familiar with JavaScript (React, Bootstrap), HTML/CSS and GitHub pages.</p>
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