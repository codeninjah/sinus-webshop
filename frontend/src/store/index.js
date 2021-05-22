import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { setToken } from "@/api/index.js";
import { LOGIN_URL, REGISTER_URL, USER_URL } from "@/api/index.js";
import { get, post } from "@/api/index.js";
//import VueRouter from 'vue-router';



Vue.use(Vuex);
const defaultUser = {
  email: "",
  name: "",
  role: "",
  address: {
    street: "",
    zip: "",
    city: "",
  },
};

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

    //Jobbar med att få fram nummer av varje enskilt produkt
    getNumberOfEachProduct(){
        var counts = {};
        var aarr = ['Alex','Alex','Alex','Abbas','Abbas']//context.getters.getCart //Här måste det ändras för att få fram cart
        aarr.forEach(x=>counts[x]=(counts[x] || 0)+1 );
        //console.log("Alex och Abbas RULES!")
        console.log(counts)
    },

    //HÄR BÖRJAR JAG SKISSA PÅ ATT FÅ FRAM INLOGGAD USER
    checkLocalstorage(context) {
      if (localStorage.getItem("token") !== null) {
        let token = localStorage.getItem("token");
        setToken(token);
        let user = localStorage.getItem("user");
        user = JSON.parse(user);
        context.state.user = user;
      }
    },
    clearLocalstorage() {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    },
    async checkLogin(context, userLogin) {
      const userCheck = await post(LOGIN_URL, userLogin);
      const token = userCheck.data.token;

      if (userCheck.status === 200) {
        alert("Logged in");
        setToken(token);
        const userDB = await get(USER_URL);
        context.state.user = userDB;

        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(userDB));
        //this.$router.push("/myaccount");
      }
    },
    async registerUser(context, newUser) {
      const response = await post(REGISTER_URL, newUser);
      if (response.status === 200) {
        alert("Success");
      } else {
        alert("Something went wrong");
      }
    },

  },

  modules: {
    
  },
});
