<template>
    <div class="character">
        <img class="img__character" :src="character.image" :alt="character.name">
        <div class="character__info">
            <div class="block__info">
                <div class="name">
                    <h3>{{ character.name }}</h3>
                    <p class="character__gender">{{ character.gender == 'Male' ? 'Hombre' : character.gender == "Female" ? 'Mujer' : character.gender }}</p>
                </div>
                <div class="block__info_character">
                    <div :class=" character.status == 'Alive' ? 'container__status green' : character.status == 'Dead' ? 'container__status red' : 'container__status yellow'">
                        <div :class=" character.status == 'Alive' ? 'circle alive' : character.status == 'Dead' ? 'circle dead' : 'circle default'" ></div>  
                        <span>{{ character.status == 'Alive' ? 'Vivo' : character.status == 'Dead' ? 'Muerto' : 'Desconocido'}}</span>
                    </div>
                    <div> {{ character.species == 'Human' ? 'Humano' : character.species == 'unknown' ? 'Desconocido' : character.species}} </div>  
                </div>
            </div>
            <div class="block__ubication">
                <div class="origin">
                    <span>
                        Origen:
                        {{ character.origin.name == 'unknown' ? 'Desconocido' : character.origin.name }}
                    </span>
                </div>
                <div class="Location">
                    <span>
                        <i class="fa fa-globe" aria-hidden="true"></i>
                        {{ character.location.name }}
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
    character: Object
});
</script>

<style scoped>
p{
    padding: 0px;
    margin: 0px;
}

h3{
    padding: 0px;
    margin: 0px;
    color: #efecec;
}

.character{
    display: flex;
    flex-direction: column;
    padding: 20px;
    border-radius: 1rem;
    max-width: 200px;
    background-color: #353b3c;
    gap: 10px;
}

.name{
    display: flex;
    flex-direction: column
}

.character__gender{
    color: #adadad;
}

.character__info{
    color: #eaeaea;
}

.block__info{
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.block__info_character{
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    justify-content: space-between;

}

.block__ubication{
    display: flex;
    flex-direction: column;
    gap: 20px; 
}

.img__character{
    width: 100%;
    border-radius: 1rem;
}

.container__status{
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    padding: 5px 20px;
    border-radius: 20px;
    width: fit-content
}

.status{
    align-items: center; 
    display: flex;
    flex-direction: row;
    gap: 10px; 
}

.circle{
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 100%;
}

.alive{ 
    background-color: #5db95d;
}

.dead{
    background-color: #b95d5d;
}

.default{   
    background-color: #b1b95d;
}

.green{
    background-color: rgba(94, 186, 94, 0.196)
}

.yellow{
    background-color: rgba(186, 183, 94, 0.196)
}

.red{
    background-color: rgba(186, 94, 94, 0.196)
}


.status{
    display: flex;
    flex-direction: row;
}

</style>