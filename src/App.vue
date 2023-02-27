<script setup lang="ts">
import Collection from "./pages/Collection.vue";
import Setting from "./pages/Setting.vue";
import ControlBar from "./components/Common/ControlBar.vue"
</script>

<template>
  <ControlBar></ControlBar>
  <Collection></Collection>
  <Setting></Setting>
</template>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;

  .router-view {
    width: 100%;
  }
}
</style>
