# registration_numbers_webapp

### A Registration App that :
* Adds a registration number for specific areas, namely Cape-Town, Belville, Stellenbosch, Paarl.
* Filter for all registrations for a specific area and display

### Getting Started
* Clone, download or fork this respository https://github.com/JunaidGool/registration_numbers_webapp to your machine from GitHub.

### Prerequisites 
* node.js for your operating system requirements, this application was developed using version 6.10.2</br>
* MongoDB.<br/>
* RoboMongo (optional).<br/>
* Postman (optional).

### Installing
1. Access the package.json file, this file contains all the required dependencies to be installed.
   Below is what the package.json file will look like.
```javascript
{
  "name": "my_registrations_app",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "engines": {
    "node": "6.10.2"
  },
  "author": "Junaid Gool",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.17.1",
    "express": "^4.15.2",
    "express-flash": "git://github.com/RGBboy/express-flash.git",
    "express-handlebars": "^3.0.0",
    "express-session": "^1.15.2",
    "mongoose": "^4.9.7"
  }
}
```
2. In the command line, navigate to the project working folder.
3. Input ```javascript npm install --save ``` in the command line.<br/>
   This will install all the required dependencies.<br/>
   
### Starting the APP
1. Open mongoDB and get your server started.<br/>
2. In the command line, navigate to the project working folder.Once you are in the appropriate folder
   input this command<br/>
   ```javascript nodemon ``` <br/>
   You should now see the following message displayed<br/>
    "Now listening to Port Number: 9001 "<br/>
    The Api is now succesfully running !! <br/>
    You are now able to add, view and update stock using postman and have the option to view your data within your database using Robomongo.
     
    
    
    



   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
