import { Action, ActionContext, MutationTree } from "vuex";

export interface Flood {
  ID: string;
  Title: string;
  Body: string;
  Shipper: {
    Username: string;
    ProfilePicture: string;
  };
}

export interface State {
  Floods: Array<Flood>;
}

export interface Getters {}

export interface Mutations {
  ADD_FLOOD(state: State, payload: Flood): void;
  ADD_FLOODS(state: State, payload: Array<Flood>): void;
}

export interface Actions {
  /* GET_FLOODS(
    { commit }: ActionContext<State, State>,
    payload: Array<Flood>
  ): Promise<void>; */
  GET_FLOODS: Action<State, State>;

  ADD_FLOOD(
    { commit }: ActionContext<State, State>,
    payload: Flood
  ): Promise<void>;

  REMOVE_FLOOD(
    { commit }: ActionContext<State, State>,
    payload: Flood
  ): Promise<void>;
}

export { Flood, State, Getters, Mutations, Actions };
