import React from 'react';
import "../css/About.css";
import Github from "../img/github.png";
import LinkedIn from "../img/linkedin.png";
import Vector1 from "../img/Vector1.png";
import Vector2 from "../img/Vector2.png";
import boy from "../img/boy.png";
import glassesimoji from "../img/glassesimoji.png";
import Crown from "../img/crown.png";
import thumbsup from '../img/thumbup.png';
import FloatingDiv from "./FloatingDiv";

function About() {
    return (
        <div className='about'>
            <div className='aboutLeft'>
                <div className='aboutName'>
                    <span> Hi! I Am </span>
                    <span> Akash Ratan Verma</span>
                    <span>
                    Frontend Developer with high level of experience in web designing
                    and development, producting the Quality work
                    </span>
                </div>

                <button className='button aboutBtn'>Say Hi...!</button>

                <div className='icons'>
                    <img src={Github} alt=" " />
                    <img src={LinkedIn} alt=" "/>
                </div>
            </div>
            <div className='aboutRight'>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassesimoji} alt="" />

                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={Crown} text1="Web" text2="Developer"/>
                </div>

                <div style={{top: '18rem', left: '0rem'}}>
                    <FloatingDiv image={thumbsup} text1="Cool" text2="Designs"/>
                </div>
            </div>
        </div>
    )
}

export default About;
