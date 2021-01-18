import Vue from "vue";
import Vuex from "vuex";
import searchModule from './modules/search';
import packageListModule from './modules/package-list';
import packageModule from './modules/package';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    search: searchModule,
    packageList: packageListModule,
    package: packageModule
  }
});
