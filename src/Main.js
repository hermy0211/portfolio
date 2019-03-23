import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import './Hamburgers.css';
import Project from './Project.js';
import projectone from './img/project-tn-01.png';
import projecttwo from './img/project-tn-02.png';
import projectthree from './img/project-tn-03.png';
import projectfour from './img/project-tn-04.png';

class Main extends Component {
  state = {
    projectOneImage: projectone,
    projectTwoImage: projecttwo,
    projectThreeImage: projectthree,
    projectFourImage: projectfour,
    hamburgerState: "off"
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleMenu = () => {
    let hamburger = document.querySelector(".hamburger");
    let overlay = document.querySelector(".overlay");
    if (this.state.hamburgerState === "off") {
      hamburger.classList.add("is-active");
      overlay.classList.remove("hide");
      overlay.classList.add("show");
      this.setState({hamburgerState: "on"})
    } else {
      hamburger.classList.remove("is-active");
      overlay.classList.remove("show");
      overlay.classList.add("hide");
      this.setState({hamburgerState: "off"})
    }
  }

  render() {
    return (
      <div className="body">
        <section className="header">
          <div className="navigation">
            <div className="anne"><Link to="/" className="active">Anne Lee</Link></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="work-mobile"><Link to="/" className="active">Work</Link></div>
                <div className="articles-mobile"><Link to="/articles">Articles</Link></div>
                <div className="about-mobile"><Link to="/about">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/" className="active">Work</Link></div>
              <div className="articles"><Link to="/articles">Articles</Link></div>
              <div className="about"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Product Designer
          </div>
          <div className="speciality">
            UX / Interactive Prototyping
          </div>
        </section>
        <section className="projects">
          {window.innerWidth<=1009 ?
            <div className="left">
              <p className="projects-intro">
                I design intuitive digital experiences<br/>in which <span className="bold">every element serves a purpose</span>.<br/>My designs give form to <span className="bold">product visions</span>,<br/>and <span className="bold">scales</span> to billions of users.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={["How might we improve", <br/>, "the usability of the app", <br/>, "for Vlog creators?"]}
                color="rgba(11, 156, 150, 0.95)"
                title="PRISM Video Editing Redesign"
                category="Mobile Application"
                index="0"
              />
              <Project
                aos="fade-up"
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw hmw-exception"
                class="project-last"
                hmw={["How might we create value", <br/>, "for the content providers", <br/>, "of an education platform?"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Scholé Website Renewal"
                category="PC / Mobile Web"
                index="1"
              />
            </div> :
            <div className="left">
              <p className="projects-intro">
                I design intuitive digital experiences<br/>in which <span className="bold">every element serves a purpose</span>.<br/>My designs give form to <span className="bold">product visions</span>,<br/>and <span className="bold">scales</span> to billions of users.
              </p>
              <Project
                aos=""
                image={this.state.projectOneImage}
                link="/prismvideo"
                hmwClass="hmw"
                class="project-default"
                hmw={["How might we improve", <br/>, "the usability of the app", <br/>, "for Vlog creators?"]}
                color="rgba(11, 156, 150, 0.95)"
                title="PRISM Video Editing Redesign"
                category="Mobile Application"
                index="0"
              />
              <Project
                aos=""
                image={this.state.projectThreeImage}
                link="/schole"
                hmwClass="hmw"
                class="project-last"
                hmw={["How might we create value", <br/>, "for the content providers", <br/>, "of an education platform?"]}
                color="rgba(233, 111, 94, 0.95)"
                title="Scholé Website Renewal"
                category="PC / Mobile Web"
                index="1"
              />
            </div>
          }
          {window.innerWidth<=1009 ?
            <div className="right">
              <Project
                aos="fade-up"
                image={this.state.projectTwoImage}
                link="/prismlayout"
                hmwClass="hmw hmw-exception"
                class="project-default mobile"
                hmw={["How might we create", <br/>, "a layout that is scalable", <br/>, "and intuitive to use?"]}
                color="rgba(251, 192, 96, 0.95)"
                title="PRISM Layout Redesign"
                category="PC Application"
                index="2"
              />
              <Project
                aos="fade-up"
                image={this.state.projectFourImage}
                link="/framer30"
                hmwClass="hmw hmw-exception"
                class="project-default"
                hmw={["How might we create", <br/>, "interactive prototypes", <br/>, "with React.js?"]}
                color="rgba(114, 164, 238, 0.95)"
                title="30 Days of Framer X"
                category="Interactive Prototypes"
                index="3"
              />
            </div> :
            <div className="right">
              <Project
                aos=""
                image={this.state.projectTwoImage}
                link="/prismlayout"
                hmwClass="hmw"
                class="project-default"
                hmw={["How might we create", <br/>, "a layout that is scalable", <br/>, "and intuitive to use?"]}
                color="rgba(251, 192, 96, 0.95)"
                title="PRISM Layout Redesign"
                category="PC Application"
                index="2"
              />
              <Project
                aos=""
                image={this.state.projectFourImage}
                link="/framer30"
                hmwClass="hmw"
                class="project-default"
                hmw={["How might we create", <br/>, "interactive prototypes", <br/>, "with React.js?"]}
                color="rgba(114, 164, 238, 0.95)"
                title="30 Days of Framer X"
                category="Interactive Prototypes"
                index="3"
              />
            </div>
          }
        </section>
      </div>
    );
  }
}

export default Main;
