<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { read_tags, write_tags } from '@/util/tag';
import { collection_path } from "@/data/path"
import { collection_filter, collection_filtered } from "@/util/piece"
import { select_tag, date_range } from '@/data/filter';

const fs = require('fs-extra')
const path = require('path')
const mdify = require("mdify");

let inputValue = ref('')
let dynamicTags = ref(read_tags())
const inputVisible = ref(false)
const InputRef = ref()

const showInput = () => {
  inputVisible.value = true
  nextTick(() => {
    InputRef.value!.input!.focus()
  })
}

const handleInputConfirm = () => {
  if (inputValue.value) {
    dynamicTags.value.push(inputValue.value)
  }
  inputVisible.value = false
  inputValue.value = ''

  write_tags(dynamicTags.value)
}

const add0 = (m: number) => {
  return m < 10 ? '0' + m : m
}

const add_piece = (tag: string) => {
  let today = new Date()
  // 年
  let year = today.getFullYear().toString()
  // 月（从 0 开始）
  let month = add0((today.getMonth() + 1)).toString()
  // 日
  let date = add0(today.getDate()).toString()
  // 文件名
  let filename = `${year}-${month}-${date}_${tag}.md`
  let piece_path = path.join(collection_path, year, month, filename)
  // console.log(piece_path)

  if (!fs.pathExistsSync(piece_path)) {
    fs.ensureFileSync(piece_path)

    mdify.writeFile(piece_path, {
      create_time: today.toLocaleDateString(),
      modify_time: today.toLocaleDateString(),
    }, "");

    if (collection_filter(tag, today, select_tag.value, date_range.value))
      collection_filtered.value.push(piece_path);
  }
}
</script>

<template>
  <div class="add">
    <button class="btn">
      <i class="bi bi-plus"></i>
    </button>

    <div class="badge badge-primary" v-for="tag in dynamicTags" :key="tag" @click="add_piece(tag)">
      {{ tag }}
    </div>
    <input v-if="inputVisible" ref="InputRef" v-model="inputValue" @keyup.enter="handleInputConfirm"
      @blur="handleInputConfirm" />
    <button v-else class="button-new-tag ml-1" size="small" plain @click="showInput">
      + 新标签
    </button>
  </div>
</template>

<style lang="scss"></style>
