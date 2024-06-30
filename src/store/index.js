import { createStore } from 'vuex'
// STATE
export default createStore({
  state: {
    characters: [], // personajes
    charactersFilter: [] // personajes filtrados para no llamar de nuevo a la api
  },
  mutations:{
    setCharacters(state, payload){
      state.characters = payload
    },
    setCharactersFilter(state, payload){
      state.charactersFilter = payload
    }
  },
  actions:{
    async getCharacters({commit}){
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character/?page=1')
        const data = await response.json()
        console.log(data.results)
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
          console.error(error);
      }
    },
    filterByStatus({commit, state}, status){
       const results = state.characters.filter((character) =>{
        return character.status.includes(status)
       })
       commit('setCharactersFilter', results)
    },
    filterByName({commit, state}, name){
      const formatLower = name.toLowerCase();
      const results = state.characters.filter((character) =>{
        const characterName= character.name.toLowerCase()
        if (characterName.includes(formatLower)) {
          return character
        }
      })
      commit('setCharactersFilter', results)
   }

  },
  modeles:{

  }
})

