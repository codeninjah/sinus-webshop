<template>
    <div class="wrapper">
        <h1>My Account</h1>
        <p v-if="loggedIn">Du är inloggad!</p>
        </div>
</template>


<script>


export default {
    name: "MyAccount",
    data() { return {
        loggedIn : false,
    }},
    /*
    methods: {
        ifLoggedIn(){
            if(localStorage.getItem("inloggad") == "true"){
                this.loggedIn = true
                console.log("setItem successfull!")
                }
            }
        },
        */
    created(){
            if(localStorage.getItem("inloggad") == "true"){
                this.loggedIn = true
                console.log("setItem successfull!")
                }
            }
    
    }
</script>


<style scoped>

</style>