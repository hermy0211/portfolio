import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';

class Project extends Component {
  state={
    color: this.props.color
  }

  hoverEvent = (index) => {
    let hmwList = document.querySelectorAll(".hmw");
    let imageList = document.querySelectorAll(".project-image-size");
    let titleList = document.querySelectorAll(".project-title");
    let categoryList = document.querySelectorAll(".project-category");

    hmwList[index].classList.add("show-hmw");
    imageList[index].classList.add("change-scale");

    titleList[index].classList.add("change-color-"+index);
    categoryList[index].classList.add("change-color-"+index);
  }

  cancelHover = (index) => {
    let hmwList = document.querySelectorAll(".hmw");
    let imageList = document.querySelectorAll(".project-image-size");
    let titleList = document.querySelectorAll(".project-title");
    let categoryList = document.querySelectorAll(".project-category");

    hmwList[index].classList.remove("show-hmw");
    imageList[index].classList.remove("change-scale");
    titleList[index].classList.remove("change-color-"+index);
    categoryList[index].classList.remove("change-color-"+index);
  }

  render() {
    return (
      <div data-aos={this.props.aos} className="project" onMouseOver={()=>this.hoverEvent(this.props.index)} onMouseOut={()=>this.cancelHover(this.props.index)}>
        <Link to={this.props.link}>
          <div className="hmw">
            <div className="hmw-background" style={{backgroundColor: this.state.color}}>{this.props.hmw}</div>
          </div>
          <div className={this.props.class}>
            <div className="project-image">
              <img src={this.props.image} className="project-image-size" alt="Project Thumbnail"/>
            </div>
            <div className="project-title">
              {this.props.title}
            </div>
            <div className="project-category">
              {this.props.category}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Project;
