import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../../src/profile";
import moment from "moment";
import { Media } from "reactstrap";
import JavaImage from '../JavaImg.png';
import JSImage from '../JS.png';
import CImage from '../Cpic.png';
import CppImage from '../Cpp.png';
import SQLImage from '../SQL.jpg';
import ASMImage from '../ASM.png';
import './Languages.css';



class Languages extends React.Component{
    render()
    {
        return <Container>
            <Row>
                <Col>
                    <img src= {JavaImage} className = "Lang-picture" alt ="Java"/>    
                </Col>
                <Col>
                <img src= {JSImage} className = "Lang-picture" alt ="JavaScript"/>  
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src= {CImage} className = "Lang-picture" alt ="C"/>    
                </Col>
                <Col>
                    <img src= {CppImage} className = "Lang-picture" alt ="C++"/>  
                </Col>
            </Row>
            <Row>
                <Col>
                    <img src= {SQLImage} className = "Lang-picture" alt ="SQL"/>    
                </Col>
                <Col>
                    <img src= {ASMImage} className = "Lang-picture" alt ="ASM"/>  
                </Col>
            </Row>
        </Container>
    }

}


export default Languages;