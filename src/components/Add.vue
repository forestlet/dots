<script setup lang="ts">
import { nextTick, ref } from 'vue'
import { ElInput } from 'element-plus'
import { read_tags, write_tags } from '@/util/tag';
import { notes_path } from "@/data/path"
import { note_show, notes_list_show } from "@/util/note"
import { select_tag, date_range } from '@/data/filter';

const fs = require('fs-extra')
const path = require('path')
const mdify = require("mdify");

let inputValue = ref('')
let dynamicTags = ref(read_tags())
const inputVisible = ref(false)
const InputRef = ref<InstanceType<typeof ElInput>>()

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

const add_block = (tag: string) => {
  let today = new Date()
  // 年
  let year = today.getFullYear().toString()
  // 月（从 0 开始）
  let month = add0((today.getMonth() + 1)).toString()
  // 日
  let date = add0(today.getDate()).toString()
  // 文件名
  let filename = `${year}-${month}-${date}_${tag}.md`
  let note_path = path.join(notes_path, year, month, filename)
  // console.log(note_path)

  if (!fs.pathExistsSync(note_path)) {
    fs.ensureFileSync(note_path)

    mdify.writeFile(note_path, {
      create_time: today.toLocaleDateString(),
      modify_time: today.toLocaleDateString(),
    }, "");

    if (note_show(tag, today, select_tag.value, date_range.value))
      notes_list_show.value.push(note_path);
  }
}
</script>

<template>
  <div class="add">
    <el-popover placement="top" :width="400" trigger="click">
      <template #reference>
        <el-button plain circle class="add_btn"><i class="bi bi-plus"></i>
        </el-button>
      </template>
      <el-tag v-for="tag in dynamicTags" :key="tag" :disable-transitions="false" effect="plain" type='info'
        @click="add_block(tag)">
        {{ tag }}
      </el-tag>
      <el-input v-if="inputVisible" ref="InputRef" v-model="inputValue" size="small" @keyup.enter="handleInputConfirm"
        @blur="handleInputConfirm" />
      <el-button v-else class="button-new-tag ml-1" size="small" plain @click="showInput">
        + 新标签
      </el-button>
    </el-popover>
  </div>
</template>

<style lang="scss">
.add {
  .add_btn {
    margin: auto;
    display: flex;
  }
}

.el-tag {
  margin: 4px;
  cursor: pointer;
}
</style>
