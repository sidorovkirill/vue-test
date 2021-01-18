<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand href="#">NPM VUEwer</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <b-navbar-nav>
                    <b-nav-item>
                        <router-link to="/about">About</router-link>
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto">
                    <b-nav-form>
                        <b-form-input
                                id="inline-form-input-name"
                                size="sm"
                                class="mr-sm-2"
                                placeholder="Enter package name..."
                                v-model = "query"
                        ></b-form-input>
                        <b-button
                                size="sm"
                                class="my-2 my-sm-0"
                                @click="handleSearchRequest"
                        >Search</b-button>
                    </b-nav-form>
                </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<script src="./Header.js"></script>
<style src="./Header.scss" scoped lang="scss"></style>
