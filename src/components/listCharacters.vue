<template>
    <section>
        <div class="characters">
            <div class="characters__item" v-for="character in characters" :key="character.id">
                <CardCharacter :character="character" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
import CardCharacter from './cardCharacter.vue';

const store = useStore();
const characters = computed (() => {
    return store.state.charactersFilter
})
onMounted(() => {
    // store accede a la carpera store
    // dispatch para acceder a las actions
    store.dispatch('getCharacters');
})  

</script>


<style scoped>

.characters{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

</style>