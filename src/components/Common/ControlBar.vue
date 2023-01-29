<template>
    <div class="control-bar">
        <div class="drag">

        </div>
        <div class="btn-groups">
            <el-button-group>
                <el-button key="plain" text @click="minWindow" class="control-tab">
                    <i class="bi bi-dash-lg"></i>
                </el-button>
                <el-button key="plain" text @click="maxRestoreWindow" class="control-tab">
                    <i class="bi bi-files" v-if="isWindowMax" style="transform: scaleX(1.3)"></i>
                    <i class="bi bi-square" v-else></i>
                </el-button>
                <el-button key="plain" text @click="closeWindow" class="danger control-tab">
                    <i class="bi bi-x-lg"></i>
                </el-button>
            </el-button-group>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ipcRenderer } from 'electron'
import { ref } from 'vue'

let isWindowMax = ref(false)

const minWindow = () => {
    ipcRenderer.send('min-app')
}

const closeWindow = () => {
    ipcRenderer.send('close-app')
}

const maxRestoreWindow = () => {
    ipcRenderer.send('window-max');
    isWindowMax.value = !isWindowMax.value
}
</script>

<style lang="scss">
.control-bar {
    position: fixed;
    top: 0;
    width: 100vw;
    display: flex;
    flex-direction: row;
    -webkit-user-drag: auto;

    .drag {
        width: calc(100% - 130px);
        app-region: drag;
    }
}
</style>