import React, { Component } from 'react';
import './App.css';
import behance from './img/behance-logo.png'
import linkedin from './img/linkedin-logo.png'
import medium from './img/medium-logo.png'
import email from './img/email-logo.png'

class Footer extends Component {
  state={
    behance: behance,
    linkedin: linkedin,
    medium: medium,
    email: email
  }

  render() {
    return (
      <div className="footer">
        <div className="footer-statement">
          Let's work together!
        </div>
        <div className="social-links">
          <div className="social">
            <a href="https://www.behance.net/designeranne" target="_blank" rel="noopener noreferrer">
              <img className="behance" src={this.state.behance} alt="Behance Logo"/>
            </a>
          </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/annesohyunlee/" target="_blank" rel="noopener noreferrer">
              <img className="linkedin" src={this.state.linkedin} alt="Linkedin Logo"/>
            </a>
          </div>
          <div className="social">
            <a href="https://medium.com/@annelee_22736" target="_blank" rel="noopener noreferrer">
              <img className="medium" src={this.state.medium} alt="Medium Logo"/>
            </a>
          </div>
          <div className="social-last">
            <a href="mailto:hermy0211@naver.com" target="_blank" rel="noopener noreferrer">
              <img className="email" src={this.state.email} alt="Email Logo"/>
            </a>
          </div>
        </div>
        <div className="footer-copyright">
          © 2019, Anne Lee
        </div>
      </div>
    );
  }
}

export default Footer;
