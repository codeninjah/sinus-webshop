<template>
  <div id="app">
    <div class="wrapper">
      <Navigation />
      <Router-view />
      
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
import Navigation from "./components/Navigation.vue";
export default {
  components: {
    Navigation,
    Footer,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  
}

html,
body {
  margin: 0;
  display: flex;
  flex-direction: column;
  min-width: 800px;
  min-height: 400px;
  background-color: #b72929;
}

.wrapper {
  display: flex;
  flex-direction: column;


  justify-content: center;
}
</style>
