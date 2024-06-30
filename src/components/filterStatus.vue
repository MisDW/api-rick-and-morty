<template>
    <ul class="filter">
        <li class="item" @click="filter('')">Todos</li>
        <li class="item" @click="filter('Alive')">Vivos</li>
        <li class="item" @click="filter('Dead')">Muertos</li>
        <li class="item" @click="filter('unknown')">Desconocido</li>
    </ul>
</template>

<script setup>

import { useStore } from 'vuex'
const store = useStore()
const filter = ( (  status ) =>{
    store.dispatch('filterByStatus', status)
})
</script>

<style scoped>
    .filter{
        width: 100%;
        margin: auto;
        background-color: #24292b;
        padding: 10px;
        border-radius: 0px 0px 20px 20px; 
        justify-content: center;
        position: sticky;
        top: 0px;
        color: #eaeaea;
        display: flex;
        flex-direction: row;
        gap: 30px;
        list-style: none;
        user-select: none;
        cursor: pointer;
        z-index: 2;
    }

    .item{
        background-color: transparent;
        padding: 10px 20px;
        transition: opacity 0.1s ease;
        border-radius: 10px;
        opacity: 0.8;
    }

    .item:hover{
        background-color: hsla(39, 72%, 58%, 0.194);
        opacity: 1;
    }

    @media screen and (max-width: 500px){
        .filter{
            width: 100%;
            display: flex;
            flex-direction: row;
            gap: 20px;
        }

        .item{
            padding: 5px;
        }

        .item:hover{
            background-color: hsla(39, 72%, 58%, 0.194);
        }
    }

</style>