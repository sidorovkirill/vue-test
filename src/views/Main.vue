<template>
  <div class="workspace">
    <Search />
    <PackageList />
  </div>
</template>

<script>
import PackageList from "../components/PackageList/PackageList.vue";
import Search from "../components/Header/Header.vue";

export default {
  name: "Main",
  components: {
    PackageList,
    Search
  }
};
</script>
