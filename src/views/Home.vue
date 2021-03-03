<template>
  <div class="timeline-body">
    <Timeline
      v-for="(Flood, key) in Floods"
      :key="key"
      :id="key"
      :title="Flood.Title || 'Default Title'"
      :body="Flood.Body || 'Default Body'"
      :shipper="{
        username: Flood.Shipper.Username || 'Username',
        profilePicture:
          Flood.Shipper.ProfilePicture || 'https://via.placeholder.com/128'
      }"
    />
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import { mapActions, mapState } from "vuex";

  import Timeline from "@/components/Timeline.vue";

  export default Vue.extend({
    name: "Home",
    computed: {
      ...mapState(["Floods"])
    },
    methods: {
      ...mapActions(["GET_FLOODS", "ADD_FLOOD"])
    },
    components: {
      Timeline
    },
    created() {
      (async () => {
        await this.GET_FLOODS();
      })();
      // this.ADD_FLOOD({ title: "test", body: "TEst" });
    }
  });
</script>

<style lang="scss" scoped>
  .timeline-body {
    padding-left: 60px;
    padding-right: 60px;
    .timeline {
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }
</style>
