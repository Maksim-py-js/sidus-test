<script setup lang="ts">
    import { defineProps, defineEmits } from 'vue';
    import Text3 from '@/components/Typograpy/Text3.vue'
    import { TEXT_COLORS } from '../Typograpy/constants'


    interface ArrayObject {
        id: number | string
        name: string
        isCompleted: boolean
    }

    interface Props {
        listArray: Array<ArrayObject>
    }

    const props = withDefaults(defineProps<Props>(), {
        listArray() {
            return []
        }
    })

    const emit = defineEmits<{
        (e: 'event', id: number | string): void
    }>()

</script>

<template>
    <div class="todo-list">
        <ul>
            <li
                v-for="(item, i) in listArray" 
                :key="i" 
                :class="{ isCompleted: item.isCompleted }" 
                @click="$emit('event', item.id)"
            >
                <Text3 :color="TEXT_COLORS.DARK">
                    {{ item.name }}
                </Text3>
            </li>
        </ul>
    </div>
</template>



<style scoped lang="scss">
    .todo-list {
        ul {
            padding-left: 25px;
            margin: 0;
            li {
                &:hover {
                    cursor: pointer;
                }
                &.isCompleted {
                    text-decoration: line-through;
                }
            }
        }
    }
</style>