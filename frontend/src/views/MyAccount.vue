<template>
    <div class="wrapper">
        <button>Logg out</button>
        <h1>My Account</h1>
        <p v-if="loggedIn">Du är inloggad! {{loggedInUserData}}</p>
        </div>
</template>


<script>


export default {
    name: "MyAccount",
    data() { return {
        loggedIn : false,
        loggedInUserData: ''
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
            if(sessionStorage.getItem("inloggad")){
                this.loggedIn = true
                console.log("MyAccounts vy getItem successfull!")
                //FÖLJANDE RAD BEHÖVER ERSÄTTAS/BYGGAS PÅ
                //this.$store.dispatch("getUser")
                // Retrieve the object from storage

                const loggedInUser = sessionStorage.getItem('inloggad');
                this.loggedInUserData = JSON.parse(loggedInUser)
                
                console.log('inloggadUser: ', JSON.parse(loggedInUser));
                }
            }
    
    }
</script>


<style scoped>

</style>