import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

import products from './products.store'
import user from './user.store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    cart: []
  },
  getters: {
    getProduct: (state) => (id) => {
      return state.products.find(prod => id == prod.id)
    },
    getCartLength: (state) => state.cart.length,
    
    getCart: (state) => state.cart,
    
    
  },
  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products
    },
    ADD_TO_CART(state, payload) {
      state.cart.push(payload)
      console.log(state.cart)
    }
  },
  actions: {
    getProducts({commit}) {
      axios.get('http://localhost:5000/api/products/')
        .then((response) => {
          commit('GET_PRODUCTS', response.data.products)
        })
        .catch((err) => {
          console.error(err)
        })
    },
    addToCart({commit}, payload){
       commit('ADD_TO_CART', payload)        
    }
  },
  modules: {
    productsModule : products,
    userModule : user
  }
})