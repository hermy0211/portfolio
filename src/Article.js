import React, { Component } from 'react';
import './App.css';
import './Responsive.css';

class Article extends Component {
  hoverEvent = (index) => {
    let imageList = document.querySelectorAll(".article-image-size");
    imageList[index].classList.add("change-scale");
  }

  cancelHover = (index) => {
    let imageList = document.querySelectorAll(".article-image-size");
    imageList[index].classList.remove("change-scale");
  }

  render() {
    return (
      <div data-aos={this.props.aos} className="article" onMouseOver={()=>this.hoverEvent(this.props.index)} onMouseOut={()=>this.cancelHover(this.props.index)}>
        <a href={this.props.link} target="_blank" rel="noopener noreferrer">
          <div className={this.props.class}>
            <div className="article-image">
              <img src={this.props.image} className="article-image-size" alt="Article Thumbnail"/>
            </div>
            <div className="article-contents">
              <div className="article-title">
                {this.props.title}
              </div>
              <div className="article-subtitle">
                {this.props.subtitle}
              </div>
              <div className={this.props.dateClass}>
                {this.props.date}
              </div>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Article;
