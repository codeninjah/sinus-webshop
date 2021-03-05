<template>
    <div class="wrapper">
        <h1>Kund korg</h1>
        <div>{{getCart}}</div>
        <h2>Här loopar vi</h2>
        <h3>Och skriver ut namnen</h3>
            <div v-for="product in getCart"
                :key="product.id">
                {{product.title}}
            </div>
    </div>
</template>


<script>
export default {
    name: "KundKorg",

    computed:{
        getCart(){
            return this.$store.getters.getCart
        }
    }
}
</script>


<style scoped>

</style>