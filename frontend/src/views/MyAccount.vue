<template>
    <div class="wrapper">
        <div v-if="loggedIn">
            <button @click="testMe">Test</button>
            <button @click="loggOut">Logg out</button>
            <h1>My Account</h1>
            <p>Du är inloggad! {{loggedInUserData}}</p>
            <p>User Name: {{loggedInUserData.user.name}}</p>
            <p>User adress: {{loggedInUserData.user}}</p>
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
            if(sessionStorage.getItem("inloggad")){
                this.loggedIn = true
                console.log("MyAccounts vy getItem successfull!")
                //FÖLJANDE RAD BEHÖVER ERSÄTTAS/BYGGAS PÅ
                //this.$store.dispatch("getUser")
                // Retrieve the object from storage

                const loggedInUser = sessionStorage.getItem('inloggad');
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