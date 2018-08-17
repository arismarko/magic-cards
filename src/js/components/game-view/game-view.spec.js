const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import Gameview from './game-view';
import Commands from '../commands/commands';
import Card from '../card/card';
import store from '../../store/index.js';
import data from '../../../assets/json/data.json';

jest.mock('../../core/component'); // Component is now a mock constructor
jest.mock('../commands/commands', () => {
  // Works and lets you check for constructor calls:
  return jest.fn().mockImplementation(() => {
    return {render: () => {}};
  });
});
jest.mock('../card/card', () => {
  // Works and lets you check for constructor calls:
  return jest.fn().mockImplementation(() => {
    return {render: () => {}};
  });
});

const htmlTemplate =  `<body><div class="gameview"><div id="commands">' 
'  <button id="drawcards">1</button>' 
'  <button id="shortorder">2</button>' 
'  <button id="resetcards">3</button>' 
'  <button id="sufflecards">4</button>' 
'</div></div></body>`;

const dom = new JSDOM(
    htmlTemplate,
    { includeNodeLocations: true }
);

describe("Gameview", function () {

    it('should call the constructor', function () {
       const gameview = new Gameview(dom.window.document, htmlTemplate);
       expect(Gameview).toHaveBeenCalledTimes(1);
    });

    it('Should run render', () => {

      store.dispatch('initdata', data);

      const gameview = new Gameview(dom.window.document, htmlTemplate);
      gameview.render();
      expect(Commands).toHaveBeenCalledTimes(1);
      expect(Card).toHaveBeenCalledTimes(48);
    });

});