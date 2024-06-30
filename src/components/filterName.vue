<template>
    <div class="container__inputs">
        <input type="text" class="inputs search__input" v-model="name" @keyup="filter()" placeholder="Busca tu personaje"/>
        <button class="inputs search__btn"><i class="fa fa-search" aria-hidden="true"></i>
        </button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const name = ref('')

const filter = ( ) =>{
    store.dispatch('filterByName', name.value)
}
</script>

<style scoped>
    .container__inputs{
        display: flex;
        flex-direction: row;
    }
    
    .inputs{
        padding: 10px 20px;
        border: 0px;
        outline: none;
    }

    .search__input{
        border-radius: 20px 0px 0px 20px;
    }

    .search__btn{
        border-radius: 0px 20px 20px 0px;
        background-color: #e1ac48;
        color: #f5f5f5;
    }

</style>