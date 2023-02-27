<template>
    <div class="control-bar">
        <el-button key="plain" text @click="refresh" class="control-tab">
            <i class="bi bi-arrow-clockwise"></i>
        </el-button>

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

const refresh = () => {
    window.location.reload()
}

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
        flex: 1;
        app-region: drag;
    }
}
</style>