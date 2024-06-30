<template>
  <div class="container__characters">
    <h1 class="title__characters">Rick and Morty</h1>
    <ListCharacters />
  </div>
</template>

<script setup>
import ListCharacters from "@/components/listCharacters.vue"; 


</script>

<style lang="scss" scoped>
.container__characters{
  display: flex;
  flex-direction: column; 
  align-items: center; 
  gap: 20px;
  // background: red;   
}

.title__characters{
  color: #eaeaea;
}

</style>

