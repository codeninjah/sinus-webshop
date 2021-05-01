import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { setToken} from '@/api/index.js';
import {LOGIN_URL, REGISTER_URL, USER_URL } from '@/api/index.js'
import { get, post} from '@/api/index.js'
import products from "./products.store";
import user from "./user.store";




Vue.use(Vuex);
const defaultUser = {
  email: "",
  name: "",
  role: "",
  address: {
    street: "",
    zip: "",
    city: ""
  }
}

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    user: defaultUser,
  },

  getters: {
    getProduct: (state) => (id) => {
      return state.products.find((prod) => id == prod.id);
    },
    getCartLength: (state) => state.cart.length,

    getCart: (state) => state.cart,

    //user stuff
    getUser(state) {
      return state.user;
    },
  },

  mutations: {
    GET_PRODUCTS(state, products) {
      state.products = products;
    },
    ADD_TO_CART(state, payload) {
      state.cart.push(payload);
      console.log(state.cart);
    },
    //User stuff
    CURRENT_USER(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    getProducts({ commit }) {
      axios
        .get("http://localhost:5000/api/products/")
        .then((response) => {
          commit("GET_PRODUCTS", response.data.products);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    addToCart({ commit }, payload) {
      commit("ADD_TO_CART", payload);
    },

    //HÄR BÖRJAR JAG SKISSA PÅ ATT FÅ FRAM INLOGGAD USER
    checkLocalstorage(context) {
      if (localStorage.getItem('token') !== null) {
        let token = localStorage.getItem('token');
        setToken(token);
        let user = localStorage.getItem('user');
        user = JSON.parse(user);
        context.state.user = user;
       
      }
      console.log(context)
    },
    clearLocalstorage() {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
    },
    async checkLogin(context, userLogin) {        
      const userCheck = await post(LOGIN_URL, userLogin);
      const token = userCheck.data.token;

      if (userCheck.status === 200) {
        alert("LOGGAT IN");
        setToken(token);
        const userDB = await get(USER_URL);
        context.state.user = userDB;

        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userDB));

        
      }
    },
    async registerUser(context, newUser) {
      const response = await post(REGISTER_URL, newUser);
      if (response.status === 200) {
        alert("Du är registrerad!");
      }
      else {
        alert("Något gick fel... :(");
      }
      //A must...
      console.log(context);
    },
    
    

  },

  modules: {
    productsModule: products,
    userModule: user,
  },
});

