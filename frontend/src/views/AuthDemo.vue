<!-- Kod från David
    Finns på: https://github.com/iths-javascript/auth-demo/blob/main/App.vue
-->

<template>
<div class="wrapper">
  <form @submit.prevent="submit">
            <input type="text" v-model="email" placeholder="email">
            <input type="text" v-model="password" placeholder="password">
            <button>Login</button>
    </form>

    <button @click="register">Register</button>

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
    password: ''
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
      name: 'Johan Kivi',

      address: {
      street: 'Tokitokvägen 3',
      zip: '123 45',
      city: 'Tokberga'
      }

      }
      const request = await axios.post('http://localhost:5000/api/register', payload)

      console.log(request)
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
</style>