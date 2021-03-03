<template>
  <div id="app">
    <Header/>
    <router-view />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import Header from '@/views/Header.vue'
  export default Vue.extend({
    name: "App",
    components: {
      Header
    }
  });
</script>

<style lang="scss">
  body {
    font-size: 1vmax;
  }
</style>
