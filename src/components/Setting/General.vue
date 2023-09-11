<template>
    <div class="general">
        <!-- language -->
        <div class="collapse rounded-none">
            <input type="checkbox" />
            <div class="collapse-title p-0">
                <p class="flex items-baseline justify-between">
                    <span class="text-md font-bold">
                        <span class="icon"><i class="bi bi-translate"></i></span>
                        <span> {{ $t("language") }} </span>
                    </span>

                    <span>{{ $t(locale) }}</span>
                </p>
            </div>
            <div class="collapse-content p-1">
                <div class="rounded-box grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <template v-for="_language in languages">
                        <div class="overflow-hidden rounded-lg outline outline-2 outline-offset-2 outline-transparent hover:outline-base-200 p-2 text-center cursor-pointer shadow-sm"
                            :class="{ '!outline-primary': locale == _language }" @click="changeLocale(_language as any)">
                            {{ $t(_language) }}
                        </div>
                    </template>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { locale } from '@/data/locale';
import { changeLocale } from '@/i18n/i18n';
const languages = ["zh", "en"]
</script>

<style lang="scss">
.general {
    width: 420px;
    margin: auto;
}
</style>