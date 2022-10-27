<script setup lang="ts">
import { ref, defineProps, defineEmits, onMounted } from 'vue';
import Arrow from '@/assets/svg/Arrow.vue'
import Text2 from './Typograpy/Text2.vue'
import { TEXT_COLORS } from './Typograpy/constants'

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

const openPopup : any = ref(null)
let widthContainer : any = ref(0)

const mounted = onMounted(function() {
    widthContainer = ref(openPopup.value.offsetWidth)  
    toStartPosition()
})

const toStartPosition = function() {
    openPopup.value.style[props.position] = '-' + (widthContainer.value / 2 - 29) + 'px'
}

const emit = defineEmits<{
  (e: 'openContainer', idContainer: string, position: string): void
}>()

</script>

<template>
    <div 
        :id="`open-popup-${idContainer}`"
        :class="`open-popup ${isShow ? 'isShow' : ''} ${position}`" 
        @click="$emit('openContainer', idContainer, position)"
        ref="openPopup"
    >
        <Text2 :color="TEXT_COLORS.LIGHT">{{ title }}</Text2>
        <Arrow />
    </div>
</template>


<style lang="scss">
    .open-popup {
        display: flex;
        align-items: center;
        background: #1E1E1E;
        border-width: 1px 1px 0px 1px;
        border-style: solid;
        border-color: #929292;
        position: absolute;
        top: 50%;
        padding: 10px 12px;
        transition: .4s;
        &:hover {
            cursor: pointer;
            transition: .4s;
            background: rgba(146, 146, 146, .5);
        }
        &.left {
            transform: translateY(-50%) rotate(90deg);
            svg {
                order: -1;
                transform: rotate(90deg);
                margin-right: 17px;
            }
        }
        &.right {
            transform: translateY(-50%) rotate(-90deg);
            svg {
                transform: rotate(90deg);
                margin-left: 17px;
            }
        }
        button {
            background: transparent;
        }
    }
</style>