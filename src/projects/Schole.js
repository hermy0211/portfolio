import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/schole-img00.png';
import img01 from '../img/schole-img01.png';
import img02 from '../img/schole-img02.png';
import img03 from '../img/schole-img03.png';
import img04 from '../img/schole-img04.png';
import img05 from '../img/schole-img05.png';
import img06 from '../img/schole-img06.png';

class Schole extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content schole">
        <div className="cover">
          <ProjectNav
            logoColor="#BFC1C4"
            menuColor="#BFC1C4"
            logo={this.state.logoImage}
            title={["Scholé", <br/>, "Website Renewal"]}
            domain="PC / Mobile Web"
            roles="UX: Anne Lee, Sooyeon Kang"
            rolesTwo="UI: Jihoon Choi, Minsoon Jang"
            date="2016.10 - 2017.01"
            firm="ST Unitas"
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="content-title white" data-aos="fade-up">Project Summary</div>
          <div className="content white end" data-aos="fade-up">
            In this project, I proposed a strategy to leverage various stakeholders' needs, and renovated the entire Scholé website to align with this strategy. I designed all key screens and collaborated with visual designers and developers to implement them. After the initial launch, I improved the usability and accessibility of the website through GA analysis.
          </div>
        </div>
        <div className="background">
          <div className="content-title" data-aos="fade-up">Job Training through Real Project Documents</div>
          <div className="content end" data-aos="fade-up">
            Scholé is a for-profit education organization that offers vocational training for entry-level workers by teaching with real project documents from top firms. It offers edited versions of the documents with commentary and also hosts offline case study lectures with the actual project owners.
          </div>
        </div>
        <div className="problem">
          <div className="content-title middle" data-aos="fade-up">Reluctancies with Supplying Confidential Content</div>
          <img src={img02} alt="Diagram of Stakeholders" className="image" data-aos="fade-up"/>
          <div className="content end" data-aos="fade-up">
            Although the concept of being able to access insider information of projects was appealing to entry-level workers, we had trouble supplying enough material to release each week, as most companies were not open to sharing their trade secrets.
          </div>
        </div>
        <div className="challenge">
          <div className="content-title white" data-aos="fade-up">Design Challenge</div>
          <div className="content end white" data-aos="fade-up">How might we create value for the content providers of an education platform?</div>
        </div>
        <div className="problem">
          <div className="content-title" data-aos="fade-up">Incentifying through the Promotion of Projects</div>
          <div className="content end" data-aos="fade-up">
          We realized that we could incentify the companies by helping them promote their projects. In order to reinforce this value, we came up with the concept of ‘Project Awards’, emphasizing on every part of the website that the projects we had collected were carefully selected, innovative projects that had changed the industry.<br/><br/>By giving them proper recognition, we were able to persuade many companies to contribute their content - laying the foundation of a more sustainable content distribution system.
          </div>
        </div>
        <div className="pc-designs" data-aos="fade-up">
          <div className="content-title white middle">Main Page</div>
          <img src={img03} alt="Main Page" className="image main"/>
          <div className="content-title white middle">Project Pages</div>
          <img src={img04} alt="Project Page" className="image project"/>
          <img src={img05} alt="Project Page Full" className="image project-full pc"/>
        </div>
        <div className="mobile-designs">
          <div className="content-title white middle" data-aos="fade-up">Mobile Screens</div>
          <img src={img06} alt="Main Page" className="image end" data-aos="fade-up"/>
        </div>
        <div className="thanks">
          <div className="thanks-text">Thanks for watching!</div>
          <div className="link"><a href="https://www.schole.ac" target="_blank" rel="noopener noreferrer">www.schole.ac</a></div>
        </div>
        <div className="bottom-navigation">
          <Link to="/prismvideo" className="link link-inactive">PRISM Video Editing Redesign</Link>
          <Link to="/prismlayout" className="link link-inactive">PRISM Layout Redesign</Link>
          <Link to="/schole" className="link link-active">Scholé Website Renewal</Link>
          <Link to="/framer30" className="link link-inactive">30 Days of Framer X</Link>
        </div>
      </section>
    );
  }
}

export default Schole;
