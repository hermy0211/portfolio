import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import profile from "./img/profile.png";

class About extends Component {
  state = {
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
            UX / Interactive Prototyping
          </div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile" className="about-image"/>
          <div className="about-content">
            <div>
              Hi, my name is Anne.<br/><br/>
              I am a UX designer currently working as a Product Designer at Naver, the #1 tech company in South Korea. In the past I have worked for an edu-tech startup and a UX consulting agency. Here are a few things that describe me.<br/><br/><br/>
            </div>
            <div data-aos="fade-up">
              <span className="about-title">Experience Designing from Brief to Shipment</span><br/><br/>
              I have successfully shipped 5 digital products from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing applications from end-to-end, and gradually scaling design. These projects cover a variety of platforms, including the web, mobile and desktop.<br/><br/><br/>
            </div>
            <div data-aos="fade-up">
              <span className="about-title">Experience with Complex Interactive Products</span><br/><br/>
              My most recent work has been focused around professional video production tools for streamers and creators. Through this process, I have gained a good understanding of what it's like to work with intricate systems and technical constraints. I am capable of implementing complex video features such as quality optimization and timeline based editing.<br/><br/><br/>
            </div>
            <div data-aos="fade-up">
              <span className="about-title">Qualified in Programming</span><br/><br/>
              I am also qualified in programming; having received my Front End Developer Nanodegree from Udacity in 2018. I am capable of creating prototypes with web based technologies such as HTML, CSS, and Javascript, and my knowledge of technical limitations and possibilities lead to strong designer-developer relationships.<br/><br/><br/>
              Feel free to contact me for any inquiries about my portfolio and work opportunities!
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
