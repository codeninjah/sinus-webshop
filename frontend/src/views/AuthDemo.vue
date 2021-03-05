<!-- Kod från David
    Finns på: https://github.com/iths-javascript/auth-demo/blob/main/App.vue
-->

<template>
<div class="wrapper">
  <form @submit.prevent="submit">
            <input type="text" v-model="email" placeholder="email">
            <input type="text" v-model="password" placeholder="password">

            <div class="info hidden">
              <input type="text" v-model="name" placeholder="name">

            <!--
              <div class="adress">
              <input type="text" v-model="adress.street" placeholder="street">
              <input type="text" v-model="adress.zip" placeholder="zip">
              <input type="text" v-model="adress.city" placeholder="city">
              </div>
            -->
            
          </div>
            <button>Login</button>
    </form>

    <button @click="showRegisterForm">Register</button>

  <div class="info" v-if="tokenData">
    <button @click="verify">Verify</button>
    <button @click="change">Change</button>
  </div>

</div>
</template>

<script>
import axios from 'axios'
//import LoggInForm from '@/components/LoggInForm'
export default {
  //components: {LoggInForm},
  data(){return{
    tokenData: null,
    email: '',
    password: '',
    name: '',
    adress: {
      street: '',
      zip: '',
      city: ''
    }
  }},
  methods: {
    
    handleLogin(tokenData){
      this.tokenData = tokenData      
    },
    
    async verify(){
      const request = await fetch('http://localhost:5000/api/me', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${this.tokenData.token}`
        }
      })
      const responseData = await request.json()
      console.log(responseData);
    },
    async change(){
      const request = await fetch('http://localhost:5000/api/me', {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${this.tokenData.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: 'Gösta Ekman'
        })
      })
      const responseData = await request.json()
      console.log(responseData);      
      console.log(this.tokenData.token); //undefined
    },

    //CODENINJAH WAS HERE
    //USING AXIOS
      async register(){
      console.log(this.email) //undefined
      const payload = {email: this.email, password: this.password,
      name: this.name,

      "address": {
            "street": "Tokitokvägen 4",
            "zip": "123 46",
            "city": "Tokbergaskogen"
        }

      /*
      "adress" : {
            street: this.street,
            zip: this.zip,
            city: this.city
        },
      */

      //Här får jag fel
      /*
      adress: this.address = {
      street: this.street,
      zip: this.zip,
      city: this.city
      }
      */

      }
      const request = await axios.post('http://localhost:5000/api/register', payload)

      console.log(request)
    },
    
    async showRegisterForm(){
      /* const req = await register()
      return req() */

      const nameBox = document.getElementsByClassName("info")[0]
      nameBox.classList.remove("hidden")

      if(this.email.length > 0 && this.email.length > 0 && this.name.length > 0) {

      let result = await this.register()

      /*
      const adressDiv = document.getElementsByClassName("adress")[0]
      adressDiv.innerHTML = ""
      adressDiv.classList.add("hidden")
      */

      //this.name = ''
      nameBox.classList.add("hidden")

      return result
      }

      else {
        console.log("You need to fill all fields!")
      }

    },
    

    async submit(){
      const payload = {email: this.email, password: this.password}
      
      const responseData = await axios.post('http://localhost:5000/api/auth', payload)
  
      // const request = await fetch('http://localhost:5000/api/auth', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify(payload)
      // })
      // const responseData = await request.json()      
      console.log(responseData)
      console.log("Logged in successful")

      //Cookie
      //Att användda localStorage eller localSession och sätta ett item

      //använd stringify response data
      
      sessionStorage.setItem("inloggad", JSON.stringify(payload))

      if(sessionStorage.getItem("inloggad")){
        console.log("setItem successfull!")
        this.$router.push('/myaccount')
      }
      

    }
  },
  beforeMount(){
    if(sessionStorage.getItem("inloggad")){
        console.log("setItem successfull!")
        this.$router.push('/myaccount')
      }
  }
}
</script>

<style scoped>
.wrapper{
  display: flex;
  flex-direction: column;
}
button{
  align-self: flex-end;
  outline: none;
  border: 0;
  font-size: 1.2rem;
  color: beige;
  padding: 0.5rem 1rem;
  background-color: skyblue;
  position: relative;
  right: -2rem;
  transition: background-color 0.1s transform 0.1s;
  cursor: pointer;
}
button:hover{
  background-color: rgb(60,80,140);
}
button:active{
  background-color: rgb(30,50,120);
  transform: scale(0.9);
}

.hidden{
  display: none;
}
</style>