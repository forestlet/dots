<template>
    <div class="control-bar flex fixed top-0 w-full z-10">
        <button @click="refresh" class="btn btn-sm btn-ghost ml-2 mt-2 opacity-20">
            <i class="bi bi-arrow-clockwise"></i>
        </button>

        <div class="drag flex-1"> </div>

        <div class="mt-2 mr-11">
            <button @click="minWindow" class="btn btn-sm btn-ghost mr-1">
                <i class="bi bi-dash-lg"></i>
            </button>

            <button @click="maxRestoreWindow" class="btn btn-sm btn-ghost mr-1">
                <i class="bi bi-files" v-if="isWindowMax" style="transform: scaleX(1.3)"></i>
                <i class="bi bi-square" v-else></i>
            </button>

            <button @click="closeWindow"
                class="btn btn-md btn-square rounded-md hover:btn-error btn-ghost fixed top-[-4px] right-[-4px] close-btn">
                <i class="bi bi-x-lg"></i>
            </button>
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
    .drag {
        flex: 1;
        app-region: drag;
    }

    .close-btn {
        padding-top: 8px !important;
        padding-right: 8px !important;
    }
}
</style>