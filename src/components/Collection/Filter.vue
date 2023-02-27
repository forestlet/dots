<template>
  <div class="filter">
    <div class="tag_selector">
      <el-select v-model="select_tag" :placeholder='$t("message.filter.tag")' @change="update_collection" clearable>
        <el-option v-for="tag in tags" :key="tag" :label="tag" :value="tag" />
      </el-select>
    </div>
    <div class="date_range">
      <div class="demo-date-picker">
        <el-date-picker v-model="date_range" type="daterange" range-separator="-"
          :start-placeholder='$t("message.filter.date-picker.start-date")'
          :end-placeholder='$t("message.filter.date-picker.end-date")' size="default" @change="update_collection"
          :shortcuts="shortcuts" unlink-panels />
      </div>
    </div>

    <el-button @click="toggle_gap" plain>
      <i v-if="gap" class="bi bi-columns-gap"></i>
      <i v-else class="bi bi-columns"></i>
    </el-button>
  </div>
</template>

<script lang="ts" setup>
import { read_tags } from '@/util/tag';
import { filter_collection, collection_filtered } from "@/util/piece"
import { select_tag, date_range } from '@/data/filter';
import { gap } from '@/data/style';
import { shortcuts } from '@/data/locale';

const tags = read_tags()
const update_collection = () => {
  collection_filtered.value = filter_collection()
}

const toggle_gap = () => {
  gap.value = !gap.value
}
</script>

<style scoped lang="scss">
.filter {
  margin: 4px auto;
  display: flex;
  flex-direction: row;
  width: fit-content;

  .tag_selector {
    width: 160px;
    margin-right: 6px;
  }

  .date_range {
    width: 240px;
    margin-right: 6px;
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
