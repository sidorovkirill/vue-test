import types from "../../constants/mutation-types";

export default {
  state: {
    queryText: ""
  },
  mutations: {
    [types.CHANGE_QUERY](state, payload) {
      state.queryText = payload;
    },
  },
  actions: {}
};
