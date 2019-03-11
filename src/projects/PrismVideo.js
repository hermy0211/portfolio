import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ProjectNav from './ProjectNav.js';
import '../App.css';
import '../Responsive.css';
import '../Hamburgers.css';
import img01 from '../img/prismvideo-img01.png';
import img03 from '../img/prismvideo-img03.png';
import img04 from '../img/prismvideo-img04.png';
import img05 from '../img/prismvideo-img05.png';
import img06 from '../img/prismvideo-img06.png';
import img07 from '../img/prismvideo-img07.png';
import img08 from '../img/prismvideo-img08.png';
import img09 from '../img/prismvideo-img09.png';

class PrismVideo extends Component {
  render() {
    return (
      <section className="project-content prismvideo">
        <div className="cover">
          <ProjectNav
            logoColor="#E0E0E0"
            menuColor="#E0E0E0"
            title={["PRISM Live Studio", <br/>, "Video Editing Redesign"]}
            domain="Mobile Application"
            roles="User Research, UX Design, Project Management"
            date="2018.07 - 2018.09"
            firm="NAVER Corp."
          />
          <img src={img01} alt="Cover Image" className="cover-image"/>
        </div>
        <div className="summary">
          <div className="content-title white">Project Summary</div>
          <div className="content end white">In this project, I enhanced the usability of various video editing features, optimizing them for a larger user pool. I conducted interviews of experienced video creators and improved the app based on their feedback. I was fully responsible for all of the screens shown in this case study, and worked alongside visual designers and developers to release the improvements.</div>
        </div>
        <div className="background">
          <div className="content-title">PRISM Live Studio Mobile,<br/>A Video Creator App with Fun Effects</div>
          <div className="content middle">PRISM Live Studio is a video creator app with which you can create live streams or edit videos. In the video editing mode, you can create unique content by applying various effects to your video such as stickers, filters, and captions.</div>
          <iframe className="video end" src="https://player.vimeo.com/video/321151842" frameborder="0" allowFullScreen mozallowfullscreen webkitAllowFullScreen></iframe>
        </div>
        <div className="target">
          <div className="content-title">Expanding Target Users to Vlog Creators</div>
          <div className="content middle">After the initial launch of the video editing features, we validated the usability of the app through interviews of video creators. The interviewees could be classified into two groups; short clips creators and vlog creators. Through the interview, we learned that the latter found the current usability insufficient for their needs, and identified opportunities to include these users in our target group.</div>
          <img src={img03} alt="Vlogs vs Short Clips" className="image end"/>
        </div>
        <div className="challenge">
          <div className="content-title white">Design Challenge</div>
          <div className="content end white">How might we improve the usability of the app for vlog creators?</div>
        </div>
        <div className="improvement">
          <div className="content-title">The Need to Provide Detailed Editing Features</div>
          <div className="content end">Many of the vlog creators we interviewed shared the following characteristics :<br/><br/>
          • They frequently needed to go back and modify effects that they had placed earlier.<br/>
          • They wished to place effects precisely at a certain timestamp.<br/>
          • They preferred clean layouts and small graphics that helped you focus on the main content, rather than bold effects and transitions.<br/><br/>
          We learned that we needed to provide a more delicate editing experience for these users, and added flows that allowed the re-modification and fine tuning of effects.</div>
        </div>
        <div className="redesign">
          <div className="redesign-background">
            <div className="content-title">Timeline Adjustment</div>
            <div className="quote"><img src={img04} alt="Quotation Mark" className="quote-image"/><span className="quote-text">I wanted to place this filter at the start of the second clip.</span></div>
            <div className="content middle">Prior to the interview, you could not adjust the timeline of effects once they had been applied. We made it possible to adjust the start and end points of any effect.</div>
            <img src={img05} alt="Timeline Example" className="image end"/>
          </div>
          <div className="redesign-background">
            <div className="content-title">Text Modification</div>
            <div className="quote"><img src={img04} alt="Quotation Mark" className="quote-image"/><span className="quote-text">When I realized that some of the text was covering the scene, I had no way to go back and make it shorter.</span></div>
            <div className="content middle">The text feature was very important to vloggers, as they used it to add subtitles to their videos. We noticed that a lot of users wanted to go back and modify earlier subtitles, so the story flowed nicely together as a whole. We did not support the re-editing of text at the time, so we devised a flow that made this possible.</div>
            <img src={img06} alt="Text Example" className="image end"/>
          </div>
          <div className="redesign-background">
            <div className="content-title">Improved Volume Controls</div>
            <div className="quote"><img src={img04} alt="Quotation Mark" className="quote-image"/><span className="quote-text">I usually mute the scenes where I'm talking with my friends, and fast forward through them.</span></div>
            <div className="content middle">Most vlogs use background music. When using music, it is important that the music is balanced out with the original audio. We made it easier to adjust the volume levels for each clip, and added mute functionality.</div>
            <img src={img07} alt="Volume Example" className="image end"/>
          </div>
          <div className="redesign-background">
            <div className="content-title">Background Color Options</div>
            <div className="quote"><img src={img04} alt="Quotation Mark" className="quote-image"/><span className="quote-text">I usually use a simple background for my horizontal videos, like black or white.</span></div>
            <div className="content middle">In the previous version, any empty space was defaulted to a larger, blurred version of the video. However, vlog creators found the effect distracting, as it prevented the viewers from focusing on the content. We learned that we needed solid background options, and created a palette of 25 colors including black and white.</div>
            <img src={img08} alt="Color Example" className="image end"/>
          </div>
          <div className="redesign-background-last">
            <div className="content-title">Easier Uploading to Platforms</div>
            <div className="content middle">Instead of using the system share layer (which included irrelevant options such as memo pads and storage apps), we created a custom share menu that narrowed the options down into a selection of SNS platforms that users were more likely to upload to. We also added App2App sharing for a quicker and smoother sharing experience.</div>
            <img src={img09} alt="Share Example" className="image end"/>
          </div>
        </div>
        <div className="thanks">
          <div className="thanks-text">Thanks for watching!</div>
          <div className="link"><a href="http://prismlive.com/en_us/mapp/" target="_blank" rel="noopener noreferrer">www.prismlive.com</a></div>
          <form action="http://prismlive.com/en_us/mapp/" method="get" target="_blank" className="download">
            <button type="submit" className="download-button">DOWNLOAD APP</button>
          </form>
        </div>
        <div className="bottom-navigation">
          <Link to="/prismvideo" class="link link-active">PRISM Video Editing Redesign</Link>
          <Link to="/prismlayout" class="link link-inactive">PRISM Layout Redesign</Link>
          <Link to="/schole" class="link link-inactive">Scholé Website Renewal</Link>
          <Link to="/framer30" class="link link-inactive">30 Days of Framer X</Link>
        </div>
      </section>
    );
  }
}

export default PrismVideo;
