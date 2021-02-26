<template>
  <div id="app">
    <div class="overNav">
      <img src="@/assets/sinus-logo.png" alt="" />

      <section class="totheright">
        <img src="@/assets/magnify.png" alt="" />
        <router-link to="/myaccount" class="account-icon"><img class="account-icon" src="@/assets/user.png" alt="" /></router-link>
        <router-link to="/kundkorg" class="cart-icon"><img class="cart-icon" src="@/assets/cart-white.png" alt=""/></router-link>
        <img src="@/assets/wiggly-sinus.png" alt="" />
      </section>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/checkout">Checkout</router-link> |
     
      <router-link to="/loggin">LoggIn</router-link> |
       |
      <router-link to="/produkt">Produkt</router-link> |
      <router-link to="/produktlista">Produktlista</router-link> |
    </div>
    <div class="underNav">
      <p>CHRISTMAS SALE <br />60%OFF</p>
    </div>
    <router-view />
    <footer class="footer">
       <img src="@/assets/footer-icons.png" alt="" />
    </footer>
  </div>
</template>

<script>
export default {};
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

.totheright {
  display: flex;
  margin: 5px;
  flex-direction: row;
  justify-content: space-around;
  width: 200px;
  
}

.cart-icon {
  height: -webkit-fill-available;
  display: flex;
  justify-content: space-evenly;
}

.account-icon {
  height: -webkit-fill-available;
  display: flex;
  justify-content: space-evenly;
}

.app{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
html,
body {
  
  background-color: #b72929;
  margin:0%;
  padding:0%;
  }


 .footer {
   position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem;  
  }
</style>
