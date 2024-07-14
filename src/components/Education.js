
import colorSharp from "../assets/img/color-sharp.png"
import tileb from "../assets/img/tileb.jpg";
import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


export const Education = () => {

    const education = [
        {
            title: "Chelsea Academy Secondary",
            description: "10 A*-B's at GCSE level",
            imgUrl: tileb,
        },
        {
            title: "Chelsea Academy Sixth Form",
            description: "A*AA in Business, Psychology & Media",
            imgUrl: tileb,
        },
        {
            title: "Computer Science (BSc) at Queen Mary University Of London",
            description: "2:1 in Computer Science (BSc). Modules included: Algorithms & Data Structures, Probability & Matrices, Software Engineering Project, Computability, Complexity & Algorithms, Web Programming, Data Mining, Security Engineering & UX Design",
            imgUrl: tileb,
        },
    ]

    return (
        <section className="education" id="education">
        <div>
            <h2>
                Education
            </h2>
            <img class="background-image-left" src={colorSharp} alt=""></img>
        </div>
        </section>
          );
}
