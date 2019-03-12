import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import './Responsive.css';
import Main from './Main.js';
import PrismVideo from './projects/PrismVideo.js';
import PrismLayout from './projects/PrismLayout.js';
import Articles from './Articles.js';
import About from './About.js';
import Footer from './Footer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route
          exact path="/"
          component={Main}
        />
        <Route
          path="/prismvideo"
          component={PrismVideo}
        />
        <Route
          path="/prismlayout"
          component={PrismLayout}
        />
        <Route
          path="/articles"
          component={Articles}
        />
        <Route
          path="/about"
          component={About}
        />
        <Footer/>
      </div>
    );
  }
}

export default App;
