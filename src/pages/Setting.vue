<script setup lang="ts">
import About from '@/components/Setting/About.vue';
import Appearance from '@/components/Setting/Appearance.vue';
import General from '@/components/Setting/General.vue';
import { NScrollbar } from 'naive-ui'

const openSetting = () => {
    (document.getElementById("setting_modal") as HTMLDialogElement)!.showModal()
}
</script>

<template>
    <div class="setting">

        <button class="btn btn-sm btn-ghost fixed left-2 bottom-2 opacity-20 hover:opacity-100" @click="openSetting">
            <i class="bi bi-sliders2"></i>
        </button>

        <dialog id="setting_modal" class="modal">
            <div class="modal-box w-[80vw] min-h-[80vh] flex flex-col">
                <n-scrollbar style="max-height: 72vh" class="pr-4">
                    <About />

                    <General></General>

                    <div class="divider"></div>
                    <Appearance></Appearance>
                </n-scrollbar>
            </div>
            <form method="dialog" class="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>

    </div>
</template>

<style lang="scss">
.setting {
    margin: auto;
}
</style>
