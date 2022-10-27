<script setup lang="ts">
    import { ref, onMounted } from 'vue'
    import Button from '@/components/Button/Button.vue'
    import Text3 from '@/components/Typograpy/Text3.vue'
    import Heart from '../assets/svg/Heart.vue'
    
    const hearts : any = ref([])

    const kittyContainer : any = ref(null)
    let heightContainer : any = ref(0)
    let widthContainer : any = ref(0)

    const mounted = onMounted(function() {
        heightContainer = ref(kittyContainer.value.offsetWidth)
        widthContainer = ref(kittyContainer.value.offsetWidth)        
    })

    const likePhoto = function() {
        hearts.value.push({
            top: Math.floor(Math.random() * 170) + 'px',
            left: Math.floor(Math.random() * 170) + 'px'
        })
    }
</script>

<template>
    <div class="flex-column" ref="kittyContainer">
        <img src="@/assets/KITTY.jpeg">
        <Button @clickEmit="likePhoto">
            <Text3>AWW :3</Text3>
        </Button>
        <Heart 
            class="heart"
        v-for="(heart, index) in hearts"
        :key="index" 
            :style="`top: ${heart.top}; left: ${heart.left};`" 
        />
    </div>
</template>

<style lang="scss">
    .flex-column {
        position: relative;
        display: flex;
        flex-direction: column;
        img {
            margin-bottom: 16px;
        }
    }
    svg.heart {
        width: 60px;
        height: 60px;
        position: absolute;
        animation-name: animateHeart;
        animation-duration: 2s;
    }
    @keyframes animateHeart {
        from {
            opacity: 0; 
            padding-top: 60px;
        }
        to {
            opacity: 1; 
            padding-top: 0;
        }
    }
</style>