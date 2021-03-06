/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

import * as book from "@/store/modules/book.js";
import * as auth from "@/store/modules/auth.js";
import * as user from "@/store/modules/user.js";
import * as transaction from "@/store/modules/transaction.js";
import * as message from "@/store/modules/messages.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    book,
    auth,
    user,
    transaction,
    message
  },
  state: {
    linkServer: 'https://perpustest.xyz/'
  },
  mutations: {},
  actions: {}
});
