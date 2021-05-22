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
        <button @click="countProducts">Alex</button>
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

</style>