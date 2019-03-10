import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import profile from "./img/profile.jpg";

class About extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <div className="navigation">
            <div className="anne active"><Link to="/">Anne Lee</Link></div>
            <div className="navigation-sub">
              <div className="work inactive"><Link to="/">Work</Link></div>
              <div className="articles inactive"><Link to="/articles">Articles</Link></div>
              <div className="about active"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Product Designer
          </div>
          <div className="speciality">
            UX UI / Front-End Dev
          </div>
        </section>
        <section className="about">
          <img src={profile} alt="Profile Image" className="about-image"/>
          <div className="about-content">
          Hi, my name is Anne.<br/><br/>
          I am a hybrid UX / UI designer currently working as a Product Designer at Naver, the #1 tech company in South Korea. In the past I have worked for an edu-tech startup and a UX consulting agency. Here are a few things that describe me.<br/><br/><br/>
          <span class="about-title">Experience with Designing Full Systems</span><br/><br/>
          I have successfully shipped 5 digital products from scratch up to date. Through this experience, I have gained expertise in early stage conceptualization, designing systems from end-to-end, and gradually scaling design.<br/><br/><br/>
          <span class="about-title">Expertise in Video Technology</span><br/><br/>
          My most recent work has been focused around video production tools for streamers and creators. I am an expert on video platform trends, and possess a good understanding of advanced video technologies. I am capable of implementing complex video features such as quality optimization and timeline based editing.<br/><br/><br/>
          <span class="about-title">Qualified in Programming</span><br/><br/>
          I am also qualified in programming; having received my Front End Developer Nanodegree from Udacity in 2018. I am capable of creating prototypes with web based technologies such as HTML, CSS, and Javascript, and my knowledge of technical limitations and possibilities lead to strong designer-developer relationships.<br/><br/><br/>
          Feel free to contact me for any inquiries about my portfolio and work opportunities!
          </div>
        </section>
      </div>
    );
  }
}

export default About;
