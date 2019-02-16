# Virtual Agent

Video Demo: https://youtu.be/o40Q5P6hiyc

Virtual Agent is an application for the self-booking touring entertainer. The app functions as an informational database of venues and a tour organizer. Venues are clearly displayed alphabetically and can be added, edited and deleted as well as filtered by category and location to assist in routing before they are added to a potential tour. The venues can then be organized and filtered within a tour by their booking status, and the user can use the notes functionality to track communication with talent buyers.

![ERD](/src/images/VA_ERD.png)

## Take VA for a spin

Clone the repo to your computer and run npm install in the directory
If you don't have json-server you'll also need to run npm install -g json-server to install it globally.
Rename api/db.json to api/database.json

To run json-server in the terminal... from the api folder, run: json-server -p 5002 -w database.json

In the project directory, run:

### `npm start`

This will run the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can register a new user or login with Username:robby Password:hecht to access existing database of venues

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
