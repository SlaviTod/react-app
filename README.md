# react-app
Course project: ReactJS - February 2023


# Client-side 
The app is a Single Page Application cteated by using following technologies: 
- [React] https://react.dev/
- [react-router-dom] 
- [react-bootstrap] https://react-bootstrap.github.io/ 
- [react-icons] https://react-icons.github.io/react-icons/
- [react-transition-group] https://www.npmjs.com/package/react-transition-group; https://reactcommunity.org/react-transition-group/
- [i18next] https://www.i18next.com/
- [react-i18next] https://react.i18next.com/ 
 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Getting Started
Before running in the client project directory run `npm i` to istall all dependencies. 

## Available Scripts
In the project directory, you can run:

### `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`
Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.



# Server-side 
These is a Node.js application cteated by using following technologies: 
- [Express] https://expressjs.com/
- [body-parser] https://www.npmjs.com/package/body-parser; https://expressjs.com/en/resources/middleware/body-parser.html 
- [Morgan] https://www.npmjs.com/package/morgan; https://expressjs.com/en/resources/middleware/morgan.html 
- [Multer] https://www.npmjs.com/package/multer; https://expressjs.com/en/resources/middleware/multer.html
- [Mongoose] https://mongoosejs.com/
- [express-mongo-sanitize] https://www.npmjs.com/package/express-mongo-sanitize
- [Cors] https://www.npmjs.com/package/cors; https://expressjs.com/en/resources/middleware/cors.html 
- [Dotenv] https://www.npmjs.com/package/dotenv
- [Nodemon] https://www.npmjs.com/package/nodemon 
- [node.bcrypt.js] https://www.npmjs.com/package/bcrypt 
- [validator.js] https://www.npmjs.com/package/validator 
- [jsonwebtoken] https://www.npmjs.com/package/jsonwebtoken


# Getting Started
Before running in the server project directory run `npm i` to istall all dependencies. 
The .env file should be created with following variables:
    PORT=3030 
    DB_CONNECTION=mongodb://
    DB_HOST=127.0.0.1
    DB_PORT=27017
    DB_NAME=elbetitsa
    JWT_AUDIENCE=ve.elbetitsa.org
    JWT_ISSUER=ve.elbetitsa.org
    JWT_SECRET=very-best!secret:)
    JWT_EXPIRESIN=1h
    
## Available Scripts
In the project directory, you can run:

### `npm dev`
### `npm start`
Both run the app in the development mode.
First one start nodemon - a tool that helps Node.js application development by automatically restarting when file changes in the directory are detected.

You also can use [Postman] or other /api calls to [http://localhost:3030].