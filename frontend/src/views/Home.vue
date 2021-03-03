<template>
  <div class="home">
    <div class="wrapper" @click="openLightBox">
      <a id="triangle" href="#"></a>
    </div>

    <section class="listWrapper">
      <ul class="imglist" v-if="posts && posts.length">
        <li
          @click="select(post)"
          class="listItems"
          v-for="post in posts"
          :key="post._id"
        >
          <img :src="require(`@/assets/${post.imgFile}`)" />

          <span>{{ post.title }}</span>
          <div class="wrapperB">
          <button
            @click="openLightBox(post._id)"
            :modal-title="post.title"></button>
            </div>

          <!--Printas ej -->
          <div id="myModal" class="lightbox nodisplay">
            <span class="close cursor" v-on:click="closeLightBox()">x</span>
            <div class="lightbox-content">
              <div class="modal">
                <div class="modal__modalImgUrl">
                 
                  {{ selectedProduct.imgFile }}
                  
                </div>
                <div class="modal-title">{{ selectedProduct.title }}</div>
                <div class="modal__modalPrice">{{ selectedProduct.price }}</div>
               
                <!-- <div class="modal__modalLongDesc">{{ modalLongDesc }}</div> -->
              </div>
            </div>
          </div>
        </li>
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

      longDesc: "",
      title: "",
      price: "",
      imgUrl: "",
      imgFile: "",
      selectedProduct: { title: "", price: "", imgUrl: ""  },
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
      //sessionStorage.removeItem('modalLongDesc')
      const open = document.getElementById("myModal");
      open.style.display = "block";
    },

    closeLightBox() {
      const open = document.getElementById("myModal");
      open.style.display = "none";
    },

    select(e) {
      console.log(e);
      this.selectedProduct = e;
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
.wrapperB{
  display: flex;
  align-self: flex-start;
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
  margin: 0%;
  padding: 0%;
}

button {
  
  background-color: #bb9090;
  width: 100%;
  height: 100%
  
}

.listItems {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 500px;
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
  margin: 2%;
}

/* CODE FOR MODAL */
#myModal {
  border: 3px solid #bb9090;
  width: 400px;
  height: 500px;
  background-color: wheat;
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

span{
  color: orange;
    font-size: larger;
}
</style>
