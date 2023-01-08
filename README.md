[![License](https://img.shields.io/badge/license-Apache%202.0-green.svg)](https://github.com/devabhixda/famtube/blob/master/LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](https://github.com/devabhixda/famtube/pulls)
[![Made with React](https://img.shields.io/badge/Made_with-React-blue.svg)](https://reactjs.org/)
[![Material UI](https://img.shields.io/badge/Material-UI-blue.svg)](https://material-ui.com/)
[![NodeJS](https://img.shields.io/badge/node-latest-blue)](https://nodejs.org/en/)

# FamTube
<p align="center"> <img width="250" src="https://lh3.googleusercontent.com/mTrQbZLiob7iQj3dCC71WsjYKK35wk2p-3ntrbEllJ2mi1RwPdXXQlMWPNsTunHUhZIO_ja3Iz_3tF4hpBwZIWDNpxbY3AhNI7LjnGSsPFaM5B6Z27RoQf58ntcgJRLSuMLp9NvXzNwuh8H6CcrrPkbzn7s2_ELqqn57ilKWcriUwGQTusgYszbFKOqO8KUz76OnzpPOZEwk8RksIROVN2KrIkOSeYB-RZCfvNOuKainrTMGhXyjw0R76i6qbmXYIVhAZ2_SkjO7uW31uy4F9YCrllliZnR38U64iBnxfaGLj338-ydswePl0gYomZGFizFy5zLKkTM0DU39Ve5zrYMhXQfCfDRpMUlYLB_UxS8WramfhQI1atr177FIRpDT4Jz7JCADh8PaedAss_8AmXXDdmDesjlTeiB1PnwtqG1wdfIesWzd1lSvdRsNC9DtVvtMaddzDQNwcdYEWYpm6WuDrzoVGD5wEjZI2MYU1ViXHYvPIYx7DvugEuLZprMfpEyhwY-3pAE0QMv1AN23czSbbssIwCCFSmP8l3m5Y9FFePiZVxedgkDgO1S0zLzUIaLa7pN0t_vnfeGBgOVXLFBaXuBywJXJBms-dtzS5IEr2Ae0zqwmZ_66ta5F-TcZf5PV07Us9dh9Y41ly2rmbr0qc-JtRcTXu8RSeyzp8hYNKVmu58BcdHk1JHnBLfqYS2n8ttjcRRCNTBYOj5JtAH1vSzkJ_g7cXRpjDtHiidDkYt23ZWmw0jX19YzjbRz_FAC9zcChZtPLE4USCkjDDysmKKylKEVgjf0QJ-7h7EbLI7mGpukXx37eOuXrT3sCiHTIid_1HwfeKbkyxTv5zjGFPL1p4GPNNQnrI5AROfeBie3vR7XoZ2HOeT3LRfTcTjINKD5s59Sdaz-0KyzefiVl-9LIWrJkRVUMfJt8D4EjWT8pcDOZ8IBX7pdTiaoWF4LRHyQgTW4xoKluszE=w759-h194-no?authuser=0">  </p>

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
