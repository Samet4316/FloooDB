import Vue from "vue";
import Vuex from "vuex";
import { vuexfireMutations } from "vuexfire";

import { state } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  getters,
  mutations: {
    ...mutations,
    ...vuexfireMutations,
  },
  actions,
  modules: {}
});
