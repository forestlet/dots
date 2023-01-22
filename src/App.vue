<script setup lang="ts">
import TabBar from "@/components/TabBar.vue"
</script>

<template>
  <TabBar></TabBar>

  <div class="router-view">
    <router-view>
    </router-view>
  </div>
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
