<template>
    <div class="wrapper">
        <h1>Produkt</h1>
        
        <!-- Tar man bort följande rad, så printas h1 rubriken ovan 
        <p>{{product.title}} {{product.price}}</p>
        -->

        <p v-on:click=test>a</p>
        

    </div>
</template>


<script>
export default {
    name: "Produkt",

    //Här verkar ej product vara rätt prop
    props: ['title'],

    methods : {
        test(){
             alert(this.$route.path)
        }
    },

    created(){
        console.log(this.$route.params)
        console.log(this.$route.query)
        console.log(this.$router)
    }
}
</script>


<style scoped>

</style>