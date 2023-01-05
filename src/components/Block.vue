<script setup lang="ts">
import { ref } from 'vue'
import { filter_notes_list, notes_list_show } from "@/util/note"
import { select_tag } from "@/data/filter"
import { gap } from '@/data/style';

const fs = require('fs-extra')

const props = defineProps(['note_path'])
const note_path = props.note_path
let tag = note_path.split("_")[1].replace(".json", "")

let note_json = fs.readJSONSync(note_path)
let content = ref(note_json.content)
let create_time = ref(note_json.create_time)
let modify_time = ref(note_json.modify_time)

const update_note = () => {
  save_note()
}

const add0 = (m: number) => {
  return m < 10 ? '0' + m : m
}

const save_note = () => {
  let today = new Date()
  let year = today.getFullYear().toString()
  let month = add0((today.getMonth() + 1)).toString()
  let date = add0(today.getDate()).toString()

  let new_note = {
    "create_time": create_time.value,
    "modify_time": `${year}-${month}-${date}`,
    "content": content.value
  }

  fs.writeJsonSync(note_path, new_note)
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

    <el-input v-model="content" autosize type="textarea" placeholder="[空]" @change="update_note()" spellcheck="false" />

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

  &:has(.el-textarea__inner:focus) {
    border: 2px solid var(--el-color-info-light-5);

    .info {
      opacity: 1;
    }
  }

  .el-textarea__inner {
    box-shadow: none;
    resize: none;
    overflow: hidden;

    &:focus,
    &:hover {
      box-shadow: none;
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
