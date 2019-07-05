import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { ReactComponent as School } from "../assets/mortarboard.svg"
import { ReactComponent as Work } from "../assets/portfolio.svg"
import { ReactComponent as Star } from "../assets/star.svg"
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
                icon={<Work/>}
            >
                <h3 className="vertical-timeline-element-title">Research Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">UCSD VLSI CAD Lab</h4>
                <h5>San Diego, US</h5>
                <p>
                Participated in the elaboration and implementation of a generic standard for library and cell names.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work right"
                date="2018 - 2020"
                iconStyle={{ background: 'rgb(255, 145, 178)', color: '#fff' }}
                icon={<School/>}
            >
                <h3 className="vertical-timeline-element-title">M.Eng. Computer Science and Management</h3>
                <h4 className="vertical-timeline-element-subtitle">Polytech Montpellier</h4>
                <h5>Montpellier, FR</h5>
                <p>
                A selective Engineering school, accredited by the French Government, 
                with a very practical curriculum including Software Engineering, 
                Data Science and Project Management.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work left"
                date="01/2018 - 06/2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Work/>}
            >
                <h3 className="vertical-timeline-element-title">Software Engineering Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">SAP</h4>
                <h5>São Leopoldo, BR</h5>
                <p>
                Worked in the maintenance and evolution of the Human Capital Management 
                software product with focus on Spanish companies. The activities were executed 
                following the Agile methodology with Scrum in a multidisciplinary team.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work right"
                date="2016 - 2018"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<Work/>}
            >
                <h3 className="vertical-timeline-element-title">Research Intern</h3>
                <h4 className="vertical-timeline-element-subtitle">PET Computação UFGRS</h4>
                <p>
                Developed projects in the areas of education and research, such as mini-courses, 
                android development, and data analysis. I was elected team leader and coordinated 
                the other undergraduate researchers, facilitating the communication between 
                professors and other team members.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education left"
                date="2015 - 2021"
                iconStyle={{ background: 'rgb(255, 145, 178)', color: '#fff' }}
                icon={<School/>}
            >
                <h3 className="vertical-timeline-element-title">B.Sc., Computer Science</h3>
                <h4 className="vertical-timeline-element-subtitle">UFGRS</h4>
                <h5>Porto Alegre, BR</h5>
                <p>
                One of the top 5 Brazilian universities, with a strong technical curriculum 
                including Algorithms, Data Structures and Complexity. 
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<Star/>}
            />
        </VerticalTimeline>
        </div>
    </div>
)