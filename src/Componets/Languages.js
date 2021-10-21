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
        return <Container id = "l_Menu">
                <Row><Col>
                    <Row>
                        <h4>Languages</h4>
                    </Row>
                    <Row>
                        <ul>
                            <li>TypeScript</li>
                            <li>Java</li>
                            <li>JavaScript</li>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>CSS</li>
                            <li>HTML</li>
                        </ul>
                    </Row> 
                </Col>
                <Col>
                    <Row>
                        <h4>Frameworks & Tools</h4>
                    </Row>
                    <Row>
                        <ul>
                            <li>Angular</li>
                            <li>Android</li>
                            <li>Docker</li>
                            <li>Excel</li>
                            <li>Git</li>
                            <li>React</li>
                            <li>Word</li>
                        </ul>
                    </Row> 
                </Col></Row>
        </Container>
    }

}


export default Languages;