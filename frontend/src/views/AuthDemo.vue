<!-- Kod från David
    Finns på: https://github.com/iths-javascript/auth-demo/blob/main/App.vue
-->

<template>
<div class="wrapper">
  <LoggInForm @login="handleLogin" />
  <div class="info" v-if="tokenData">
    <button @click="verify">Verify</button>
    <button @click="change">Change</button>
  </div>
</div>
</template>

<script>
import LoggInForm from '@/components/LoggInForm'
export default {
  components: {LoggInForm},
  data(){return{
    tokenData: null
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