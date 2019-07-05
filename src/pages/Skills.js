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
            <div className="background top">
                <div> ⠀ </div>
                <div className="page">
                <Container>
                    <h1 className="pageTitle">Skills</h1>
                    <Row>
                        <Col lg={true}>
                            <h1 className="subtitle" style={{color: "#072C82"}}>Software Engineering</h1>
                            <p>It is definitely my strongest area! I have studied it a lot in university, and have had the opportunity to apply the 
                                concepts in many different projects. I was also able to develop this set of skills in my previous internship at SAP, 
                                by building and maintaining HR software.</p>
                            <p> I am most familiar with Java, with C++ a near second, having worked with these languages for many projects in school, 
                                where I also used design patternsl. Also, since my current degree is in Computer Science and Management I have had the 
                                opportunity to study and to put in practice many of the facets of Project Management.
                            </p>
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
                            <p>Probably my two favourite areas! I have learnt a lot about them by myself, 
                            using resources found online, but I have also had some courses at my university, 
                            especially data science. More recently, I developed a machine learning/computer vision 
                            project for 2 months in partnership with Boise State University.</p>
                            <p>I have experience using Python, Keras and TensorFlow for machine learning and R for data science.
                            </p>
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
                            <p>My newest skill! While I am quite new to this part of the computer science world, 
                                I already love it. Being able to build something and share with friends and family 
                                is an incredible feeling! The only experience I have so far is this website and the projects 
                                and lessons on FreeCodeCamp, but I am already planning some new projects to continue to develop my abilities.</p>

                            <p>I am most familiar with JavaScript (React, react-bootstrap), HTML/CSS and GitHub pages.
                            </p>
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