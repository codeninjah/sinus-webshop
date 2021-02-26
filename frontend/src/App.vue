<template>
  <div id="app">
   
    <div class="overNav">
      <img src="@/assets/sinus-logo.png" alt="">

      <div class="totheright">
        <img src="@/assets/cart.png" alt="">
        <img src="@/assets/wiggly-sinus.png" alt="">
        </div>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/checkout">Checkout</router-link> |
      <router-link to="/kundkorg">Kundkorg</router-link> |
      <router-link to="/loggin">LoggIn</router-link> |
      <router-link to="/myaccount">My Account</router-link> |
      <router-link to="/produkt">Produkt</router-link> |
      <router-link to="/produktlista">Produktlista</router-link> |
    </div>
    <div class="underNav">
      <p>CHRISTMAS SALE <br />60%OFF</p>
    </div>
    <router-view />
  </div>
</template>


<script>
export default {
   
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  background-image: url(../src/assets/header-background.jpg);
  

  a {
    font-weight: bold;
    color: orange;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.underNav {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: rgb(31, 29, 29);
  font-weight: bold;
  color: red;
  height: 4rem;
}

.overNav {
  
  display: flex;
  flex-direction: row;
  
  justify-content: space-between;
  background-color: rgb(31, 29, 29);
  color: white;
  height: 2.5rem;

}

.totheright{
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  

}

html,
body {
  background-color: #b72929;
}
</style>
