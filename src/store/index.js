import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    listado:[],
    filtroListado:[]
  },
  getters: {
  },
  mutations: {
    setListado(state,payload){
      state.listado = payload
    },
    setFiltroListado(state,payload){
      state.filtroListado = payload
    }
  },
  actions: {
    async consultaPlatillos({commit}){
      const {data} =  await axios.get('categorias.json')
      const [categoria] = await data
      console.log(data)
      console.log(categoria)
      commit('setListado',data)
      commit('setFiltroListado',categoria)
    },
    filtroId({commit,state},id){
      const resultado = state.listado.filter((filtroListado)=>{
          if(filtroListado.id == id){
            return filtroListado
          }
        
      })
      const resultad = console.log(id)
      commit('setFiltroListado',resultado)

    }
  },
  modules: {
  }
})
