<script setup lang="ts">
import { defineEmits } from 'vue';

const emit = defineEmits(['clickEmit'])
</script>

<template>
    <button class="button-ui" @click="emit('clickEmit')">
        <slot />
    </button>
</template>

<style lang="scss">
    .button-ui {
        background: #1E1E1E;
        border-radius: 5px;
        padding: 9px;
        border: none;   
        &:hover {
            cursor: pointer;
        }
    }
</style>