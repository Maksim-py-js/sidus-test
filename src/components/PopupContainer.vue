<script setup lang="ts">
import { defineProps, defineEmits, onMounted } from 'vue';
import { TEXT_COLORS } from './Typograpy/constants'

import Arrow from './svg-icons/Arrow.vue'
import Button from './Button/Button.vue'

interface Props {
  idContainer: string
  title: string
  position: string,
  isShow: boolean
}
const props = withDefaults(defineProps<Props>(), {
  idContainer: '',
  title: '',
  position: 'left',
  isShow: false
})

const mounted = onMounted(function() {
  emit('closeContainer', props.idContainer, props.position, true)
})

const emit = defineEmits<{
  (e: 'closeContainer', idContainer: string, position: string, isFast: boolean): void
}>()

</script>

<template>
    <div 
      :id="idContainer"
      :class="`popup-container ${position} ${ isShow ? 'isShow' : ''} ${position ? 'popup-container__traingle--' + position : ''}`"         
    >
      <div class="popup-container__title">
        <Text2 :color="TEXT_COLORS.DARK">{{ title }}</Text2>
      </div>
      <Button 
        :class="`popup-container__arrow ${position}`" 
        @clickEmit="$emit('closeContainer', idContainer, position)"
      >
        <Arrow />
      </Button>
      <slot />
    </div>
</template>

<style scoped lang="scss">
  .popup-container {
    padding: 42px 38px;
    background: #929292;
    position: relative;
    max-width: 600px;
    &__traingle-- {
      &left {
        background: linear-gradient(-60deg, transparent 25px, #929292 0), linear-gradient(60deg, transparent 25px, transparent 0);
      }
      &right {
        background: linear-gradient(60deg, transparent 25px, #929292 0), linear-gradient(-60deg, transparent 25px, transparent 0);
      }
    }
    &__title {
      margin-bottom: 48px;
    }
    &__arrow {
      background: #1E1E1E;
      border-style: solid;
      border-color: #929292;
      width: 45px;
      height: 45px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 0;
      transition: .4s;
      &:hover {
        transition: .4s;
        cursor: pointer;
        background: rgba(146, 146, 146, .5);
      }
      &.left {
        border-width: 1px 1px 1px 0px;
        right: -45px;
      }
      &.right {
        border-width: 1px 0px 1px 1px;
        left: -45px;
        svg {
          transform: rotate(180deg);
        }
      }
    }
  }
</style>
