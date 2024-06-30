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
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)
      } catch (error) {
          console.error(error);
      }
    }
  },
  modeles:{

  }
})

