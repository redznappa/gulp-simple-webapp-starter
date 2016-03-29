# Gulp WebSite or Web App starter

### Inspired by CSS Tricks tutorial
[CSS tricks Gulp tutorial](https://css-tricks.com/gulp-for-beginners/)

Includes
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
To get you started you need Node.js and Gulp installed, then you can simply clone the gulp-simple-webapp-starter repository and install the dependencies:

#### Prerequisite

* Node.js
* Gulp

#### Node.js

Download the relevant node installer from the link below.

[Node.js Download link](https://nodejs.org/en/download/)


#### Gulp
Install Gulp, you may need to add 'sudo' at the start.
```
$npm install gulp -g

```
With node and Gulp installed, open up your project folder from the command line. e.g. if your project folder is in your 'Sites' folder 'myWebApp' in the command line you would do something like this

```
Mikes-iMac:~ mike$ cd sites/myWebApp

```
To clone the git repo use the following command, also from your project folder in the command link
```

$git clone https://github.com/redznappa/gulp-simple-webapp-starter.git .

```


### Dependencies

#### Run npm install
Now in your project folder from the command line tool, run the following command. This will install all the dependencies for you. This is everything in the package.json file.  Sit back for a while as it will take a minute or two.

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
