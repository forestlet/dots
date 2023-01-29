<script setup lang="ts">
</script>

<template>
    <div class="tab-bar">
        <div class="sub-tab">
            <div class="tab-item" id="collection">
                <router-link to="/">
                    <i class="bi bi-front"></i>
                </router-link>
            </div>
        </div>

        <div class="sub-tab">
            <div class="tab-item" id="setting">
                <router-link to="/setting">

                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.tab-bar {
    width: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-between;

    .sub-tab {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .tab-item {
        width: 100%;
        border-radius: 4px;
        box-sizing: border-box;

        &:hover {
            cursor: pointer;
        }

        a {
            display: block;
            width: 100%;
            padding: 6px 0;
            font-weight: bolder;
            border-radius: 4px;
        }
    }


    .router-link-exact-active button {
        background-color: var(--el-fill-color-light);
    }
}
</style>
