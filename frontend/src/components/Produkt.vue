<template>
    <div class="wrapper">
        <h1>Produkt</h1>
        
        <!-- Tar man bort följande rad, så printas h1 rubriken ovan -->
        <p>{{product.title}} {{product.price}}</p>

    </div>
</template>


<script>
export default {
    name: "Produkt",

    //Här verkar ej product vara rätt prop
    props: ['product']
}
</script>


<style scoped>

</style>