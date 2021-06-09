<template>
    <div class="wrapper">
        <h1>These items are in your cart, press purchase to checkout!</h1>
        <div class="listWrapper">
        <ul class="imglist">
            <li class="listItems" v-for="product in getCart"
                :key="product.id">
                {{product.title}}
                {{product.price}}
            <img :src="require(`@/assets/${product.imgFile}`)" />
                
            </li>
        </ul>
        </div>
        <div class="btnWrapper">

        <button class="checkoutBtn" @click="countProducts">Purchase</button>
        </div>
        <p>Your sum total is ...</p>
    </div>
</template>


<script>
export default {
    name: "Checkout",

    computed:{
        getCart(){
            return this.$store.getters.getCart
        },

    },

    //This is not working
    
    
    methods: {
         countProducts(){
          return this.$store.dispatch("getNumberOfEachProduct")
        }
        
    }
    
}

</script>


<style scoped>

.checkoutBtn{
    width: 100px;
    border-radius: 10%;
        margin-left: 39px;
}

.imglist {
  display: flex;
  flex-direction: row;
  height: 400px;
  margin: 0%;
  padding: 0%;
  background-color: #ffffff17;
}

.listItems {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  text-decoration: none;
  background: repeating-radial-gradient(#ffffff08, transparent 100px);
  overflow: hidden;
  border-radius: 6%;
  margin: auto;
  padding: 5px;
  box-shadow: 1px;
  box-shadow: 0px 0 1px 0px #0000003d;
  display: flex;
  justify-content: space-between;
}

.listWrapper {
  min-height: 400px;
  margin: 2%;
}

</style>