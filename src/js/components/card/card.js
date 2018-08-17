import Component from '../../core/component.js';
import store from '../../store/index.js';

export default class Card extends Component {
    constructor(parent, name) {
        super({
            store,
            element: document.querySelector(parent)            
        });
        
        this.name = name;
    }
    
    /**
     * React to state changes and render the component's HTML
     *
     * @returns {void}
     */
    render() {
        var newDiv = document.createElement("div"); 
        newDiv.className = `card ${this.name} `;
        
        this.element.appendChild(newDiv);
    }
}