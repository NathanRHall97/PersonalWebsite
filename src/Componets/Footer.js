import React from 'react';
import {Container} from 'reactstrap';
import { FontAwesomeIcon } from '/Users/NathanHall/Desktop/Portfolio/personal/node_modules/@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '/Users/NathanHall/Desktop/Portfolio/personal/node_modules/@fortawesome/free-brands-svg-icons';

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