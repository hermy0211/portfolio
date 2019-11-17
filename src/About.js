import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import profile from "./img/profile.png";
import resume from "./Resume_Anne Lee.pdf";
import link from "./img/link-icon.svg"

class About extends Component {
  state = {
    hamburgerState: "off",
    link: link
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
                <div className="work-mobile"><Link to="/">Work</Link></div>
                <div className="articles-mobile"><Link to="/articles">Articles</Link></div>
                <div className="about-mobile"><Link to="/about" className="active">About</Link></div>
              </div>
            </div>
            <div className="navigation-sub">
              <div className="work"><Link to="/">Work</Link></div>
              <div className="articles"><Link to="/articles">Articles</Link></div>
              <div className="about"><Link to="/about" className="active">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Product Designer
          </div>
          <div className="speciality">
            UX UI / Front-End Development
          </div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile" className="about-image"/>
            {window.innerWidth<=1009 ?
              <div className="about-content">
                <div>
                  Hi, my name is Anne.<br/><br/>
                  I am a Product Designer at Framer passionate about bridging technology and design. In the past I have worked for Naver, Korea's top search engine, and the Princeton Review. Here are a few things that describe me.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title">Experience Designing from Brief to Shipment</span><br/><br/>
                  I have successfully shipped 5 digital products from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web, mobile and desktop.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                  <span className="about-title">Experience Designing for Creative Tools</span><br/><br/>
                  Most of my recent work has been focused around tools for creatives. I am currently working on Framer Web, a collaborative design prototyping tool. In the past I have worked on professional video production tools for streamers. Through this process, I have gained a good understanding of what it's like to work with intricate systems and technical constraints.<br/><br/><br/>
                </div>
                <div data-aos="fade-up">
                <span className="about-title">Qualified in Programming</span><br/><br/>
                I am also qualified in programming; having received my Front End Developer Nanodegree from Udacity in 2018. I am capable of creating prototypes with web based technologies such as HTML, CSS, and Javascript; in fact, I designed and <a href="https://github.com/hermy0211/portfolio" target="_blank" rel="noopener noreferrer">coded<img className="link-icon" src={this.state.link} alt="Link Icon"/></a> this portfolio myself! My knowledge of technical limitations and possibilities also lead to strong designer-developer relationships.<br/><br/><br/>
                Feel free to contact me for any inquiries about my portfolio and work opportunities!
                </div>
              </div> :
              <div className="about-content">
                <div>
                  Hi, my name is Anne.<br/><br/>
                  I am a Product Designer at Framer passionate about bridging technology and design. In the past I have worked for Naver, Korea's top search engine, and the Princeton Review. Here are a few things that describe me.<br/><br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title">Experience Designing from Brief to Shipment</span><br/><br/>
                  I have successfully shipped 5 digital products from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web, mobile and desktop.<br/><br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title">Experience Designing for Creative Tools</span><br/><br/>
                  Most of my recent work has been focused around tools for creatives. I am currently working on Framer Web, a collaborative design prototyping tool. In the past I have worked on professional video production tools for streamers. Through this process, I have gained a good understanding of what it's like to work with intricate systems and technical constraints.<br/><br/><br/>
                </div>
                <div data-aos="">
                  <span className="about-title">Qualified in Programming</span><br/><br/>
                  I am also qualified in programming; having received my Front End Developer Nanodegree from Udacity in 2018. I am capable of creating prototypes with web based technologies such as HTML, CSS, and Javascript; in fact, I designed and <a href="https://github.com/hermy0211/portfolio" target="_blank" rel="noopener noreferrer">coded<img className="link-icon" src={this.state.link} alt="Link Icon"/></a> this portfolio myself! My knowledge of technical limitations and possibilities also lead to strong designer-developer relationships.<br/><br/><br/>
                  Feel free to contact me for any inquiries about my portfolio and work opportunities!
                </div>
              </div>
            }
        </section>
        <div className="about-resume">
          <a href={resume} download className="about-download-button">DOWNLOAD CV</a>
        </div>
      </div>
    );
  }
}

export default About;
