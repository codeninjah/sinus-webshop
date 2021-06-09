<template>
    <div class="wrapper">
<<<<<<< HEAD
        <h1>These items are in your cart, press purchase to checkout!</h1>
        <div class="listWrapper">
        <ul class="imglist">
=======
        <h1>Checkout vyn</h1>
        <div class="listWrapper">
        <ul class="imgList">
>>>>>>> 030f38522560f98c1ad44bfedcfd7d25efc86ddd
            <li class="listItems" v-for="product in getCart"
                :key="product.id">
                {{product.title}}
                {{product.price}}
<<<<<<< HEAD
            <img :src="require(`@/assets/${product.imgFile}`)" />
                
=======

                
            <img :src="require(`@/assets/${product.imgFile}`)" />
>>>>>>> 030f38522560f98c1ad44bfedcfd7d25efc86ddd
            </li>
        </ul>
        </div>
        <div class="btnWrapper">

        <button class="checkoutBtn" @click="countProducts">Summarize</button>
       
        </div>
<<<<<<< HEAD
        <p>Your sum total is ...</p>
=======
         <p>
            {{getFinal}}
             </p>
       
                
           
        
        
        
>>>>>>> 030f38522560f98c1ad44bfedcfd7d25efc86ddd
    </div>
    
</template>


<script>

export default {
    name: "Checkout",

    computed:{
        getCart(){
            return this.$store.getters.getCart
        },

        getFinal(){
            return this.$store.getters.getFinal
        }

    },

    //This is not working
    
    
    methods: {
         countProducts(){
          return this.$store.dispatch("finalSum") 
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

<<<<<<< HEAD
.imglist {
=======
.imgList {
>>>>>>> 030f38522560f98c1ad44bfedcfd7d25efc86ddd
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