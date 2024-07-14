
import colorSharp from "../assets/img/color-sharp.png"
import tileb from "../assets/img/tileb.jpg";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export const Career = () => {

    const jobs = [
        {
            title: "EE Advisor",
            description: "Customer Advisor at EE",
            imgUrl: tileb,
        },
        {
            title: "Sky Graduate Project Manager",
            description: "6 months as a Project Manager for the One Touch Switching Project",
            imgUrl: tileb,
        },
        {
            title: "Sky Graduate Business Analyst",
            description: "Currently a Graduate Business Analyst for the One Touch Switching Project",
            imgUrl: tileb,
        },
    ]

    return (
        <section className="career" id="career">
        <div>
            <h2>
                Career Journey
            </h2>
            <Timeline position="alternate">
                
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><p>Started Computer Science (BSc) at QMUL <em>(September 2020)</em></p></TimelineContent>
              </TimelineItem>  

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><p>Lead Generator at TOPdesk <em>(February 2021)</em></p></TimelineContent>
              </TimelineItem>   

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><p>Customer Advisor at EE <em>(July 2022)</em></p></TimelineContent>
              </TimelineItem>  

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><p>Graduated BSc Computer Science at QMUL with 2:1 <em>(August 2023)</em></p></TimelineContent>
              </TimelineItem> 

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent><p>Graduate Project Manager at Sky <em>(September 2023 - February 2024)</em></p></TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary"/>
                </TimelineSeparator>
                <TimelineContent><p>Graduate Business Analyst at Sky <em>(February 2024 - Current)</em></p></TimelineContent>
              </TimelineItem>

            </Timeline>
            <img class="background-image-left" src={colorSharp} alt=""></img>
        </div>
        </section>
          );
}
