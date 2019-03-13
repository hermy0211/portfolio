import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Article from './Article.js';
import articleone from './img/article-tn-01.png';
import articletwo from './img/article-tn-02.png';
import articlethree from './img/article-tn-03.png';
import articlefour from './img/article-tn-04.png';
import articlefive from './img/article-tn-05.png';
import articlesix from './img/article-tn-06.png';

class Articles extends Component {
  state = {
    articleOneImage: articleone,
    articleTwoImage: articletwo,
    articleThreeImage: articlethree,
    articleFourImage: articlefour,
    articleFiveImage: articlefive,
    articleSixImage: articlesix,
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
            <div className="anne active"><Link to="/">Anne Lee</Link></div>
            <button className="hamburger hamburger--spin mobile" type="button" onClick={this.toggleMenu}>
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            <div className="overlay mobile">
              <div className="submenus">
                <div className="work-mobile inactive"><Link to="/">Work</Link></div>
                <div className="articles-mobile active"><Link to="/articles">Articles</Link></div>
                <div className="about-mobile inactive"><Link to="/about">About</Link></div>
              </div>
            </div>
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
        <section className="articles">
          <div className="left">
            <p className="articles-intro">
              I write insightful articles<br/>that <span className="bold">up-levels the design community</span>.<br/>I share <span className="bold">unique findings</span> from my work,<br/>and introduce <span className="bold">novel trends</span> and <span className="bold">ideas</span>.
            </p>
            <Article
              link="https://medium.com/@annelee_22736/ux-world-2017-fall-conference-summary-3399e847ce52"
              class="article-default"
              image={this.state.articleOneImage}
              title={["UX World 2017 Fall", <br/>, "Conference Summary"]}
              subtitle="Insights from Top Tech Companies"
              date="November 22nd, 2017"
              dateClass="article-date two-line"
              index="0"
            />
            <Article
              link="https://uxplanet.org/designing-for-pc-apps-4554d8a0aa85"
              class="article-default"
              image={this.state.articleThreeImage}
              title="Designing for PC Apps"
              subtitle="4 Concepts for PC App Design"
              date="July 14th, 2018"
              dateClass="article-date one-line"
              index="1"
            />
            <Article
              link="https://uxplanet.org/apple-clips-ux-review-29878dc83db3"
              class="article-last"
              image={this.state.articleFiveImage}
              title="Apple Clips UX Review"
              subtitle="Updates from November 2017"
              date="November 24th, 2017"
              dateClass="article-date one-line"
              index="2"
            />
          </div>
          <div className="right">
            <Article
              link="https://uxplanet.org/how-learning-to-code-impacted-my-daily-job-as-a-designer-d0b9583927ab"
              class="article-default"
              image={this.state.articleTwoImage}
              title={["How Learning to Code Impacted", <br/>, "My Daily Job as a Designer"]}
              subtitle="Going Beyond the Communication"
              date="September 9th, 2018"
              dateClass="article-date two-line"
              index="3"
            />
            <Article
              link="https://uxplanet.org/30-days-of-framer-x-final-week-d5d1f923cbc1"
              class="article-default"
              image={this.state.articleFourImage}
              title="30 Days of Framer X : Final Week"
              subtitle="30 Prototypes in 30 Days"
              date="November 16th, 2018"
              dateClass="article-date one-line"
              index="4"
            />
            <Article
              link="https://uxplanet.org/how-facebook-designs-for-vr-environments-d566127c11fe"
              class="article-default"
              image={this.state.articleSixImage}
              title={["How Facebook Designs for", <br/>, "VR Environments"]}
              subtitle="A Look into the Oculus Design"
              date="December 3rd, 2017"
              dateClass="article-date two-line"
              index="5"
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Articles;
