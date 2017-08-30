# registration_numbers_webapp


### A Registration App that :
* Adds a registration number for specific areas, namely Cape-Town, Belville, Stellenbosch, Paarl.
* Displays the entered registration numbers.
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
   input this command
   ```javascript 
   nodemon 
   ```
   You should now see the following message displayed<br/>
   ```javascript 
    "Now listening to Port Number: 9001 "
    ```
    The Api is now succesfully running !! <br/>
    You are now able to add, view and update stock using postman and have the option to view your data within your database using Robomongo.
    
### Understanding the Routes

HTTP Method | Route Name | Description
------------ | ------------- | ---------
GET | /reg_numbers	 	  | Retrieves all the entered registration numbers from the database.
POST | /reg_numbers	 	  | Submits all the entered registration numbers to the database.
GET | /filterReg	 	  | Retrieves the filtered results of the registration numbers from the database.
POST | /filterReg	 	  | Submits the requested registration area to be filtered.

### Navigating the APP
1. In the navigation bar, please enter 
   ```javascript 
   http://localhost:9001
   ```
   You will immediately be re-directed to 
   ```javascript 
   http://localhost:9001/reg_num
   ```
2. This page allows you to enter your registration numbers and displays the registration numbers entered on the screen. 
Once you have entered your registration number and clicked "ENTER", the registratraion number will appear on the screen.<br/>

3. You will also have various options to filter you registration numbers for specific areas.<br/>
   Select the area you would like to filter, click on "FILTER" , you will be redirected to 
   ```javascript
   http://localhost:9001/filterReg
   ```
   This page will display all the registrations for the selected area.
