# TUTORIAL 4

* *Date Created*: 10 MAR 2023
* *Last Modification Date*: 06 FEB 2023
* *Tutorial 5:
* *Created By: FAIZA UMATIYA
* *Deployed app link = 
* *Gitlab Link = 



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### Deployment

<!-- This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment) -->

I created simple API where I understood how API calls are written in the Back-End framework/library i.e. Express.js [1]. Based on the instructions provided in the tutorial-5, i created 3 end-points which are GET, PUT, POST. I pushed the code on GitHub to deploy in Render [2]. The render account was linked with GitHub repository. After authorization is done, the application was deployed in a minute. Therefore, the simple API was deployed on Render successfully.

# Built With

<!--- Provide a list of the frameworks used to build this application, your list should include the name of the framework used, the url where the framework is available for download and what the framework was used for, see the example below --->

* [Reactjs](https://reactjs.org/docs/create-a-new-react-app.html) - The web framework used
**

# Sources Used

Since there is no Front-end requirement for the tutorial-5, I made simple API calls that written the following:
1. GET API - Returns list of user objects.
2. PUT API - Updates email and/or firstname of an existing object in the list.
3. POST API - Adds new user object to the list and generate an id for the user.
3. new GET API - Returns single user object given its username.

I used the reference from brightspace tutorial-5 lecture [3] and build the endpoints. In order to generate the random id i used "uuid" [4]. To make the length of the uuid to exact 10 i used "slice" [5] [6]. One can also generate random id using "math.floor" [7]. Lastly, in order to map/user along with correct callbacks, i used "module.exports = router;" [8].


# Acknowledgments

## References :

[1]Expressjs.com. [Online]. Available: https://expressjs.com/. [Accessed:   10-Mar-2023].

[2]Render.com. [Online]. Available: https://render.com/. [Accessed: 11-Mar-2023].

[3]“No title,” Brightspace.com. [Online]. Available: https://dal.brightspace.com/d2l/le/content/250793/viewContent/3445551/View. [Accessed: 11-Mar-2023].

[4]“Node.Js NPM uuid,” GeeksforGeeks, 25-Aug-2020. [Online]. Available: https://www.geeksforgeeks.org/node-js-npm-uuid/. [Accessed: 12-Mar-2023].

[5]“uuidv4 JavaScript and Node.js code examples,” Tabnine.com, 18-Mar-2019. [Online]. Available: https://www.tabnine.com/code/javascript/modules/uuidv4. [Accessed: 13-Mar-2023].

[6]“how to reduce length of UUID generated using randomUUID( ),” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/20994768/how-to-reduce-length-of-uuid-generated-using-randomuuid. [Accessed: 13-Mar-2023].

[7]R. Fadhil, “How to generate unique ID in JavaScript,” DEV Community, 22-Dec-2019. [Online]. Available: https://dev.to/rahmanfadhil/how-to-generate-unique-id-in-javascript-1b13. [Accessed: 14-Mar-2023].

[8]“TypeError: Router.use() requires middleware function but got a Object,” Stack Overflow. [Online]. Available: https://stackoverflow.com/questions/27465850/typeerror-router-use-requires-middleware-function-but-got-a-object/28379965. [Accessed: 14-Mar-2023].


 




