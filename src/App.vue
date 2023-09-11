<script setup lang="ts">
import Collection from "./pages/Collection.vue";
import Setting from "./pages/Setting.vue";
import ControlBar from "./components/Common/ControlBar.vue"
import { onMounted } from "vue";
import { init_config } from "./util/config";

onMounted(() => {
  init_config()
})
</script>

<template>
  <ControlBar></ControlBar>
  <Collection></Collection>
  <Setting></Setting>
</template>

<style lang="scss">
#app {}
</style>
