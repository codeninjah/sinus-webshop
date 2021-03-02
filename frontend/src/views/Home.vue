<template>
  <div class="home">

    <div class="wrapper">
      <a id="triangle" href="#"></a>
    </div>

    <div id="myModal" class="lightbox nodisplay">
        <span class="close cursor" v-on:click="closeLightBox()">ALEX</span>
          <div class="lightbox-content">

            <img src="https://live.staticflickr.com/8515/8458051641_8563c83111.jpg" />
            <img src="https://keepongeekin.files.wordpress.com/2020/08/cropped-1500x500-1.jpg" />

      </div>
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

  methods: {
      openLightBox() {
            const open = document.getElementById("myModal")
            open.style.display = "block"

            //console.log(images)

        //console.log(this.$root.imgArray)
        //const array = this.$root.imgArray

        },

        closeLightBox(){  
            const open = document.getElementById("myModal")
            open.style.display = "none"
            
        //alert("Bra!")

        },

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

/* CODE FOR MODAL */
#myModal {
    border: 3px solid black;
    width: 100%;
    height: auto;
}

/* The Lightbox (background) */
.lightbox {
    display: none;
    position: fixed;
    z-index: 1;
    margin-top: 100px;
    margin-left: 100px;
    margin-right: 100px;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: black;
}

/* Lightbox Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

.display {
    display: block;
}

.nodisplay {
    display: none;
}


.main-wrapper {
    border: 3px solid black;
    width: 300px;
    height: 300px;
}

/* The Close Button */
.close {
  color: white;
  /*position: absolute;*/
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}



/* Hide the slides by default */
.mySlides {
  display: none;
}

</style>
