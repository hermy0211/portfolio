import React, { Component } from 'react';
import './App.css';
import Project from './Project.js'
import Footer from './Footer.js'
import projectone from './img/project-tn-01.png'
import projecttwo from './img/project-tn-02.png'
import projectthree from './img/project-tn-03.png'
import projectfour from './img/project-tn-04.png'

class App extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour
  }

  render() {
    return (
      <div className="App">
        <section className="header">
          <div className="navigation">
            <div className="anne"><a href="https://annelee.co/">Anne Lee</a></div>
            <div className="navigation-sub">
              <div className="work"><a href="https://annelee.co/">Work</a></div>
              <div className="articles"><a href="www.medium.com">Articles</a></div>
              <div className="about"><a href="www.medium.com">About</a></div>
            </div>
          </div>
          <div className="designer">
            Product Designer
          </div>
          <div className="speciality">
            UX UI / Front-End Dev
          </div>
        </section>
        <section className="projects">
          <div className="left">
            <p className="projects-intro">
              I design intuitive digital experiences<br/>in which <span className="bold">every element serves a purpose</span>.<br/>My designs give form to <span className="bold">product visions</span>,<br/>and <span className="bold">scales</span> to billions of users.
            </p>
            <Project
              image={this.state.projectOneImage}
              class="project-default"
              hmw={["How might we improve", <br/>, "the usability of the app", <br/>, "for Vlog creators?"]}
              color="rgba(11, 156, 150, 0.95)"
              title="PRISM Video Editing Redesign"
              category="Mobile Application"
            />
            <Project
              image={this.state.projectThreeImage}
              class="project-last"
              hmw={["How might we create value", <br/>, "for the content providers", <br/>, "of an education platform?"]}
              color="rgba(233, 111, 94, 0.95)"
              title="Scholé Website Renewal"
              category="PC / Mobile Web"
            />
          </div>
          <div className="right">
            <Project
              image={this.state.projectTwoImage}
              class="project-default"
              hmw={["How might we create", <br/>, "a layout that is scalable", <br/>, "and intuitive to use?"]}
              color="rgba(251, 192, 96, 0.95)"
              title="PRISM Layout Redesign"
              category="PC Application"
            />
            <Project
              image={this.state.projectFourImage}
              class="project-default"
              hmw={["How might we create", <br/>, "interactive prototypes", <br/>, "with React.js?"]}
              color="rgba(114, 164, 238, 0.95)"
              title="30 Days of Framer X"
              category="Interactive Prototypes"
            />
          </div>
        </section>
        <Footer/>
      </div>
    );
  }
}

export default App;
