import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export const store = new Vuex.Store({
 state: {
    showModal: false
 },
 mutations: {
     closeModal(state) {
        state.showModal = !state.showModal;
     }
 }
});