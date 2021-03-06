<template>
    <div class="wrapper">
        <div v-if="loggedIn">
            <button @click="loggOut">Logg out</button>
            <h1>My Account</h1>
            <p>Du är inloggad! {{loggedInUserData}}</p>
        </div>
        <div v-if="!loggedIn">
            <h1>Du är inte inloggad!</h1>
            <router-link to="/authdemo"><button>Till inloggning</button></router-link>
        </div>
    </div>
</template>


<script>


export default {
    name: "MyAccount",
    data() { return {
        loggedIn : false,
        loggedInUserData: ''
    }},
    
    methods: {
        loggOut(){
            sessionStorage.removeItem("inloggad")
                this.loggedIn = false
                console.log("You logged out!")
                this.$router.push('/')               
            }
        },
        
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