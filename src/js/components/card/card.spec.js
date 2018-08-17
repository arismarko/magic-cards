import { JSDOM } from 'jsdom';
import sinon from 'sinon';

var Card = require('./Card').default;

const cardSet = sinon.spy();

const { window } = new JSDOM()
global.window = window;
global.document = window.document;


describe("mock render", function () {
     it('should mock', function () {
       var card = new Card('test', 'eight_diamonds');
       card.element = {
           appendChild: cardSet
       };
       card.render();
       expect(cardSet.calledOnce).toEqual(true);
    });
});