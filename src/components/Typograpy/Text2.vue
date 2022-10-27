<script setup lang="ts">
import { TEXT_COLORS } from './constants'
import { defineProps } from 'vue';

interface Props {
    colorName: string;
}
const props = withDefaults(defineProps<Props>(), {
    colorName: TEXT_COLORS.LIGHT
})
</script>

<template>
    <p :class="`typography-text-h2 ${colorName}`">
        <slot/>
    </p>
</template>

<style scoped lang="scss">
    .typography-text-h2 {
        margin: 0;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 39px;
        &.light {
            color: #D9D9D9;
        }
        &.dark {
            color: #1E1E1E;
        }
    }
</style>