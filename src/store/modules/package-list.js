import mutations from "../../constants/mutation-types";
import actions from "../../constants/action-types";
import * as api from "../../api/packagesApi";

export default {
  state: {
    paginationSize: 10,
    currentPage: 1,
    paginationLimit: 0,
    list: [],
    listIsLoading: false,
  },
  mutations: {
    [mutations.CHANGE_PAGINATION_OFFSET] (state, payload) {
      state.currentPage = payload;
    },
    [mutations.CHANGE_PAGINATION_LIMIT] (state, payload) {
      state.paginationLimit = payload;
    },
    [mutations.LIST_IS_LOADING] (state) {
      state.listIsLoading = true;
    },
    [mutations.LIST_LOADED] (state) {
      state.listIsLoading = false;
    },
    [mutations.CHANGE_PACKAGE_LIST] (state, payload) {
      state.list = payload;
      state.currentPage = 1;
    }
  },
  actions: {
    [actions.REQUEST_PACKAGE_LIST](ctx) {
      const {state, rootState, commit} = ctx;
      const from = (state.currentPage - 1) * state.paginationSize;
      commit(mutations.LIST_IS_LOADING);
      api.searchPackagesByName(rootState.search.queryText, state.paginationSize, from)
        .then((data) => {
          const {total, objects} = data;
          commit(mutations.CHANGE_PACKAGE_LIST, objects.map((raw) => raw.package));
          commit(mutations.CHANGE_PAGINATION_LIMIT, total);
        })
        .catch((e)  => {
          console.log("Server or connection issues: " + e);
        })
        .finally(() => {
          commit(mutations.LIST_LOADED);
        });
    }
  }
};
