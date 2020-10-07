import { createStore } from "vuex";

export type State = { counter: number };

const state: State = { counter: 0 };

export const store = createStore({
  state,
  mutations: {
    increment(state, payload) {
      state.counter++;
    }, 
    decrement(state, payload){
      if(state.counter > 0){
        state.counter--
      }
    }
  },
  actions: {
    increment({ commit }) {
      commit("increment");
    }
  },

  getters: {
    counter(state) {
      return state.counter;
    }
  },
  modules: {}
});
