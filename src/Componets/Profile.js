import React from 'react';
import {Jumbotron, Container, Row, Col, TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from 'classnames';
import Experience from "./Experience";
import Education from './Education'
import profile from '../profile.json'
import ProfilePic from '../ProfilePic.jpg';
import Projects from "./Projects";
import Languages from "./Languages";
import Resume from "./Resume";
import Contact from "./Contact";

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  render() {
    return <div>
      <Jumbotron>
        <Container>
            <Row>
            <Col><img src= {ProfilePic} className = "profile-picture" alt ="Nathan R. Hall"/></Col>
          <Col><h1 className="display-3">{profile.title}</h1>
          <p className="lead">{profile.summary}</p></Col>
          </Row>
        </Container>
      </Jumbotron>

      <Container>
        <Nav tabs>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '1' })}
                     onClick={() => { this.toggle('1'); }}>
              <font color="DarkBlue">Education</font>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '2' })}
                     onClick={() => { this.toggle('2'); }}>
              <font color="DarkBlue">Projects</font>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '3' })}
                     onClick={() => { this.toggle('3'); }}>
              <font color="DarkBlue">Experience</font>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '4' })}
                     onClick={() => { this.toggle('4'); }}>
              <font color="DarkBlue">Languages</font>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '5' })}
                     onClick={() => { this.toggle('5'); }}>
              <font color="DarkBlue">Resume</font>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className={classnames({ active: this.state.activeTab === '6' })}
                     onClick={() => { this.toggle('6'); }}>
              <font color="DarkBlue">Contact Me</font>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <Education/>
          </TabPane>
          <TabPane tabId="2">
            <Projects></Projects>
          </TabPane>
          <TabPane tabId="3">
            <Experience/>
          </TabPane>
          <TabPane tabId="4">
            <Languages/>
          </TabPane>
          <TabPane tabId="5">
            <Resume/>
          </TabPane>
          <TabPane tabId="6">
            <Contact/>
          </TabPane>
        </TabContent>
      </Container>
    </div>;
  }
}

export default Profile;