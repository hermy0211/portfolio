import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img00 from '../img/framer-img00.png';
import img01 from '../img/framer-img01.png';
import img02 from '../img/framer-img02.png';
import img03 from '../img/framer-img03.gif';
import img04 from '../img/framer-img04.gif';
import img05 from '../img/framer-img05.gif';
import img06 from '../img/framer-img06.gif';
import img07 from '../img/framer-img07.gif';

class Framer extends Component {
  state = {
    logoImage: img00
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section className="project-content framer">
        <div className="cover">
          <ProjectNav
            logoColor="#80A9FF"
            menuColor="#80A9FF"
            logo={this.state.logoImage}
            title="30 Days of Framer X"
            domain="Interactive Prototypes"
            roles="UX/UI: Anne Lee"
            rolesTwo="Programming: Anne Lee"
            date="2018.10 - 2018.11"
            firm="Personal Project"
          />
          <img src={img01} alt="Cover" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="content-title">Project Summary</div>
          <div className="content featured">This project was featured by the Framer team.</div>
          <div className="content end">
            30 Days of Framer X is a personal prototyping project in which I coded 30 interactive prototypes within 30 days using Framer X and React. Through this project, I pushed the boundaries of the then early, undocumented tool despite the lack of resources. I shared my code and projects online, and it became a reference for others new to the program.
          </div>
        </div>
        <div className="mockups">
          <img src={img02} alt="Mockups" className="image"/>
        </div>
        <div className="challenge">
          <div className="content-title white">Design Challenge</div>
          <div className="content end white">How might we create interactive prototypes with React.js?</div>
        </div>
        <div className="reel">
          <div className="content-title">Project Reel</div>
          <iframe className="video end" src="https://player.vimeo.com/video/315153476" frameBorder="0" allowFullScreen mozallowfullscreen="true" title="Framer Project Reel"></iframe>
        </div>
        <div className="samples">
          <div className="samples-background">
            <div className="content-title">Prototype Samples</div>
            <div className="prototypes">
              <div className="prototype left">
                <div className="day-side pc">-- 03</div>
                <div className="copyright-side pc">© Anne Lee, 2018</div>
                <div className="details">
                  <div className="day">DAY 03</div>
                  <div className="title">Circular Menu Animation</div>
                  <div className="description pc">This is an example of a circular menu that you can tap in order to show the different menu options. When you tap on the button, the menu opens and the icons roll in. When you tap on an icon, the menu closes.</div>
                  <div className="description mobile">This is an example of a circular menu that you can tap in order to show the different menu options. When you tap, the menu opens and the icons roll in.</div>
                </div>
                <img src={img03} alt="Day 03 Prototype" className="image"/>
              </div>
              <div className="prototype right">
                <div className="day-side pc">-- 08</div>
                <div className="details">
                  <div className="day">DAY 08</div>
                  <div className="title">Flipping Card Animation</div>
                  <div className="description pc">
                    I decided to do something a bit more<br/>
                    design oriented for this day,<br/>
                    instead of focusing on complex code.<br/>
                    Here is an interaction for a vocabulary app.
                  </div>
                  <div className="description mobile">
                    I decided to do something a bit more design oriented for this day, instead of focusing on complex code. Here is an interaction for a vocabulary app.
                  </div>
                </div>
                <div className="copyright-side pc">© Anne Lee, 2018</div>
                <img src={img04} alt="Day 08 Prototype" className="image"/>
              </div>
              <div className="prototype left">
                <div className="day-side pc">-- 13</div>
                <div className="copyright-side pc">© Anne Lee, 2018</div>
                <div className="details">
                  <div className="day">DAY 13</div>
                  <div className="title">Dynamic Calendar Animation</div>
                  <div className="description pc">This prototype uses the newly introduced Page tool. Through this prototype, I learned that the Page tool is not just for card UI; it's incredibly helpful with creating sheet interactions too.</div>
                  <div className="description mobile">Through this prototype, I learned that the Page tool is not just for card UI; it's incredibly helpful with creating sheet interactions too, as demonstrated below.</div>
                </div>
                <img src={img05} alt="Day 13 Prototype" className="image"/>
              </div>
              <div className="prototype right">
                <div className="day-side pc">-- 16</div>
                <div className="details">
                  <div className="day">DAY 16</div>
                  <div className="title">Tap Menu Interaction</div>
                  <div className="description pc">
                    You can pass in an (event: Point) parameter<br/>
                    to the onTap event to access the x, y<br/>
                    coordinates of your mouse pointer.<br/>
                    Here's an example using that functionality.
                  </div>
                  <div className="description mobile">
                    You can pass in (event: Point)
                    to an onTap event to access the x, y
                    coordinates of your mouse.
                    Here's an example using that functionality.
                  </div>
                </div>
                <div className="copyright-side pc">© Anne Lee, 2018</div>
                <img src={img06} alt="Day 16 Prototype" className="image"/>
              </div>
              <div className="prototype left">
                <div className="day-side pc">-- 24</div>
                <div className="copyright-side pc">© Anne Lee, 2018</div>
                <div className="details">
                  <div className="day">DAY 24</div>
                  <div className="title">Dynamic Scroll Animation</div>
                  <div className="description pc">
                    onMove() comes in really handy when you're<br/>
                    trying to get the scroll event data from the<br/>
                    Scroll component. In this prototype, I'm<br/>
                    using the y coordinate of the scroll to<br/>
                    dynamically render the other components.
                  </div>
                  <div className="description mobile">
                    onMove() comes in really handy when getting scroll event data.
                    In this prototype, I'm using the y coordinate to
                    render the other components.
                  </div>
                </div>
                <img src={img07} alt="Day 24 Prototype" className="image"/>
              </div>
            </div>
          </div>
        </div>
        <div className="thanks">
          <div className="thanks-text">Thanks for watching!</div>
          <div className="link"><a href="https://hermy0211.github.io/framer30" target="_blank" rel="noopener noreferrer">hermy0211.github.io/framer30</a></div>
          <form action="https://hermy0211.github.io/framer30" method="get" target="_blank" className="download">
            <button type="submit" className="download-button">VIEW FULL PROJECT</button>
          </form>
        </div>
        <div className="bottom-navigation">
          <Link to="/prismvideo" className="link link-inactive">PRISM Video Editing Redesign</Link>
          <Link to="/prismlayout" className="link link-inactive">PRISM Layout Redesign</Link>
          <Link to="/schole" className="link link-inactive">Scholé Website Renewal</Link>
          <Link to="/framer30" className="link link-active">30 Days of Framer X</Link>
        </div>
      </section>
    );
  }
}

export default Framer;
