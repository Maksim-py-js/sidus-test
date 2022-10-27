<script setup lang="ts">
import { ref } from 'vue'
import PopupContainer from '@/components/PopupContainer.vue'
import OpenPopup from '@/components/OpenPopup.vue'
import TodoList from '@/components/TodoList/TodoList.vue'
import LikedContainer from '@/components/LikedContainer.vue'
import { TEXT_COLORS } from '../Typograpy/constants'
import { makeToDoList, closeContainer, openContainer, titleCount } from '../../mainFunctions'
import { SHOPPING_LIST, BOOKS } from './constants'


const shoppingList : any = ref(makeToDoList(SHOPPING_LIST, null))
const booksToRead : any = ref(makeToDoList(BOOKS, null))

function toggleItemShopping(id: number | string) {
    const newList : any = makeToDoList(shoppingList.value, id);
    shoppingList.value = newList  
}
function toggleItemBooks(id: number | string) {
    const newList : any = makeToDoList(booksToRead.value, id);
    booksToRead.value = newList  
}
</script>


<template>
    <div class="main-section">
        <div class="grid-container">
            <div class="grid-container__section">
                <PopupContainer 
                    idContainer="popup_1" 
                    :title="titleCount(shoppingList, 'SHOPPING LIST ')" 
                    position="left"
                    @closeContainer="closeContainer"
                >
                    <TodoList 
                        :listArray="shoppingList" 
                        @event="toggleItemShopping"
                    />
                </PopupContainer>
                <OpenPopup 
                    idContainer="popup_1" 
                    :title="titleCount(shoppingList, 'SHOPPING LIST ')" 
                    position="left"
                    @openContainer="openContainer"
                />
            </div>
            <div class="grid-container__section">
                <PopupContainer 
                    idContainer="popup_2" 
                    title="KITTY" 
                    position="right"
                    @closeContainer="closeContainer"
                >
                    <LikedContainer />
                </PopupContainer>
                <OpenPopup 
                    idContainer="popup_2" 
                    title="KITTY" 
                    position="right" 
                    @openContainer="openContainer"
                />
            </div>
            <div class="grid-container__section">
                <PopupContainer 
                    idContainer="popup_3" 
                    title="MAMAAA OOOO" 
                    position="left"
                    @closeContainer="closeContainer"
                >
                    <Text3 :color="TEXT_COLORS.DARK">THIS ONE IS NOT A LIST - JUST SOME PLAIN OL’ TEXT.</Text3>            
                    <br><br>
                    <Text3 :color="TEXT_COLORS.DARK">IS THIS THE REAL LIFE </Text3>
                    <Text3 :color="TEXT_COLORS.DARK">IS THIS JUST FANTASY</Text3>
                    <Text3 :color="TEXT_COLORS.DARK">CAUGHT IN A LANDSIDE</Text3>
                    <Text3 :color="TEXT_COLORS.DARK">NO ESCAPE FROM REALITY</Text3>
                    <br><br>
                    <Text3 :color="TEXT_COLORS.DARK">
                    BY THE WAY IF THERE WAS A REALLY LONG LINE, I’M PRETTY SURE AT SOME POINT IT WOULD WRAP TO THE NEXT LINE. JUST LIKE THE OTHER ELEMENTS ON THIS PAGE, THIS ONE HAS A PRE-DEFINED MAX-WIDTH 
                    </Text3>  
                </PopupContainer>
                <OpenPopup 
                    idContainer="popup_3" 
                    title="MAMAAA OOOO" 
                    position="left" 
                    @openContainer="openContainer"
                />
            </div>
            <div class="grid-container__section">
                <PopupContainer 
                    idContainer="popup_4" 
                    :title="titleCount(booksToRead, 'BOOKS TO READ ')" 
                    position="right"
                    @closeContainer="closeContainer"
                >
                    <TodoList 
                        :listArray="booksToRead" 
                        @event="toggleItemBooks"
                    />
                </PopupContainer>
                <OpenPopup 
                    idContainer="popup_4" 
                    :title="titleCount(booksToRead, 'BOOKS TO READ ')" 
                    position="right" 
                    @openContainer="openContainer"
                />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
    .grid-container {
        display: grid;
        width: 100vw;
        height: 100vh;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        position: relative;
        &__section {
            position: relative;
            &:nth-child(2n) {
                .popup-container {
                    right: 0;
                    left: auto;
                }
            }
        }
        .popup-container {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);    
        }
    }
</style>