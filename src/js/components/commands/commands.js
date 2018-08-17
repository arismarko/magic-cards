import store from '../../store/index.js';
import commands from './commands.html';
import Component from '../../core/component.js';

export default class Commands extends Component {
    constructor(doc=document, htmlTemplate=commands) {
        super({
            store,
        });

        this.element = '';
        this.doc = doc;

        this.init(doc, htmlTemplate);
    }

    init(dom, htmlTemplate) {
       this.element = dom.getElementById('commands');
       this.element.innerHTML = htmlTemplate; 

       let suffleCardsElement = dom.getElementById('sufflecards');
       let sortOrderElement = dom.getElementById('shortorder');
       let resetcardsElement = dom.getElementById('resetcards');
       let drawcardsElement = dom.getElementById('drawcards');

       suffleCardsElement.addEventListener("click", this.sufflecards);
       sortOrderElement.addEventListener("click", this.shortOrder);
       resetcardsElement.addEventListener("click", this.resetCards);
       drawcardsElement.addEventListener("click", this.drawcards);
    }

    sufflecards(evt, shop=store){
        evt.preventDefault();
        shop.dispatch('suffle');
    }

    shortOrder(evt, shop=store) {
        evt.preventDefault();
        shop.dispatch('sort', shop.state.items);
    }

    resetCards(evt, shop=store) {
        evt.preventDefault();
        shop.dispatch('reset'); 
    }

    drawcards(evt, shop=store) {
        evt.preventDefault();
        let textbox = document.getElementById('numberofcards').value;
        shop.dispatch('drawcards', textbox);
    }
}