import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img02 from '../img/prismvideo-img02.png';

class ProjectNav extends Component {
  state = {
    logoColor: this.props.logoColor,
    menuColor: this.props.menuColor
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
      <div className="header-project">
        <div className="navigation">
          <div className="anne" style={{color: this.state.logoColor}}><Link to="/">Anne Lee</Link></div>
          <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <div className="overlay mobile">
            <div className="submenus">
              <div className="work-mobile"><Link to="/">Work</Link></div>
              <div className="articles-mobile"><Link to="/articles">Articles</Link></div>
              <div className="about-mobile"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="navigation-sub">
            <div className="work" style={{color: this.state.menuColor}}><Link to="/">Work</Link></div>
            <div className="articles" style={{color: this.state.menuColor}}><Link to="/articles">Articles</Link></div>
            <div className="about" style={{color: this.state.menuColor}}><Link to="/about">About</Link></div>
          </div>
        </div>
        <div className="project-info">
          <img src={img02} alt="Prism Logo" className="logo-image"/>
          <div className="project-title">{this.props.title}</div>
          <div className="project-domain">{this.props.domain}</div>
          <div className="project-details-top">
            <div className="project-details-title">Roles</div><div className="project-details-text">{this.props.roles}</div>
          </div>
          <div className="project-details">
            <div className="project-details-title">Date</div><div className="project-details-text">{this.props.date}</div>
          </div>
          <div className="project-details">
            <div className="project-details-title">Firm</div><div className="project-details-text">{this.props.firm}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectNav;
