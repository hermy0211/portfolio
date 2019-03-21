import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/prismvideo-img02.png';
import img01 from '../img/prismlayout-img01.png';
import img02 from '../img/prismlayout-img02.png';
import img03 from '../img/prismlayout-img03.png';
import img04 from '../img/prismlayout-img04.png';
import img05 from '../img/prismlayout-img05.png';
import img06 from '../img/prismlayout-img06.png';
import img07 from '../img/prismlayout-img07.png';
import img08 from '../img/prismlayout-img08.png';

class PrismLayout extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  toggleConcepts = (index) => {
    let conceptTitles = document.querySelectorAll(".concept-title");
    let conceptA = document.querySelectorAll(".concept-a");
    let conceptB = document.querySelectorAll(".concept-b");
    let conceptC = document.querySelectorAll(".concept-c");

    for (let title of conceptTitles) {
      title.classList.remove("inactive");
      title.classList.remove("active");
      title.classList.add("inactive");
    }

    conceptTitles[index].classList.add("active");

    if (index === 0) {
      for (let concept of conceptA) {
        concept.classList.add("display");
      }
      for (let concept of conceptB) {
        concept.classList.remove("display");
      }
      for (let concept of conceptC) {
        concept.classList.remove("display");
      }
    } else if (index === 1) {
      for (let concept of conceptA) {
        concept.classList.remove("display");
      }
      for (let concept of conceptB) {
        concept.classList.add("display");
      }
      for (let concept of conceptC) {
        concept.classList.remove("display");
      }
    } else {
      for (let concept of conceptA) {
        concept.classList.remove("display");
      }
      for (let concept of conceptB) {
        concept.classList.remove("display");
      }
      for (let concept of conceptC) {
        concept.classList.add("display");
      }
    }
  }

  toggleSolutions = (index) => {
    let solutionTitles = document.querySelectorAll(".solution-title");
    let solutionA = document.querySelector(".tobe");
    let solutionB = document.querySelector(".asis");

    for (let title of solutionTitles) {
      title.classList.remove("inactive");
      title.classList.remove("active");
    }

    solutionTitles[index].classList.add("active");

    if (index === 0) {
      solutionA.classList.add("display");
      solutionB.classList.remove("display");
    } else {
      solutionA.classList.remove("display");
      solutionB.classList.add("display");
    }
  }

  render() {
    return (
      <section className="project-content prismlayout">
        <div className="cover">
          <ProjectNav
            logoColor="#E0E0E0"
            menuColor="#E0E0E0"
            logo={this.state.logoImage}
            title={["PRISM Live Studio", <br/>, "Layout Redesign"]}
            domain="PC Application"
            roles="UX: Sun Lee, Anne Lee"
            rolesTwo="UI: Youngok Choi, Goeun Han"
            date="2018.04 - 2018.09"
            firm="NAVER Corp."
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="content-title white" data-aos="fade-up">Project Summary</div>
          <div className="content end white" data-aos="fade-up">In this project, I redesigned the core layout of the app to better scale for future implementations. I defined the problem space, created high fidelity concept prototypes, developed the concepts and implemented them. Throughout the process, I was careful to balance the usability, business goals and technical constraints, and the end result was proved cohesive through the feedback of many users.</div>
        </div>
        <div className="background">
          <div className="content-title" data-aos="fade-up">PRISM Live Studio PC,<br/>The Live Broadcasting Software for Beginners</div>
          <div className="content end" data-aos="fade-up">PRISM Live Studio is a live streaming app with which you can stream to major platforms such as YouTube, Twitch, and Facebook. It is available for both desktop and mobile, and provides many interactive features which helps the streamer create more engaging content.</div>
        </div>
        <div className="effects">
          <div className="content-title" data-aos="fade-up">Adding Mobile Camera Effects to the PC App</div>
          <div className="content middle" data-aos="fade-up">At the start of this project, the only effects the desktop application offered were color filters. Yet there were plans to expand the library to include the effects already provided within the mobile app, such as AR masks and text.</div>
          <div className="image-wrap" data-aos="fade-up"><img src={img02} alt="Mobile Camera Effects" className="image pc end"/></div>
          <img src={img08} alt="Mobile Camera Effects - Mobile" className="image mobile end" data-aos="fade-up"/>
        </div>
        <div className="limitations">
          <div className="content-title" data-aos="fade-up">The Need for a More Scalable Layout</div>
          <div className="content middle" data-aos="fade-up">Currently, the color filters were located on the bottom of the app. In order to add more effects to the PC app, a few things questions needed answering.</div>
          <iframe className="video" data-aos="fade-up" src="https://player.vimeo.com/video/320779251" frameBorder="0" allowFullScreen mozallowfullscreen="true" title="Original Flow"></iframe>
          <div className="content pc end" data-aos="fade-up"><span className="bullet">• Where would we place the other effects?</span><br/>
            First of all, where would we place the other effect categories? How would we present the effects so it would be easy to see which ones could be applied at a glance?<br/><br/>
            <span className="bullet">• Where would we place the effect controls?</span><br/>
            Some effects, like text, came with customization controls such as font, size, and text animations. Where would we place these features?
          </div>
          <div className="content mobile middle" data-aos="fade-up"><span className="bullet">• Where would we place the other effects?</span><br/>
            First of all, where would we place the other effect categories? How would we present the effects so it would be easy to see which ones could be applied at a glance?<br/><br/>
            <span className="bullet">• Where would we place the effect controls?</span><br/>
            Some effects, like text, came with customization controls such as font, size, and text animations. Where would we place these features?
          </div>
          <img src={img03} alt="Layout Limitations" className="image" data-aos="fade-up"/>
          <div className="content end" data-aos="fade-up">
            <span className="bullet">• Could we improve the hierarchy?</span><br/>
            Although the scenes and filters were located in the same panel, they were associated with different parts of the screen. Scenes had to do with the whole screen, while filters were applied to the sub-items of the screen. Was there a way to make this relationship easier to understand?
          </div>
        </div>
        <div className="challenge">
          <div className="content-title white" data-aos="fade-up">Design Challenge</div>
          <div className="content end white" data-aos="fade-up">How might we create a layout that is scalable and intuitive to use?</div>
        </div>
        <div className="effects">
          <div className="content-title" data-aos="fade-up">Exploring Different Placements of the Effects Panel</div>
          <div className="content middle" data-aos="fade-up">During the first few design iterations, I explored various layouts; trying to find the best place to place the various effect options and controls.</div>
          <img src={img04} alt="Concept Images" className="image" data-aos="fade-up"/>
          <div className="content end" data-aos="fade-up">Although we only had plans to provide color filters and text at the time, I went ahead and created variations for two more types of effects (AR masks and beauty filters) for each concept. This made sure that each layout was scalable for a wider library of effects.</div>
        </div>
        <div className="concepts">
          <div className="content-title" data-aos="fade-up">
            <div className="concept-title active" onClick={()=>this.toggleConcepts(0)}>Concept A</div>
            <div className="concept-title inactive" onClick={()=>this.toggleConcepts(1)}>Concept B</div>
            <div className="concept-title inactive" onClick={()=>this.toggleConcepts(2)}>Concept C</div>
          </div>
          <div className="content middle concept-a display" data-aos="fade-up">For Concept A, I tried preserving the existing usability as best as I could. I created a layout in which a small toolbar menu would pop up when a source was clicked, that showed the various effects available at hand.</div>
          <iframe data-aos="fade-up" className="video concept-a display" src="https://player.vimeo.com/video/320780689" frameBorder="0" allowFullScreen mozallowfullscreen="true" title="Concept A"></iframe>
          <div className="proscons concept-a display" data-aos="fade-up">
            <div className="proscons-pros">
              <div className="proscons-title">PROS</div>
              <div className="proscons-content">This seemed like the obvious answer at first, as users would be able to adjust to the changes quickly. It was also a method used by Lightstream, a major player in this area.</div>
            </div>
            <div className="proscons-cons">
              <div className="proscons-title">CONS</div>
              <div className="proscons-content">However, the current structure did not make it possible to add any type of control above the screen area. Also, this concept was not scalable for the growth of each effect category.</div>
            </div>
          </div>
          <div className="content middle concept-b" data-aos="fade-up">The general idea of Concept B was that you could click on each source to expose a layer in the sources panel that showed you the various effect options that you could use on that particular source.</div>
          <iframe className="video concept-b" src="https://player.vimeo.com/video/320781033" frameBorder="0" allowFullScreen mozallowfullscreen="true" title="Concept A"></iframe>
          <div className="proscons concept-b" data-aos="fade-up">
            <div className="proscons-pros">
              <div className="proscons-title">PROS</div>
              <div className="proscons-content">With this layout, it was much easier to understand the relationship between the sources and effects.</div>
            </div>
            <div className="proscons-cons">
              <div className="proscons-title">CONS</div>
              <div className="proscons-content">If one effect category expanded, the user would have no choice but to scroll down to access the other effects. Also, the panel hid the frequently used hide / show source button.</div>
            </div>
          </div>
          <div className="content middle concept-c" data-aos="fade-up">Finally, for Concept C, I tried moving the scenes panel to the left, and dedicating the bottom area to effects. Considering that the average user about 4 scenes at most, and up to 4 sources per scene, I was confident that the change would not affect the usability of the scenes and sources panels.</div>
          <iframe data-aos="fade-up" className="video concept-c" src="https://player.vimeo.com/video/320781164" frameBorder="0" allowFullScreen mozallowfullscreen="true" title="Concept A"></iframe>
          <div className="proscons concept-c" data-aos="fade-up">
            <div className="proscons-pros">
              <div className="proscons-title">PROS</div>
              <div className="proscons-content">Concept C was better than Concept B in that it did not harm the usability for any existing features. It was also easier with this layout to view all of the effect options at hand.</div>
            </div>
            <div className="proscons-cons">
              <div className="proscons-title">CONS</div>
              <div className="proscons-content">However, it seemed inefficient to have the effects menu open at all times, considering it was not a crucial part of streaming. The horizontal scroll also made it hard to align the controls.</div>
            </div>
          </div>
        </div>
        <div className="solution">
          <div className="content-title" data-aos="fade-up">The Final Solution</div>
          <div className="content middle" data-aos="fade-up">
            After comparing these three, my team and I decided to develop Concept C, as it did not lessen the usability for any of the exisiting controls, and had the best scalability for expansion of each effect library.<br/><br/>
            After many more iterations, I managed to solve the drawbacks C had had; such as :
          </div>
          <img src={img05} data-aos="fade-up" alt="Changed Solution" className="image"/>
          <div className="content middle" data-aos="fade-up">
            <span className="bullet">• Changing the orientation of the scroll</span><br/>
            <span className="bullet">• Allowing the user to weaken the panel’s presence while streaming by giving them a hide panel option</span>
          </div>
          <iframe data-aos="fade-up" className="video end" src="https://player.vimeo.com/video/320781912" frameBorder="0" allowFullScreen mozallowfullscreen="true" title="Concept A"></iframe>
        </div>
        <div className="compare">
          <div className="compare-title"  data-aos="fade-up">
            <div className="solution-title active" onClick={()=>this.toggleSolutions(0)}>To-Be</div>
            <div className="solution-title inactive" onClick={()=>this.toggleSolutions(1)}>As-Is</div>
          </div>
          <div className="image-wrap"><img src={img06} alt="To-Be" className="tobe display"/></div>
          <div className="image-wrap"><img src={img07} alt="As-Is" className="asis"/></div>
        </div>
        <div className="thanks">
          <div className="thanks-text">Thanks for watching!</div>
          <div className="link"><a href="http://prismlive.com/en_us/pcapp/" target="_blank" rel="noopener noreferrer">www.prismlive.com</a></div>
          <form action="http://prismlive.com/en_us/pcapp/" method="get" target="_blank" className="download">
            <button type="submit" className="download-button">DOWNLOAD APP</button>
          </form>
        </div>
        <div className="bottom-navigation">
          <Link to="/prismvideo" className="link link-inactive">PRISM Video Editing Redesign</Link>
          <Link to="/prismlayout" className="link link-active">PRISM Layout Redesign</Link>
          <Link to="/schole" className="link link-inactive">Scholé Website Renewal</Link>
          <Link to="/framer30" className="link link-inactive">30 Days of Framer X</Link>
        </div>
      </section>
    );
  }
}

export default PrismLayout;
