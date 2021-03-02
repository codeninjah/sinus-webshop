<template>
    <div class="wrapper">
        <form @submit.prevent="submit">
            <input type="text" v-model="email" placeholder="email">
            <input type="text" v-model="password" placeholder="password">
            <button>Login</button>
        </form>
        <label>Not a user yet?</label>
        <button>Register</button>
    </div>
</template>


<script>

//Davids kod
//https://github.com/iths-javascript/auth-demo/blob/main/LoginForm.vue

import axios from 'axios'
export default {
  
  data(){return{
    email: 'customer@example.com',
    password: 'password'
  }},
  methods:{
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
      this.$emit('login', responseData)
    }
  }
}
</script>


<style scoped>

</style>