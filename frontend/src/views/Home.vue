<template>
  <div class="home">
    <div class="wrapper">
      <a id="triangle" href="#"></a>
    </div>

    <ul class="hoodieTab" v-if="posts && posts.length">
      <router-link 
        v-for="post in posts"
        :key="post._id"
        :to="`products/${post.imgFile}`"
      >
        <img :src="require(`@/assets/${post.imgFile}`)" />

        {{post.imgFile}}

        <!--Printas ej -->
      </router-link>
    </ul>
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
</style>
