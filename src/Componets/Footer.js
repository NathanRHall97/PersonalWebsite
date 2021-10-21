import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '../react-fontawesome';
import { faLinkedin, faGithub } from '../free-brands-svg-icons';

class Footer extends React.Component{
    render()
    {
        return (
            <footer>
            <hr/>
                <Container>
                    <a href="https://www.linkedin.com/in/nrh20/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a href="https://github.com/NathanRHall97"><FontAwesomeIcon icon={faGithub}  /></a>
                </Container>
            </footer>
        )
    }
}

export default Footer;