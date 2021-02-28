<template>
  <div class="home">
    <div class="wrapper">
    <a id="triangle" href="#"></a>

  </div>
  </div>
</template>

<script>
// @ is an alias to /src



export default {
  name: 'Home',
  components: {
     
  }
}
</script>

<style lang="scss" scoped>


.wrapper {
  display: flex;
  flex-direction: row;
  justify-content:center;
}


#triangle{
  
	width: 0;
	height: 0;
	border-left: 25px solid transparent;
	border-right: 25px solid transparent;
	border-top: 50px solid black;
}

</style>