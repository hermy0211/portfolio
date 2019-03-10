import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Project extends Component {
  state={
    color: this.props.color
  }

  render() {
    return (
      <div className="project">
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
