export default {
    suffle(context, payload) {
       context.commit('suffle', payload);
    },
    sort(context, payload) {
        context.commit('sort', payload);
    },
    reset(context, payload) {
        context.commit('reset', payload);
    },
    initdata(context, payload){
        context.commit('initdata', payload);
    },
    drawcards(context, payload){
        context.commit('drawcards', payload);
    }
};