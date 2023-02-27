<template>
    <div class="general">
        <el-form label-width="120px" label-position="left">
            <el-form-item>
                <template #label>
                    <span class="icon"> <i class="bi bi-translate"></i></span>
                    <span> {{ $t("message.setting.general.language-form-item") }} </span>
                </template>

                <el-select v-model="locale" :placeholder='$t("message.setting.general.language-form-item")'>
                    <el-option v-for="item in locale_options" :key="item"
                        :label='$t(`message.setting.general.language.${item}`)' :value="item" />
                </el-select>
            </el-form-item>
        </el-form>
    </div>
</template>

<script lang="ts" setup>
import { locale } from '@/data/locale';
const locale_options = ["cn", "en"]
</script>

<style lang="scss">
.general {
    width: 420px;
    margin: auto;

    .el-form-item__content {
        justify-content: flex-end;
        flex-wrap: nowrap;
    }

    .active {
        background-color: var(--el-color-info-light-9) !important;
    }

    .icon {
        margin-right: 12px;
    }
}
</style>