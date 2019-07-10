import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let defaultCity = '北京'
try {
  if (localStorage.city) {
    defaultCity = localStorage.city
  }
} catch (e) {

}

export default new Vuex.Store({
  state: {
    city: defaultCity
  },
  actions: {
    changeCity (ctx, cityName) {
      ctx.commit('changeCity', cityName)
    }
  },
  mutations: {
    changeCity (state, cityName) {
      state.city = cityName
      try {
        localStorage.city = cityName
      } catch (e) {

      }
    }
  }
})
