require('./main.scss');
import store from './store/index.js';
import GameView from './components/game-view/game-view';
import data from '../assets/json/data.json';

store.dispatch('initdata', data);
const gameView = new GameView();

// Initial renders
gameView.render();

