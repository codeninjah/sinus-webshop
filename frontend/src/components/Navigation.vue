<template>
  <div class="wrapper">
    <div id="nav">
      <div class="overNav">
       
        <div class="totheleft">
           <img src="@/assets/sinus-logo.png" alt="" />
           <router-link to="/" class="home-icon"
          ><img class="home-icon" src="@/assets/home-icon.png" alt=""
        /></router-link>
        
        </div>

        <section class="totheright">
           
          <img class="search" src="@/assets/magnify.png" alt="" />
          <router-link to="/myaccount" class="account-icon"
            ><img class="account-icon" src="@/assets/user.png" alt=""
          /></router-link>
          <router-link to="/kundkorg" class="cart-icon"
            ><img class="cart-icon" src="@/assets/cart-white.png" alt=""
          /></router-link>
          <img src="@/assets/wiggly-sinus.png" alt="" />
        </section>
      </div>

      

      <router-link to="/checkout">Checkout</router-link> |
      <router-link to="/loggin">LoggIn</router-link> | |
      <router-link to="/produkt">Produkt</router-link> |
      <router-link to="/produktlista">Produktlista</router-link> |

      <!--
      <router-link to="/authdemo">Auth demo</router-link>
      -->
      
    </div>
    <div class="underNav">
      <p>CHRISTMAS SALE <br />60%OFF</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss">
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
  justify-content: space-between;
  width: 200px;
}
.totheleft {
  display: flex;
  margin: 2px;
  flex-direction: row;
  justify-content: inherit;
  width: 200px;
}
.account-icon {
  max-width: 30px;
  max-height: 30px;
}

.cart-icon {
  max-width: 30px;
  max-height: 30px;
}
.home-icon {
  max-width: 30px;
  max-height: 30px;
}
.search {
  max-width: 30px;
  max-height: 30px;
}

#nav {
  height: 200px;

  background-image: url(../../src/assets/header-background.png);
  background-size: cover;
}

a {
  font-weight: bold;
  color: orange;
}
</style>
