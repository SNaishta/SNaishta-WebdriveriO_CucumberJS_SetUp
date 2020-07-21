### WebdriverIO-v5 boilerplate code with Cucumber BDD

Scripting platform: Mac os

This repository contains a collection of sample webdriverIO-v5 (Selenium - Node.js/JavaScript) projects and libraries that demonstrate how to use the tool and develop automation script using the Cucumber (v 5.x) BDD framework. 
It support ES5 to ES8 (via babel-register).  It generates Allure and  cucumber reporters.

### Installation

This project is tested on ***Node v13.12.0***. While earlier versions of node may be compatible, they have not been tested or verified.

`JDK 1.8:` Install JDK 1.8+ and make sure class path is set properly. JAVA is require to start `Selenium Server`.

`Node.JS:` Install  from the site - https://nodejs.org/en/

Once installation is done - open terminal (MAC OSX) or command prompt (for windows OS) and verify node and npm versions. 
The commands should print the installed versions
        node --version
        npm --version

###
Important Step : Now navigate to the framework's package.json folder and run `npm install` to grab all dependencies.
### 

### Selenium ###
  To run your tests you need to have the selenium server up and running ,
  In the current project wdio.conf.js file has all the set up needed to start it automatically 

### Run Some Sample Tests
To execute the entire test suite in local development, Please use the command 'npm test'

### Config Files
WebdriverIO uses configuration files to setup and execute tests in specific ways.  
The configuration is fully customizable, and different functions can be invoked before, during and after each test or test suite.  
Config files can be found in the `/test/config/` directory and all end with `*.conf.js`. 

###
Folder structure of the framework 
src/features - This folder contains all .feature files.
src/stepDefinitions - This folder contains the required implementation files in the form of given.js, when.js, and then.js.
test/config - This folder contains wdio.config.js.
test/reports - This folder contains index.html for the generated reports.

Tests are written in the Cucumber framework using the Gherkin Syntax. 

##### Allure Report
Add allure to the reporters array in config file and define the output directory of the allure reports.

##### multiple-cucumber-html-reporter
Post run, it will create a folder .tmp which will contain the required JSON file to be used in generation of the report. 

### Common utilities
Can be found under src/pages/common
