<script setup lang="ts">
import Piece from '@/components/Collection/Piece.vue'
import Filter from '@/components/Collection/Filter.vue'
import { gap } from '@/data/style';
import { collection_filtered } from '@/util/piece'
</script>

<template>
    <div class="container">
        <Filter />

        <div class="pieces">
            <el-scrollbar height="calc(100vh - 80px)">
                <template v-for="piece_path in collection_filtered" :key="piece_path">
                    <Piece :piece_path="piece_path" />
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
    margin: 32px 4px 4px 0;

    .pieces {
        margin-top: 8px;
    }

    .add {
        margin-top: 12px;
    }
}
</style>
