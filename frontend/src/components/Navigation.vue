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
          <router-link  to="/Modal" class="cart-icon" >
          
            <div class="cart-img-wrapper">
              <img @click="$refs.modalName.openModal()"  class="cart-icon" src="@/assets/cart-white.png" alt=""  />
              <span>{{ cartLength }}</span>
            </div>
          </router-link>
          <img src="@/assets/wiggly-sinus.png" alt="" />
        </section>
      </div>

      <router-link to="/checkout">Checkout</router-link> |
      <router-link to="/loggin">LoggIn</router-link> | |
      <router-link to="/Register">Registration</router-link>

      <!--
      <router-link to="/produkt">Produkt</router-link> |
      <router-link to="/produktlista">Produktlista</router-link> |
      -->

      
      
    </div>
    <div class="underNav">
      <p>CHRISTMAS SALE <br />60%OFF</p>
    </div>
     
    

    
    <modal ref="modalName">
      <template v-slot:header>
        <!-- header delen av modalen ifall vi vill använda den eller fylla i någonting  -->
      </template>

      

      <template v-slot:footer>
        <!-- footer delen av modalen ifall vi vill använda den eller fylla i någonting -->
        <div>
          <!-- nu stängs modalen ner, men när checkout delen är klar så går den vidare dit. -->
          <button @click="$refs.modalName.closeModal()">Proceed to checkout</button>
        
        </div>
      </template>
    </modal>
  
  </div>
  
</template>

<script>
import Modal from "../components/Modal";
export default {
  name: "Navigation",
  components: { Modal },
  computed: {
    cartLength() {
      
      return this.$store.getters.getCartLength;
      
    },
   
    
  },
  
};

</script>

<style lang="scss">
// .wrapper{
//   padding: 10px 0;
// }
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
  padding: 10px 0;
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
  .cart-img-wrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 4px;
      position: absolute;
      top: -10px;
      right: -10px;
      height: 10px;
      width: 10px;
      background-color: red;
      border-radius: 50%;
    }
  }
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
