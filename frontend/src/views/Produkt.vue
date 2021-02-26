<template>
    <div class="wrapper">
        <h1>Produkt</h1>
        <p>{{product.title}} {{product.price}}</p>
    </div>
</template>


<script>
export default {
    name: "Produkt",

    props: {
        product : Object
    },
}
</script>


<style scoped>

</style>