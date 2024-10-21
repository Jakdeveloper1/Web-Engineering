
// Open command and clone the project
//1. Press the "Windows" button and type "cmd" to open a command prompt
$ git clone https://github.com/Jakdeveloper1/Web-Engineering.git

//2. Run the npm command to install the packages inside the package.json file
$ npm install

//3.1 Run file (with node)
$ node index.js

//3.2 Run file (with nodemon)
$ npm install -g nodemon
$ nodemon index.js

############### For New Project ##################

//Make a directory
$ mkdir myapp
$ cd myapp

//Use the npm init command to create a package.json file for your application.
$ npm init

//This command prompts you for several things, such as the name and version of your application.
//entry point: (index.js)

//Now, install Express in the myapp directory and save it in the dependencies list. For example:
$ npm install express

//To install Express temporarily and not add it to the dependencies list:
$ npm install express --no-save

//add Json web token package
$ npm install jsonwebtoken
