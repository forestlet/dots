<template>
  <div class="filter">
    <div class="tag_selector">
      <el-select v-model="select_tag" placeholder="标签" @change="update_notes" clearable>
        <el-option v-for="tag in tags" :key="tag" :label="tag" :value="tag" />
      </el-select>
    </div>
    <div class="data_range">
      <div class="demo-date-picker">
        <el-date-picker v-model="date_range" type="daterange" range-separator="-" start-placeholder="开始"
          end-placeholder="结束" size="default" @change="update_notes" />
      </div>
    </div>
    <div class="gap_toggle">
      <el-button @click="toggle_gap" plain>
        <span v-if="gap">
          <i class="bi bi-columns-gap"></i>
        </span>
        <span v-else>
          <i class="bi bi-columns"></i>
        </span>
      </el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { read_tags } from '@/util/tag';
import { filter_notes_list, notes_list_show } from "@/util/note"
import { select_tag, date_range } from '@/data/filter';
import { gap } from '@/data/style';

const tags = read_tags()
const update_notes = () => {
  notes_list_show.value = filter_notes_list()
}

const toggle_gap = () => {
  gap.value = !gap.value
}
</script>

<style scoped lang="scss">
.filter {
  margin: auto;
  // 下面的 blocks 由于 scroller 左偏了一些，为了“居中”，要设置一下
  padding-right: 3%;
  display: flex;
  flex-direction: row;
  width: 460px;

  .tag_selector {
    width: 160px;
    margin-right: 6px;
  }

  .data_range {
    width: 240px;
    margin-right: 6px;
  }

  .gap_toggle {
    width: 48px;
  }

  .demo-date-picker {
    display: flex;
    width: 100%;
    padding: 0;
    flex-wrap: wrap;
  }

  .demo-date-picker .block {
    padding: 30px 0;
    text-align: center;
    border-right: solid 1.5px var(--el-border-color-darker);
    flex: 1;
  }

  .demo-date-picker .block:last-child {
    border-right: none;
  }

  .demo-date-picker .demonstration {
    display: block;
    color: var(--el-text-color-secondary);
    font-size: 14px;
    margin-bottom: 20px;
  }

  .example-showcase .el-dropdown+.el-dropdown {
    margin-left: 15px;
  }

  .example-showcase .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
  }
}
</style>
