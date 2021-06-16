import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { setToken } from "@/api/index.js";
import { LOGIN_URL, REGISTER_URL, USER_URL, } from "@/api/index.js";
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
    final:[],
    orderHistory:[]
  },

  getters: {
    getProduct: (state) => (id) => {
      return state.products.find((prod) => id == prod.id);
    },
    getCartLength: (state) => state.cart.length,
    getCart: (state) => state.cart,

    getFinal: (state) =>  {
      console.log(state.final)
     return state.final
     
    },
    
    
    
    
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

    getFinal(state, final){
      state.final = final
      
    },

    getOrder(state, orderHistory){
      state.orderHistory = orderHistory
      
    }
    
   
  },

// skicka order till databas
// hämta datan från databasen till frontenden genom defaultUser orderHistory

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

    // async orderHistory(context) 
    //   const response = await get(ORDER_URL);
    //   context.state.orderHistory = response;
    // },
        
    
    //Summa av alla varor funktion.
    finalSum({commit}) {
      
      let gear = this.state.cart
      
      let sum = []
      for(let i=0; i<gear.length; i++){
        // let count = i + ": " + loot[i].price;
        let count = gear[i].price;
        sum.push(count)
        let final = sum.reduce((a, b) => a + b, 0)
        
        this.state.orderHistory.push(count)
        console.log(this.state.orderHistory, "hej")
        commit("getFinal", final)
        
      } 
  
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