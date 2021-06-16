<template>
  <div class="wrapper">
    <div v-if="loggedIn">
      <button @click="loggOut">Sign out</button>
      <h1>My Account</h1>
      <ul class="listWrapper">
        <li class="listInfo">
          <p>User Name: {{ loggedInUserData.name }}</p>
          <p>User Role: {{ loggedInUserData.role }}</p>
          <p>User email: {{ loggedInUserData.email }}</p>
          <p>User city: {{ loggedInUserData.address.city }}</p>
          <p>User zip: {{ loggedInUserData.address.zip }}</p>
          <p>User street: {{ loggedInUserData.address.street }}</p>
          <p class="orderHistory">Order history : {{ $store.state.getHistory }}</p>
        </li>
      </ul>
      <ul class="imgList">
            <li class="listItems" v-for="product in getCart"
                :key="product.id">
                
            </li>
        </ul>

        


        
    </div>
    <div v-if="!loggedIn">
      <h1>Du är inte inloggad!</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      loggedIn: false,
      loggedInUserData: "",
      cart: ""
    };
  },

  

  methods: {
    loggOut() {
      //this.$store.dispatch('clearLocalStorage')

      localStorage.removeItem("user");
      localStorage.removeItem("token");
      this.loggedIn = false;
      console.log("You logged out!");
      this.$router.push("/");
    },

         orderHist(){
          return this.$store.dispatch("orderHistory") 
        }
        
    
    

    
  },

  created() {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      this.loggedIn = true;
      console.log("MyAccounts vy getItem successfull!");
      //FÖLJANDE RAD BEHÖVER ERSÄTTAS/BYGGAS PÅ
      //this.$store.dispatch("getUser")
      // Retrieve the object from storage

      //DE FÖLJANDE 2 RADERNA ÄR FRÅN VUEX
      //localStorage.setItem("token", token);
      //localStorage.setItem("user", JSON.stringify(userDB));

      const loggedInUser = localStorage.getItem("user");
      this.loggedInUserData = JSON.parse(loggedInUser);

      console.log("inloggadUser: ", JSON.parse(loggedInUser));

      console.log("This route: " + this.$route);
      console.log("This router: " + this.$router);
      //console.log("More user stuff: ", this.user.adress)
    }
  },

 

  computed: {

    getCart(){
    return this.$store.getters.getCart
    },
    
    user() {
      return this.$store.getters.user;
    },
    userDetails() {
      if (this.user) {
        return {
          name: this.user.name,
          orderHistory: this.user.orderHistory
        };
      } else {
        return {};
      }
    },
  },
};
</script>

<style lang="scss" scoped>

.listInfo {
  
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 600px;
  text-decoration: none;
  background: wheat;
 
 
  margin: auto;
  padding: 5px;
 
  display: flex;

}

.orderHistory{
font-weight: bold;
font-style: italic;
}



</style>
