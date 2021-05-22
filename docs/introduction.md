---
title: Introduction to I-Stem solution technical components
id: introduction
---

## I-Stem Services Features

I-Stem services currently provides solution to problem of: 

- document inaccessibility for blind /visually impaired: Images containing text, pdfs containing mathematics and text as images etc are inaccessible to screen readers
- Audio/Video inaccessibility: The audio content is inaccessible for hearing impaired people. Similarly text displayed on screen during video is inaccessible to visually impaired. I-Stem services provides the following solution 
   * For hearing impaired people: Ability to get captions from the audio/video in srt/txt format along with custom domain captioning.
   * For visually impaired people: Ability to get textual content displayed in a video.

## Solution architecture

   The I-Stem services majorly consist of three components each residing in its separate repo. (perhaps the name are too general :) ).

### [Science repo](https://github.com/I-Stem/science)

This repo is in python and contains all the AI models that I-Stem has developed to solve the above inaccessibility problems. The API documentation of the repo is available [here](https://science.readthedocs.io). You could browse a list of good-first issues [here](https://github.com/I-Stem/science/issues) to start contributing to the solution. See the [README](https://github.com/I-Stem/science) of the repo to know how to run the server in your local. The docstring within python modules are good way to start digging into the project components.

### Backend repo

This repo is written in express.js/typescript and contains the logic for onboarding a user onto the platform, driving document and audio/video accessibility workflow, sending notifications to users for their request completion and so on. The API documentation for the repo is available [here](https://i-stem.github.io/backend). To get-started with local installation of server have a look at the [README](https://github.com/I-Stem/backend) of the project. 

### Frontend repo

   The repo is written in next.js/typescript and contains all the accessible UI components that I-Stem web app uses. For a local setup of repo please see the latest [README](https://github.com/I-Stem/frontend) here.

## Contribution Guidelines and Code of Conduct

**If you want to contribute to I-Stem projects, be sure to review the
[contribution guidelines](contributing/index). This project adheres to Contributor Covenant's
[code of conduct](contributing/code_of_conduct). By participating, you are expected to
uphold this code.**

