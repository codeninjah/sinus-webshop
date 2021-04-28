<template> 
<div>
  
  <RegisterComp v-bind:registerHeader="'Create Account'" v-bind:ctaBtn="'Register'" v-bind:isRegister="true" />
</div>
</template>

<script>
import RegisterComp from '../components/RegisterComp.vue';
export default {
  components: {
    RegisterComp
  }
}
</script>

<style>

</style>