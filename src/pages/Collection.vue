<script setup lang="ts">
import Piece from '@/components/Collection/Piece.vue'
import Filter from '@/components/Collection/Filter.vue'
import Add from '@/components/Collection/Add.vue'

import { NScrollbar } from 'naive-ui'
import { gap } from '@/data/style';
import { collection_filtered } from '@/util/piece'
</script>

<template>
    <div class="mt-12 w-full">
        <Filter />
        <n-scrollbar style="max-height: calc(100vh - 72px)">
            <div class="pieces">
                <template v-for="piece_path in collection_filtered" :key="piece_path">
                    <Piece :piece_path="piece_path" />
                </template>

                <div class="add" v-if="gap">
                    <Add></Add>
                </div>
            </div>
        </n-scrollbar>
    </div>
</template>

<style lang="scss">
.container {
    margin-top: 40px;
    padding: 4px;

    .pieces {
        margin-top: 8px;
    }

    .add {
        margin-top: 12px;
    }
}
</style>
