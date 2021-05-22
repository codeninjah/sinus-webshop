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
    </div>
</template>


<script>
export default {
    name: "Checkout",

    computed:{
        getCart(){
            return this.$store.getters.getCart
        }
    },
}

</script>


<style scoped>

</style>