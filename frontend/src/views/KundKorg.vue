<template>
<<<<<<< HEAD



    
    <div class="wrapper">
        <h1>Kund korg</h1>
        <div>{{getCart}}</div>
        <h2>Här loopar vi</h2>
        <h3>Och skriver ut namnen</h3>
            <div v-for="product in getCart"
                :key="product.id">
                {{product.title}}
                {{product.price}}
            </div>
    </div>
=======
   <div></div>
>>>>>>> 53bccafe117807189e168c33ccc2331ec5f43b23
</template>


<script>
export default {
    name: "KundKorg",

    computed:{
      
    }
}
</script>


<style scoped>

</style>