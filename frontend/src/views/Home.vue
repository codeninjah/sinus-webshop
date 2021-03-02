<template>
  <div class="home">
    <div class="wrapper">
      <a id="triangle" href="#"></a>
    </div>
      <section class="listWrapper">
    <ul class="imglist" v-if="posts && posts.length">
      <router-link class="listItems" 
        v-for="post in posts"
        :key="post._id"
        :to="`products/${post.imgFile}`"
      >
        <img :src="require(`@/assets/${post.imgFile}`)" />

        {{post.title}}
        

        <!--Printas ej -->
      </router-link>
    </ul>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      posts: [],
      errors: [],
    };
  },

  created() {
    //axios.get('http://localhost:5000/database/productsSeed.json')
    axios
      .get("http://localhost:5000/api/products/")
      .then((response) => {
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },

  computed: {
    
    products() {
      return this.$store.state.products;
    },
  },
 
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

#triangle {
  width: 0;
  height: 0;
  border-left: 30px solid transparent;
  border-right: 30px solid transparent;
  border-top: 50px solid black;
}

.imglist {
  display: flex;
  flex-direction: row;
      height: 500px;
      margin:0%;
      padding: 0%;
}

.listItems {
  
      display: flex;
    flex-direction: column;
    width: 200px;
    height: 200px;
    text-decoration: none;
    background: repeating-radial-gradient(#ffffff08, transparent 100px);
    overflow: hidden;
    border-radius: 6%;
    margin: auto;
    padding: 5px;
    box-shadow: 1px;
    box-shadow: 0px 0 1px 0px #0000003d;
    display: flex;
    justify-content: space-evenly;
}

.listWrapper {
  min-height: 800px;
  margin:2%
}

</style>
