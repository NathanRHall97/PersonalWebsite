import React from "react";
import { Container, Row, Col } from "reactstrap";
import profile from "../../src/profile";
import moment from "moment";
import { Media } from "reactstrap";

class Projects extends React.Component{
    render(){
        return <Container>
        <Row>
          <Col>
            {profile.projects.map(function (project, i) {
              return <Media key={i}>
                <Media left top href={project.url}>
                  <Media object src={project.logo} alt={project.institute}/>
                </Media>
                <Media body>
                  <Media heading>
                    <a href={project.url}>{project.institute}</a>
                  </Media>
                  <Row>
                      <Col>
                        <Col>
                            <h4><b>{project.projectName}</b></h4>
                            <h5>{project.ProjectType}</h5>
                            <h6>{project.developmentType}</h6>
                            <h7><i>{project.details}</i></h7>
                            <h6><a href={project.gitlink}>{project.GithubRepo}</a></h6>
                        </Col>
                      </Col>
                  </Row>
                </Media>
              </Media>
            })}
          </Col>
        </Row>
        <br/>
        <br/>
        <Row>
        </Row>
      </Container>
    }

}

export default Projects;