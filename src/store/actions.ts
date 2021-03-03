import { ActionTree } from "vuex";

import { Flood, State, Actions } from "@/@types/store";

import firebase from "firebase/app";
import "firebase/firestore";
import { firestoreAction } from "vuexfire";

const app = firebase.initializeApp({
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
});

// const db = app.database();
const db = app.firestore();

const FloodsCollection = db.collection("floods");
// const DBFloods = db.ref("floods");

export const actions: ActionTree<State, State> & Actions = {
  /*   async GET_FLOODS({ state, commit }): Promise<void> {
    const Floods = Array<Flood>();
    await (
      await FloodsCollection.orderBy("Title", "desc")
        .startAfter(0 | state.Floods.length)
        .limit(10)
        .get()
    ).forEach(doc => {
      const Flood = doc.data();
      Floods.push({
        ID: doc.id,
        Title: Flood.Title,
        Body: Flood.Body,
        Shipper: {
          ...Flood.Shipper
        }
      });
    });

    commit("ADD_FLOODS", Floods);
  }, */
  GET_FLOODS: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef("Floods", FloodsCollection);
  }),

  async ADD_FLOOD({ commit }, payload: Flood): Promise<void> {
    await FloodsCollection.add(payload);
    commit("ADD_FLOOD", payload);
  },

  async REMOVE_FLOOD({ commit }, payload: Flood): Promise<void> {
    commit("REMOVE_FLOOD", payload);
    // TODO: await DBFloods;
  }
};
