<template>
    <div class="appearance">
        <div class="mt-4 p-1">
            <!-- adaptive style -->
            <p class="flex mb-7 items-center justify-between">
                <span class="text-md font-bold">
                    <span class="icon"> <i class="bi bi-palette2"></i></span>
                    <span> {{ $t("adaptive_style") }} </span>
                </span>

                <span>
                    <label class="cursor-pointer label">
                        <input type="checkbox" class="toggle toggle-primary" :checked="adaptive_style == 'adaptive'"
                            @change="change_adaptive_style" />
                    </label>
                </span>
            </p>

            <!-- theme -->
            <div class="collapse rounded-none" v-if="adaptive_style == 'uniform'">
                <input type="checkbox" />
                <div class="collapse-title p-0">
                    <p class="flex items-baseline justify-between">
                        <span class="text-md font-bold">
                            <span class="icon"><i class="bi bi-palette"></i></span>
                            <span> {{ $t("theme") }} </span>
                        </span>

                        <span class="theme theme-shadow">{{ theme }}</span>
                    </p>
                </div>
                <div class="collapse-content pl-1 pr-1">
                    <Theme></Theme>
                </div>
            </div>

            <!-- light theme -->
            <div class="collapse rounded-none" v-if="adaptive_style == 'adaptive'">
                <input type="checkbox" />
                <div class="collapse-title p-0">
                    <p class="flex justify-between items-baseline">
                        <span class="text-md font-bold">
                            <span class="icon"><i class="bi bi-brightness-high"></i></span>
                            <span> {{ $t("light_theme") }} </span>
                        </span>

                        <span class="theme theme-shadow" :data-theme="light_theme">{{ light_theme }}</span>
                    </p>
                </div>
                <div class="collapse-content pl-1 pr-1">
                    <div class="rounded-box grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <template v-for="_light_theme in light_themes">
                            <div class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-transparent hover:outline-base-200 shadow-sm"
                                :class="{ '!outline-primary': light_theme == _light_theme }"
                                @click="change_new_light_theme(_light_theme)">
                                <div :data-theme="_light_theme" class="bg-base-100 text-base-content cursor-pointer">
                                    <div class="grid grid-cols-5 grid-rows-3">
                                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                                        <div
                                            class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-1">
                                            <div class="theme">{{ _light_theme }}</div>
                                            <div class="flex flex-wrap gap-1">
                                                <div
                                                    class="bg-primary flex aspect-square w-5 items-baseline justify-center rounded">
                                                    <div class="text-primary-content font-bold"></div>
                                                </div>
                                                <div
                                                    class="bg-secondary flex aspect-square w-5 items-baseline justify-center rounded">
                                                    <div class="text-secondary-content font-bold"></div>
                                                </div>
                                                <div
                                                    class="bg-neutral flex aspect-square w-5 items-baseline justify-center rounded">
                                                    <div class="text-neutral-content font-bold"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <!-- dark theme -->
            <div class="collapse rounded-none" v-if="adaptive_style == 'adaptive'">
                <input type="checkbox" />
                <div class="collapse-title p-0">
                    <p class="flex justify-between items-baseline">
                        <span class="text-md font-bold">
                            <span class="icon"><i class="bi bi-moon-stars"></i></span>
                            <span> {{ $t("dark_theme") }} </span>
                        </span>

                        <span class="theme theme-shadow" :data-theme="dark_theme">{{ dark_theme }}</span>
                    </p>
                </div>
                <div class="collapse-content pl-1 pr-1">
                    <div class="rounded-box grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <template v-for="_dark_theme in dark_themes">
                            <div class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-transparent hover:outline-base-200 shadow-sm"
                                :class="{ '!outline-primary': dark_theme == _dark_theme }"
                                @click="change_new_dark_theme(_dark_theme)">
                                <div :data-theme="_dark_theme" class="bg-base-100 text-base-content cursor-pointer">
                                    <div class="grid grid-cols-5 grid-rows-3">
                                        <div class="bg-base-200 col-start-1 row-span-2 row-start-1"></div>
                                        <div class="bg-base-300 col-start-1 row-start-3"></div>
                                        <div
                                            class="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-1">
                                            <div class="theme">{{ _dark_theme }}</div>
                                            <div class="flex flex-wrap gap-1">
                                                <div
                                                    class="bg-primary flex aspect-square w-5 items-baseline justify-center rounded">
                                                    <div class="text-primary-content font-bold"></div>
                                                </div>
                                                <div
                                                    class="bg-secondary flex aspect-square w-5 items-baseline justify-center rounded">
                                                    <div class="text-secondary-content font-bold"></div>
                                                </div>
                                                <div
                                                    class="bg-neutral flex aspect-square w-5 items-baseline justify-center rounded">
                                                    <div class="text-neutral-content font-bold"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <!-- zh font -->
            <div class="collapse rounded-none" v-if="locale == 'zh' || locale == 'zh_tw' || locale == 'ja'">
                <input type="checkbox" />
                <div class="collapse-title p-0">
                    <p class="flex items-baseline justify-between">
                        <span class="text-md font-bold">
                            <span class="icon"><i class="bi bi-fonts" /></span>
                            <span> {{ $t("zh_font") }} </span>
                        </span>

                        <span :style="{ fontFamily: zh_font }">{{ zh_font }}</span>
                    </p>
                </div>
                <div class="collapse-content p-1">
                    <div class="rounded-box grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <template v-for="_zh_font in zh_fonts">
                            <div class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-transparent hover:outline-base-200 p-2 text-center cursor-pointer shadow-sm"
                                :class="{ '!outline-primary': zh_font == _zh_font }" :style="{ fontFamily: _zh_font }"
                                @click="update_zh_font(_zh_font)">
                                {{ _zh_font }}
                            </div>
                        </template>
                    </div>
                </div>
            </div>

            <!-- en font -->
            <div class="collapse rounded-none">
                <input type="checkbox" />
                <div class="collapse-title p-0">
                    <p class="flex items-baseline justify-between">
                        <span class="text-md font-bold">
                            <span class="icon"><i class="bi bi-type" /></span>
                            <span> {{ $t("en_font") }} </span>
                        </span>

                        <span :style="{ fontFamily: en_font }">{{ en_font }}</span>
                    </p>
                </div>
                <div class="collapse-content p-1">
                    <div class="rounded-box grid grid-cols-2 sm:grid-cols-3 gap-4">
                        <template v-for="_en_font in en_fonts">
                            <div class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-transparent hover:outline-base-200 p-2 text-center cursor-pointer shadow-sm"
                                :class="{ '!outline-primary': en_font == _en_font }" :style="{ fontFamily: _en_font }"
                                @click="update_en_font(_en_font)">
                                {{ _en_font }}
                            </div>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { adaptive_style, theme, light_theme, light_themes, dark_theme, dark_themes, zh_font, zh_fonts, en_font, en_fonts, update_font, update_theme, locale } from '@/util/config';
import Theme from './Theme.vue';

const change_adaptive_style = () => {
    if (adaptive_style.value == 'uniform') {
        adaptive_style.value = 'adaptive'
        localStorage.setItem("adaptive_style", 'adaptive')
    } else {
        adaptive_style.value = 'uniform'
        localStorage.setItem("adaptive_style", 'uniform')
    }

    update_theme(document.documentElement)
}

const change_new_light_theme = (new_light_theme: string) => {
    light_theme.value = new_light_theme
    localStorage.setItem('light_theme', new_light_theme)

    update_theme(document.documentElement)
}

const change_new_dark_theme = (new_dark_theme: string) => {
    dark_theme.value = new_dark_theme
    localStorage.setItem("dark_theme", new_dark_theme)

    update_theme(document.documentElement)
}

const update_zh_font = (new_zh_font: string) => {
    zh_font.value = new_zh_font
    localStorage.setItem("zh_font", new_zh_font)
    update_font()
}

const update_en_font = (new_en_font: string) => {
    en_font.value = new_en_font
    localStorage.setItem("en_font", new_en_font)
    update_font()
}
</script>

<style lang="scss">
.appearance {
    width: 420px;
    margin: auto;
}
</style>