Starwars people finder - React/Redux

Getting started
For this example I used React with Redux and for the testing Jest.

Once you clone run:

$ npm install

Then run: $ npm start

The application will run on localhost:3000

If you want at any point to run the tests please run: $ npm run test

Structure
The main development location is the src directory:

src The main source directory
api The api loading modules for the application
containers Top app layers
components Reusable components
actions people and search
reducers People Reducer and Initial State
store The store of the app
index.jsx is configuring the store and setting up the main app container.

The app container is loading all the other containers using the latest router.

If the user types a word then the url will change /search/name-of-actor

The router will pick up the change and will load the resultsContainer that will load the action loadAllPeople from the people action.

There will be a call to the API and that will get the data and pass it to the reducer that will bring back the data to the props of the resultsContainer.

The resultsContainer will then pass this to the props of the listings/listing components. 

All spec files are within actions, container, and each component.

Deploying
npm run build

Testing 

npm run test