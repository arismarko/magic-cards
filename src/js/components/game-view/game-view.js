import Component from '../../core/component.js';
import store from '../../store/index.js';
import gameview from './game-view.ejs';
import Card from '../card/card.js';
import Commands from '../commands/commands.js';

export default class GameView extends Component {
    constructor(dom=document, htmlTemplate=gameview) {
        super({
            store
        });

        this.element = dom.querySelector('.gameview');

        this.commands = null;
        this.dom = dom;
        this.htmlTemplate = htmlTemplate;
    }

    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        this.element.innerHTML = this.htmlTemplate;
        
        this.commands = new Commands(this.dom);
        this.commands.render();
    
        store.state.items.forEach(element => {
            let card = new Card('.cards', element.name);
            card.render();
        });
        store.state.drawn.forEach(element => {
            let card = new Card('.drawn', element.name);
            card.render();
        });
    }
}