# Personal Portfolio

## Table of Contents

* [Introduction](#introduction)
* [Functionality](#functionality)
* [Run](#run)
* [Structure](#structure)


## Introduction

This is the repository for my design portfolio. I have created this portfolio from scratch with create-react-app and published it to Github Pages with a custom domain. A live demo can be viewed here [here](https://annelee.co).


## Functionality

All functionality has been built of March 14th, 2019. I have plans to add more micro-interactions and projects in the future, such as the following:

- Adding page transitions
- Adding parallax scrolling for mobile
- Adding focus styles and improving a11y


## Run

### Running in Development Mode

1. Open the terminal.
2. Clone the repository: `git clone https://github.com/hermy0211/portfolio.git`
3. Open the directory to which you have cloned the repository.
4. Install all project dependencies with `npm install`
5. Run `npm start` to start the development server
6. Open the following webpage : `http://localhost:3000`


## Structure
```bash
├── README.md - This file.
├── package.json # Npm package manager file
├── package-lock.json # Npm package manager file
├── yarn.lock
├── CNAME # File for custom domain
├── public
│   ├── favicon.png # Favicon image
│   ├── og.png # Og image
│   └── index.html # Basic HTML template
│   └── manifest.json # JSON file to store basic data
└── src
    ├── font # Folder for all webfonts
    │   └── ...
    ├── img # Icons for the app
    │   └── ...
    ├── projects # Javascript file for project detail pages
    │   ├── Framer.js # 30 Days of Framer X project
    │   ├── PrismLayout.js # PRISM Layout Redesign project
    │   ├── PrismVideo.js # PRISM Video Editing Redesign X project
    │   ├── Schole.js # Schole Website Renewal project
    │   └── ProjectNav.js # GNB navigations for project pages
    ├── App.css # Styles for the app
    ├── Responsive.css # Styles for responsiveness
    ├── Hamburgers.css # Styles for hamburger menu
    ├── index.css # Global styles
    ├── App.js # File with main functionality for the app
    ├── Main.js # Main page
    ├── About.js # About page
    ├── Articles.js # Articles page
    ├── Article.js # Article component for the Articles page
    ├── Project.js # Project component for the Main page
    ├── Footer.js # Footer component
    ├── registerServiceWorker.js # File to register service worker
    └── index.js # File used for DOM rendering
```
