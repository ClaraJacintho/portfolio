import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as PET } from "../assets/pet.svg"
import { ReactComponent as UCSD } from "../assets/ucsd.svg"
import { ReactComponent as UFGRS } from "../assets/ufrgs.svg"
import { ReactComponent as UM } from "../assets/um.svg"
import { ReactComponent as SAP } from "../assets/sap.svg"
import "./Education.css"


export const Education = () => (
    <div className="background top">
        <div> ⠀ </div>
        <div className="page" style={{background: "#C3E4E8"}}>
        <VerticalTimeline>
            <VerticalTimelineElement
                className="vertical-timeline-element--work left"
                date="06/2019 - 08/2019"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<UCSD/>}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work right"
                date="2018 - 2020"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<UM/>}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work left"
                date="01/2018 - 06/2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<SAP/>}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work right"
                date="2016 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<PET/>}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education left"
                date="2015 - 2021"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<UFGRS/>}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Creative Direction, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<UFGRS/>}
            />
        </VerticalTimeline>
        </div>
    </div>
)