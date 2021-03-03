import { MutationTree } from "vuex";

import { Flood, State, Mutations } from "@/@types/store";

export const mutations: MutationTree<State> & Mutations = {
  ADD_FLOOD(state: State, payload: Flood): void {
    state.Floods.push(payload);
  },
  ADD_FLOODS(state: State, payload: Array<Flood>): void {
    state.Floods = payload;
  }
};
