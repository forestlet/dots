<script setup lang="ts">
import Collection from "./pages/Collection.vue";
import Setting from "./pages/Setting.vue";
import ControlBar from "./components/ControlBar.vue"
</script>

<template>
  <ControlBar></ControlBar>
  <Collection></Collection>
  <Setting></Setting>
</template>

<style lang="scss">
#app {
  font-family: iawriter-mono, Nitti, Menlo, consolas, 黑体, monospace;
  display: flex;
  flex-direction: row;

  .router-view {
    width: 100%;
  }
}
</style>
