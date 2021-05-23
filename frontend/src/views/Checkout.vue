<template>
    <div class="wrapper">
        <h1>Checkout vyn</h1>
        <ul>
            <li v-for="product in getCart"
                :key="product.id">
                {{product.title}}
                {{product.price}}
            </li>
        </ul>
        <div class="btnWrapper">

        <button class="checkoutBtn" @click="countProducts">Purchase</button>
        </div>
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

</style>