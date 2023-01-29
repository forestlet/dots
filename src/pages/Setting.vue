<script setup lang="ts">
import About from '@/components/About.vue';
import Appearance from '@/components/Appearance.vue';
import { ref } from 'vue';

const settingVisible = ref(false)
const openSetting = () => {
    settingVisible.value = true
}
</script>

<template>
    <div class="setting">
        <div class="setting_btn">
            <el-button text @click="openSetting">
                <i class="bi bi-sliders2"></i>
            </el-button>
        </div>

        <el-dialog v-model="settingVisible" width="80%">
            <el-scrollbar height="calc(80vh - 40px)">
                <About />
                <Appearance></Appearance>
            </el-scrollbar>
        </el-dialog>
    </div>
</template>

<style lang="scss">
.setting {
    margin: auto;

    .setting_btn {
        position: fixed;
        bottom: 8px;
        left: 4px;
        opacity: 0.2;

        &:hover {
            opacity: 1;
        }
    }

    .el-dialog__header {
        display: none;
    }

    .el-dialog__body {
        padding: 20px;
    }

    .el-dialog {
        margin: 10vh auto;
        height: 80vh;
    }
}
</style>
