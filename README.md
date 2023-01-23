[![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)](https://github.com/devabhixda/famtube/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/devabhixda/famtube/pulls)
[![Made with React](https://img.shields.io/badge/Made_with-React-blue.svg)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material-UI-blue.svg)](https://material-ui.com/)
[![NodeJS](https://img.shields.io/badge/node-latest-blue)](https://nodejs.org/en/)

# FamTube
<p align="center"> <img width="250" src="https://github.com/devabhixda/FamTube/blob/master/frontend/src/resources/famtube.png?raw=true">  </p>

FamTube is created with ReactJS and Node, built to cache content related to your favourite content as soon as it gets uploaded so you don't miss have FOMO!

## Architecture

FamTube contains 2 parts:

Name | Description | Language | Source code
----|------|----|----
Frontend | Web frontend UI | Javascript + React + MaterialUI | https://github.com/devabhixda/famtube/tree/master/frontend
Backend | RESTful API backend | NodeJS | https://github.com/devabhixda/famtube/tree/master/backend


## Requirements 
* Any operating system (e.g. Linux, Windows, MacOS X)
* A little knowledge of HTML, CSS and JS. Don't worry if you are new to it, we are here to help.
* Your favourite IDE (e.g. VSCode, Atom, etc)
* Docker

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
* Install Docker
* Add youtube api keys in https://github.com/devabhixda/famtube/blob/master/backend/constants/keys.js 
* Run `docker-compose build` to build the images
* Run `docker-compose up` to start the containers
* You can now use the application at http://localhost:3000

## Features

* Continuous fetching of videos in background
* Automatic API key rotation
* Friendly UI 
* Fuzzy Search

## Authors
 
* **Abhi Jain**

## License

Licensed under the Apache License, Version 2.0

## Contributing
Feel free to contribute to this project, we can work together to build a better community. Designers, Developers, Testers, Writers and everyone alike are welcomed to be a part of the project.
