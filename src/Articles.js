import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';

class Articles extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <div className="navigation">
            <div className="anne active"><Link to="/">Anne Lee</Link></div>
            <div className="navigation-sub">
              <div className="work inactive"><Link to="/">Work</Link></div>
              <div className="articles active"><Link to="/articles">Articles</Link></div>
              <div className="about inactive"><Link to="/about">About</Link></div>
            </div>
          </div>
          <div className="designer">
            Product Designer
          </div>
          <div className="speciality">
            UX UI / Front-End Dev
          </div>
        </section>
      </div>
    );
  }
}

export default Articles;
