<template>
    <div class="rounded-box grid grid-cols-2 sm:grid-cols-3 gap-4">
        <template v-for="_theme in [...light_themes, ...dark_themes]">
            <div class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-transparent hover:outline-base-200 shadow-sm"
                :class="[{ '!outline-primary': theme == _theme }, 'theme_' + _theme]" @click="change_new_theme(_theme)">
                <div :data-theme="_theme" class="bg-base-100 text-base-content cursor-pointer">
                    <div class="grid grid-cols-5 grid-rows-3">
                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                        <div class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-1">
                            <div class="theme">{{ _theme }}</div>
                            <div class="flex flex-wrap gap-1">
                                <div class="bg-primary flex aspect-square w-5 items-baseline justify-center rounded">
                                    <div class="text-primary-content font-bold"></div>
                                </div>
                                <div class="bg-secondary flex aspect-square w-5 items-baseline justify-center rounded">
                                    <div class="text-secondary-content font-bold"></div>
                                </div>
                                <div class="bg-neutral flex aspect-square w-5 items-baseline justify-center rounded">
                                    <div class="text-neutral-content font-bold"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script setup lang="ts">
import { dark_themes, light_themes, theme, change_new_theme } from '@/util/config';
</script>

<style></style>
