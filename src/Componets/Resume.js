import React from "react";
import ResumeImg from "../NRHResume.png";
import {Container, Row, Col} from 'reactstrap';
import './Languages.css';

class Resume extends React.Component{
    render()
    {
        return <Container>
            <img src={ResumeImg} className = "ResumeImg"/>
            <a href={ResumeImg} download>Download Resume</a>
        </Container>
    }
}

export default Resume;