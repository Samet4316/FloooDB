<template>
  <header>
    <ul>
      <img src="http://unsplash.it/150/50?random&gravity=center" alt="" />
      <li>Merhaba</li>
      <li>Test</li>
      <li>TEst</li>
      <li>TESt</li>
    </ul>
  </header>
</template>

<script lang="ts">
  import Vue from "vue";

  export default Vue.extend({
    name: "Header"
  });
</script>

<style lang="scss" scoped>
  header {
    @include flex(row);

    width: 50vw;

    margin: 20px;

    background: #eee;
    border-radius: 100em;

    ul {
      @include flex(row);

      li {
        list-style: none;
        margin-left: 20px;
        margin-right: 20px;
      }
    }
  }
</style>
