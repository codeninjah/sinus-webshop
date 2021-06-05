<template>
    <div class="wrapper">
        <h1>Checkout vyn</h1>
        <div class="listWrapper">
        <ul class="imgList">
            <li class="listItems" v-for="product in getCart"
                :key="product.id">
                {{product.title}}
                {{product.price}}

                
            <img :src="require(`@/assets/${product.imgFile}`)" />
            </li>
        </ul>
        </div>
        <div class="btnWrapper">

        <button class="checkoutBtn" @click="countProducts">Summarize</button>
       
        </div>
         <p>
            {{getFinal}}
             </p>
       
                
           
        
        
        
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

.imgList {
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