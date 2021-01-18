<template>
    <div>
        <div>
            <b-table
                    hover
                    id="my-table"
                    ref="table"
                    :items="packages"
                    :busy="listIsLoading"
                    @row-clicked="pickActualPackage"
                    small
            ></b-table>
        </div>
        <div v-if="packages.length > 0">
            <b-pagination
                    v-model="currentPage"
                    :per-page="paginationSize"
                    :total-rows="paginationLimit"
                    aria-controls="my-table"
            ></b-pagination>
        </div>
        <b-modal
                ref="package-modal"
                hide-footer
                :title="actualPackage.name"
                size="lg"
        >
            <b-card :title="'Author: ' + actualPackageAuthor" :sub-title="actualPackage.description">
                <b-card-text>Available versions</b-card-text>
                <div>
                    <b-badge
                            v-for="version in versions.versions"
                            :key="version"
                            pill
                            variant="primary">
                        {{version}}
                    </b-badge>
                </div>
            </b-card>
        </b-modal>
    </div>
</template>

<script src="./PackageList.js"></script>
<style src="./PackageList.scss" scoped lang="scss"></style>
