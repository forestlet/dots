<script setup lang="ts">
import Collection from "./pages/Collection.vue";
import Setting from "./pages/Setting.vue";
import ControlBar from "./components/Common/ControlBar.vue"
import { element_plus_locale } from "@/data/locale"
</script>

<template>
  <el-config-provider :locale="element_plus_locale">
    <ControlBar></ControlBar>
    <Collection></Collection>
    <Setting></Setting>
  </el-config-provider>
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
