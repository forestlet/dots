<template>
    <div class="appearance">
        <el-form label-width="120px" label-position="left">
            <el-form-item label="Theme">
                <el-button @click="toggleDark()" text :class="{'active': theme}">
                    <i class="bi bi-sun"></i>
                </el-button>
                <el-button @click="toggleDark()" text :class="{ 'active': !theme }">
                    <i class="bi bi-moon"></i>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue';

let theme = ref(Boolean(window.matchMedia("(prefers-color-scheme: light)")))
const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = () => {
    theme.value = !theme.value
    useToggle(isDark)()
}
</script>

<style lang="scss">
.appearance {
    width: 420px;
    margin: auto;

    .el-form-item__content {
        justify-content: flex-end;
        flex-wrap: nowrap;
    }

    .active {
        background-color: var(--el-color-info-light-9) !important;
    }
}
</style>