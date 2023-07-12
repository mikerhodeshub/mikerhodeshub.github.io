import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from '@mui/icons-material/School';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import WorkIcon from '@mui/icons-material/Work';
import '../styles/experience.css';

function Experience(){
    return(
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='2022 - Current'
                    iconStyle={{background: '#6C6AF5', color: '#fff'}}
                    icon={<WorkIcon/>}>
                    <h3 className="vertical-timeline-element-title">Sole Proprietor</h3>
                    <p>Better Block</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='January 2023 - June 2023'
                    iconStyle={{background: '#F15939', color: '#fff'}}
                    icon={<SchoolIcon/>}>
                    <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
                    <p>San Diego Community College District</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='2019 - 2022'
                    iconStyle={{background: '#008000', color: '#fff'}}
                    icon={<TwoWheelerIcon/>}>
                    <h3 className="vertical-timeline-element-title">World Travel</h3>
                    <p>On a Motorcycle</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='July 2017 - November 2019'
                    iconStyle={{background: '#6C6AF5', color: '#fff'}}
                    icon={<WorkIcon/>}>

                    <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
                    <p>Converge Direct</p>
                </VerticalTimelineElement>
                
                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='May 2017- November 2017'
                    iconStyle={{background: '#6C6AF5', color: '#fff'}}
                    icon={<WorkIcon/>}>

                    <h3 className="vertical-timeline-element-title">Web Developer</h3>
                    <p>Express Identification Products</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='October 2016 – April 2017'
                    iconStyle={{background: '#6C6AF5', color: '#fff'}}
                    icon={<WorkIcon/>}>

                    <h3 className="vertical-timeline-element-title">Software Development Intern</h3>
                    <p>Apmetric, Inc</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='October 2016 - October 2017'
                    iconStyle={{background: '#F15939', color: '#fff'}}
                    icon={<SchoolIcon/>}>

                    <h3 className="vertical-timeline-element-title">Front End Web Developer I & II</h3>
                    <p>San Diego Community College District</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement 
                    className='vertical-timeline-element--education' 
                    date='August 2014 - Auguest 2016'
                    iconStyle={{background: '#F15939', color: '#fff'}}
                    icon={<SchoolIcon/>}>

                    <h3 className="vertical-timeline-element-title">Associates of Science, Web Development</h3>
                    <p>San Diego Mesa College</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Experience