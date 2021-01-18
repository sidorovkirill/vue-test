import { mapActions } from 'vuex';
import actions from '../constants/action-types';

export default {
  data() {
    return {
      query: this.$store.state.search.queryText
    }
  },

  methods: {
    ...mapActions([actions.REQUEST_PACKAGE_LIST]),

    handleSearchRequest() {
      this.requestPackageList();
    },
  },
};