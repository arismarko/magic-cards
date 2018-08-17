import utils from '../utils/utils.js';

export default {
    sort(state, pageload) {
        state.items = utils.sort(pageload);
        return state;
    },
    suffle(state) {      
        state.items = utils.shuffle(state.items);
    },
    reset(state) {      
        state.items = state.initdata;
        state.drawn = [];
    },
    initdata(state, pageload) {
        state.initdata = pageload;
        state.items = utils.sort(pageload);
        return state;
    },
    drawcards(state, pageload) {
       let results = utils.draw(state.items, pageload);
        state.items = results.remained;
        state.drawn = results.drawn;
        return state;
    },
};