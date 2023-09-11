<template>
  <div class="filter">
    <select class="select select-xs w-full max-w-xs mr-4 ml-4" v-model="select_tag" @change="update_collection">
      <option disabled selected>{{ $t("message.filter.tag") }}</option>
      <option v-for="tag in tags" :key="tag">{{ tag }}</option>
    </select>

    <!-- date picker -->

    <button @click="toggle_gap">
      <i v-if="gap" class="bi bi-columns-gap"></i>
      <i v-else class="bi bi-columns"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { read_tags } from '@/util/tag';
import { filter_collection, collection_filtered } from "@/util/piece"
import { select_tag } from '@/data/filter';
import { gap } from '@/data/style';

const tags = read_tags()
const update_collection = () => {
  collection_filtered.value = filter_collection()
}

const toggle_gap = () => {
  gap.value = !gap.value
}
</script>

<style scoped lang="scss"></style>
