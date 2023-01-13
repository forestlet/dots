<script setup lang="ts">
import { ref } from 'vue'
import { filter_notes_list, notes_list_show } from "@/util/note"
import { select_tag } from "@/data/filter"
import { gap } from '@/data/style';
import InkMde from 'ink-mde/vue'
import { defineOptions } from 'ink-mde';

const fs = require('fs-extra')
const mdify = require("mdify");

const props = defineProps(['note_path'])
const note_path = props.note_path

let tag = note_path.split("_")[1].replace(".md", "")
let note = mdify.parseFile(note_path, { html: false })
let content = ref(note.markdown.slice(1,))
let create_time = note.metadata.create_time

const options = defineOptions({
  hooks: {
    afterUpdate: () => {
      save_note()
    },
  },
  interface: {
    spellcheck: false,
  },
})

const save_note = () => {
  let today = new Date().toLocaleDateString()

  mdify.writeFile(note_path, {
    create_time: create_time,
    modify_time: today
  }, content.value);
}

const delete_note = () => {
  fs.removeSync(note_path)

  // 更新
  notes_list_show.value = filter_notes_list()
}
</script>

<template>
  <div class="block">

    <div class="info" v-if="gap">
      <div class="left">
        <span>{{ create_time }}</span>
        <template v-if="!select_tag">
          &ensp;
          <span>{{ tag }}</span>
        </template>
      </div>

      <div class="right">
        <el-button link @click="delete_note"> <i class="bi bi-trash3"></i></el-button>
      </div>
    </div>

    <InkMde v-model="content" :options="options" />

    <div class="line" v-if="gap"></div>
  </div>
</template>

<style lang="scss">
.block {
  margin: 0 12px 0 2px;
  padding-top: 6px;
  border-radius: 4px;
  border: 2px solid var(--el-bg-color);

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
