<template>
    <input type="text" class="search-btn" v-model="name" @keyup="filter()"/>
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

</style>