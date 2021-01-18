import { mapMutations } from 'vuex';
import requestMixin from '../../mixins/package-request-mixin';
import mutations from '../../constants/mutation-types';

export default {
    name: "Search",
    props: {
        msg: String
    },
    mixins: [requestMixin],

    watch: {
        query(queryStr) {
            this.changeQuery(queryStr);
            this.handleSearchRequest();
        }
    },

    methods: {
        ...mapMutations([mutations.CHANGE_QUERY]),
    },
};