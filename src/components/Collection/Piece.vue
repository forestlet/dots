<script setup lang="ts">
import { ref } from 'vue'
import { collection_filtered, filter_collection } from "@/util/piece"
import { select_tag } from "@/data/filter"
import { gap } from '@/data/style';
import InkMde from 'ink-mde/vue'
import { defineOptions } from 'ink-mde';

const fs = require('fs-extra')
const mdify = require("mdify");

const props = defineProps(['piece_path'])
const piece_path = props.piece_path

let tag = piece_path.split("_")[1].replace(".md", "")
let piece = mdify.parseFile(piece_path, { html: false })
let content = ref(piece.markdown.slice(1,))
let create_time = piece.metadata.create_time

const options = defineOptions({
  hooks: {
    afterUpdate: () => {
      save_piece()
    },
  },
  interface: {
    spellcheck: false,
  },
})

const save_piece = () => {
  let today = new Date().toLocaleDateString()

  mdify.writeFile(piece_path, {
    create_time: create_time,
    modify_time: today
  }, content.value);
}

const delete_piece = () => {
  fs.removeSync(piece_path)

  // 更新
  collection_filtered.value = filter_collection()
}
</script>

<template>
  <div class="piece">

    <div class="info" v-if="gap">
      <div class="left">
        <span>{{ create_time }}</span>
        <template v-if="!select_tag">
          &ensp;
          <span>{{ tag }}</span>
        </template>
      </div>

      <div class="right">
        <el-button link @click="delete_piece"> <i class="bi bi-trash3"></i></el-button>
      </div>
    </div>

    <InkMde v-model="content" :options="options" />

    <div class="line" v-if="gap"></div>
  </div>
</template>

<style lang="scss">
.piece {
  max-width: 80%;
  margin: 0 auto;
  padding-top: 6px;
  border-radius: 4px;
  border: 2px solid transparent;

  .info {
    opacity: 1;
    color: var(--el-border-color-darker);
    font-size: var(--el-font-size-small);
    margin: 0 10px;
    user-select: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &:has(.cm-focused) {
    border: 2px solid var(--el-color-info-light-5);

    .info {
      opacity: 1;
    }
  }

  .line {
    display: block;
    height: 1px;
    width: 100%;
    border-bottom: 1px var(--el-border-color) var(--el-border-style);
    padding-top: 6px;
    position: relative;
    top: 2px;
  }
}
</style>
