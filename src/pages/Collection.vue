<script setup lang="ts">
import Block from '@/components/Block.vue'
import Filter from '@/components/Filter.vue'
import { gap } from '@/data/style';
import { notes_list_show } from '@/util/note'
</script>

<template>
    <div class="container">
        <Filter />

        <div class="notes">
            <el-scrollbar height="calc(100vh - 48px)">
                <template v-for="note_path in notes_list_show" :key="note_path">
                    <Block :note_path="note_path" />
                </template>

                <div class="add" v-if="gap">
                    <Add />
                </div>
            </el-scrollbar>
        </div>
    </div>
</template>

<style lang="scss">
.container {
    .notes {
        margin-top: 8px;
    }

    .add {
        margin-top: 12px;
    }
}
</style>
