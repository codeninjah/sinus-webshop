<template>
    <div class="wrapper">
        <div v-if="loggedIn">
            <button @click="loggOut">Sign out</button>
            <h1>My Account</h1>
            <p></p>
            <p>User Name: {{loggedInUserData.name}}</p>
            <p>User Role: {{loggedInUserData.role}}</p>
            <p>User email: (email): {{loggedInUserData.email}}</p>
            <p>User (city): {{loggedInUserData.address.city}}</p>
            <p>User (zip): {{loggedInUserData.address.zip}}</p>
            <p>User (street): {{loggedInUserData.address.street}}</p>
        </div>
        <div v-if="!loggedIn">
            <h1>Du är inte inloggad!</h1>
            
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

            //this.$store.dispatch('clearLocalStorage')

            
            localStorage.removeItem("user")
            localStorage.removeItem("token")
                this.loggedIn = false
                console.log("You logged out!")
                this.$router.push('/')   
                       
            },

        async testMe(){
        const request = await fetch('http://localhost:5000/api/me', {
                method: 'GET',
                headers: {
                'Content-Type': 'application/json'
            },
        //body: JSON.stringify(payload)
        })
            const responseData = await request.json() 
            console.log(responseData)
            //TESTA FÖLJANDE:
            //console.log(responseData)
        }
        },
        
    created(){
            if(localStorage.getItem("token") && localStorage.getItem("user")){
                this.loggedIn = true
                console.log("MyAccounts vy getItem successfull!")
                //FÖLJANDE RAD BEHÖVER ERSÄTTAS/BYGGAS PÅ
                //this.$store.dispatch("getUser")
                // Retrieve the object from storage

                //DE FÖLJANDE 2 RADERNA ÄR FRÅN VUEX
                //localStorage.setItem("token", token);
                //localStorage.setItem("user", JSON.stringify(userDB));

                const loggedInUser = localStorage.getItem('user');
                this.loggedInUserData = JSON.parse(loggedInUser)
                
                console.log('inloggadUser: ', JSON.parse(loggedInUser));

                console.log("This route: " + this.$route)
                console.log("This router: " + this.$router)
                //console.log("More user stuff: ", this.user.adress)
                }
            },

    computed: {
            user() {
                return this.$store.getters.user
            },
            userDetails() {
                if (this.user) {
                    return {
                        name: this.user.name
                    }
                }
                else {
                    return {}
                }
            },
        }
    
    }
</script>


<style scoped>

</style>