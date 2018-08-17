# Card Magic

# Getting started

For this example I used VanillaJS, with Webpack and Jest fo testing

Once you deploy run: 

$ npm install

Then run: 
$ npm run dev


The application will run on http://localhost:3333/

If you want at any point to run the tests please run:
$ npm run test
$ npm run test:watch -- if you want to add or change existing tests


# Structure

The main development location is the ```src``` directory:
  -   ```src```          The main source directory
  -  ```assets```        Assets folder for json and images files 
  -  ```js/main.js```    The entry file for the application
  -  ```js/components``` Reusable components
  -  ```js/core```       Core files for the components - Component abstract class
  -  ```js/store```      Store classes that handle the state of the app
  -  ```js/utils```      The Utils folder for reusable functions 


The app is loading from the main.js that is dispatching an action to the store to initialise the data

Then the store initialises the items array in the state

The main component is the Gameview all components extend the Core Component and have a constructor and a render method

Once the store has updated the state the gameview render method will fire and it will load the commands and the cards.

Once a Command fires it will dispatch another event and the gameview will reload with new data

# Deploying

npm run build

#Trying the game

You can pick the basic commands:

1. Suffle the cards
2. You can sort the cards once you suffle based on the json order
3. You can enter a number and then if you want you can reset the cards
4. You can suffle the cards anytime