import mutations from "../../constants/mutation-types";
import actions from "../../constants/action-types";
import * as api from "../../api/packagesApi";

export default {
  state: {
    id: 0,
    actual: {},
    versions: []
  },
  mutations: {
    [mutations.CHANGE_ID](state, payload) {
      state.id = payload;
    },
    [mutations.CHANGE_PACKAGE](state, payload) {
      state.actual = payload;
    },
    [mutations.CHANGE_VERSIONS_LIST](state, payload) {
      state.versions = payload;
    }
  },
  actions: {
    [actions.CHANGE_ACTUAL_PACKAGE](ctx, payload) {
      const { rootState, commit } = ctx;

      const actualPackage = rootState.packageList.list.find((package_) => package_.name === payload);
      commit(mutations.CHANGE_PACKAGE, actualPackage);
    },
    [actions.REQUEST_AVAILABLE_VERSIONS](ctx) {
      const {state, commit} = ctx;
      api.getAvailableVersionsByName(state.actual.name)
        .then((data) => {
          commit(mutations.CHANGE_VERSIONS_LIST, data);
        })
        .catch((e)  => {
          console.log("Server or connection issues: " + e);
        });
    }
  }
};
