<template>
  <div class="container__characters">
    <h1 class="title__characters">🛸 Rick and Morty 🚀</h1>
    <FilterName />
    <FilterStatus />
    <ListCharacters />
  </div>
</template>

<script setup>
import ListCharacters from "@/components/listCharacters.vue"; 
import FilterStatus from "@/components/filterStatus.vue"; 
import FilterName from "@/components/filterName.vue"

</script>

<style lang="scss" scoped>
.container__characters{
  display: flex;
  flex-direction: column; 
  justify-content: center;
  align-items: center; 
  gap: 20px;
  // background: red;   
}

.title__characters{
  color: #eaeaea;
}

</style>

