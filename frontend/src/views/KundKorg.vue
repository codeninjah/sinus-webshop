<template>
    <div class="wrapper">
        <h1>Kund korg</h1>
        <div>{{getCart}}</div>
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