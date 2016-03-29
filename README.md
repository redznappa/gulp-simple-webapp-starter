# Gulp WebSite or Web App starter

### Inspired by CSS Tricks tutorial
[CSS tricks Gulp tutorial](https://css-tricks.com/gulp-for-beginners/)

Include
* browserSync web server - This will reload your browser upon saves to  .css .html .js files.
Any connected devices browser will also reload.
* concatenate js, css files attached to your HTML files.
* minifies JS & CSS files.
* SASS included, or the gulp-sass version - some defaults and starters also provided.
* Image optimisation - although I need to tweak this as not working correctly at the moment
* Seperate development and production folders

More to be added such as:
 Auto prefixer, compiling only changed files, auto generate critical inline CSS/scripts to improve Google page speed marks

---

## Get Started
To get you started you can simply clone the gulp-simple-webapp-starter repository and install the dependencies:

Dependencies

* Node.js
* Gulp
* Run npm install

#### Node.js

Download the relevant node installer from the link below.

[Node.js Download link](https://nodejs.org/en/download/)


#### Gulp
Install Gulp
```
$npm install gulp -g

```
With node and Gulp installed, open up your project folder from the command line. e.g. if your project folder is in your 'Sites' folder 'myWebApp' in the command line you would do something like this

```
Mikes-iMac:~ mike$ cd sites/myWebApp

```
#### Run npm install
Now in your project folder run the command

```
$npm install

```
----

# Run the application

From the command line within your project folder run the following gulp commands.

This will start a development build of you web app

```
gulp

```
This will create a production ready version of your web app, it will also spin up a server.

```
gulp build

```
