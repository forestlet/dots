<template>
    <div class="appearance">
        <el-form label-width="120px" label-position="left">
            <el-form-item>
                <template #label>
                    <span class="icon"> <i class="bi bi-palette2"></i></span>
                    <span> {{ $t("message.setting.appearance.theme-form-item") }} </span>
                </template>

                <el-button @click="toggleTheme('light')" text :class="{ 'active': theme == 'light' }">
                    <i class="bi bi-sun"></i>
                </el-button>
                <el-button @click="toggleTheme('dark')" text :class="{ 'active': theme == 'dark' }">
                    <i class="bi bi-moon"></i>
                </el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { useDark, useToggle } from '@vueuse/core'
import { ref } from 'vue';

let theme = ref(window.matchMedia("(prefers-color-scheme: light)") ? "light" : "dark")
const isDark = useDark({
    selector: 'html',
    attribute: 'class',
    valueDark: 'dark',
    valueLight: 'light',
})
const toggleDark = useToggle(isDark)
console.log(theme.value);

const toggleTheme = (next_theme: any) => {
    console.log(theme.value,next_theme);
    
    theme.value = next_theme
    toggleDark(next_theme == "dark")
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

    .el-button.is-text:not(.is-disabled):focus.active,
    .active {
        background-color: var(--el-color-info-light-9) !important;
    }

    .icon {
        margin-right: 12px;
    }
}
</style>