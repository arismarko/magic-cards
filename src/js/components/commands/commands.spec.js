const jsdom = require("jsdom");
const { JSDOM } = jsdom;
import Commands from './commands';
import Component from '../../core/component';
import Store from '../../store/store';

jest.mock('../../core/component'); // Component is now a mock constructor
jest.mock('../../store/store');

Store.dispatch = jest.fn();

const htmlTemplate =  `<body><div id="commands">' +
'  <button id="drawcards">1</button>' +
'  <button id="shortorder">2</button>' +
'  <button id="resetcards">3</button>' +
'  <button id="sufflecards">4</button>' +
'</div></body>`;

const doc = new JSDOM(
    htmlTemplate,
    { includeNodeLocations: true }
);

beforeEach(() => {
    // Clear all instances and calls to constructor and all methods:
    Commands.mockClear();
    
});

describe("Commands", function () {
    it('We can check if the commands called the class constructor', () => {
        const commands = new Commands(doc.window.document,htmlTemplate);
        expect(Component).toHaveBeenCalledTimes(1);
    });

    it('should suffle cards', () => {
        const spy = jest.spyOn(Store, 'dispatch');
        const commands = new Commands(doc.window.document,htmlTemplate);
        const evt = {preventDefault: () => {}};
        commands.sufflecards(evt, Store);
        expect(spy).toHaveBeenCalled();
    });

    it('should sort order', () => {
        const spy = jest.spyOn(Store, 'dispatch');
        const evt = {preventDefault: () => {}};
        const commands = new Commands(doc.window.document,htmlTemplate);
        Store.state = {
            items: []
        }
        commands.shortOrder(evt, Store);
        expect(spy).toHaveBeenCalled();
    });

    it('should reset cards', () => {
        const spy = jest.spyOn(Store, 'dispatch');
        const evt = {preventDefault: () => {}};
        const commands = new Commands(doc.window.document,htmlTemplate);
        commands.sufflecards(evt, Store);
        expect(spy).toHaveBeenCalled();
    });

    it('should draw cards', () => {
        const spy = jest.spyOn(Store, 'dispatch');
        const commands = new Commands(doc.window.document,htmlTemplate);
        const evt = {preventDefault: () => {}};
        commands.resetCards(evt, Store);
        expect(spy).toHaveBeenCalled();
    });

});