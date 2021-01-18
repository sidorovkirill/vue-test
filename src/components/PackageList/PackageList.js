import { mapMutations, mapActions } from 'vuex';
import mutations from '../../constants/mutation-types';
import actions from "../../constants/action-types";
import requestMixin from "../../mixins/package-request-mixin";

export default {
    name: "PackageList",
    mixins: [requestMixin],

    data() {
        return {
            currentPage: this.$store.state.packageList.currentPage,
            busy: true
        }
    },

    computed: {
        packages() {
            return this.$store.state.packageList.list
              .map(pack => {
                  const {name, version, description, author} = pack;
                  return {
                      name,
                      version,
                      description,
                      author: author ? author.name : 'none'
                  }
              })
        },
        paginationLimit() {
            return this.$store.state.packageList.paginationLimit;
        },
        paginationSize() {
            return this.$store.state.packageList.paginationSize;
        },
        listIsLoading() {
            return this.$store.state.packageList.listIsLoading;
        },
        actualPackage() {
            return this.$store.state.package.actual;
        },
        actualPackageAuthor() {
            const author = this.actualPackage.author;
            return author ? `${author.name} aka ${author.username}` : 'none';
        },
        versions() {
            return this.$store.state.package.versions;
        }
    },

    watch: {
        currentPage(newOffset) {
            this.changeCurrentPage(newOffset);
            this.handleSearchRequest();
        }
    },

    methods: {
        ...mapMutations([mutations.CHANGE_PAGINATION_OFFSET]),
        ...mapActions([actions.CHANGE_ACTUAL_PACKAGE, actions.REQUEST_AVAILABLE_VERSIONS]),
        pickActualPackage(row) {
            this.changeActualPackage(row.name);
            this.requestAvailableVersions();
            this.showModal();
        },
        showModal() {
            this.$refs['package-modal'].show()
        },
        hideModal() {
            this.$refs['package-modal'].hide()
        },
    }
};