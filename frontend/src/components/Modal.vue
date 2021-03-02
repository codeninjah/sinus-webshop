<template>
  <div id="myModal" class="lightbox nodisplay">
      <span class="close cursor" v-on:click="closeLightBox()">ALEX</span>
      <div class="lightbox-content">
        <img
          src="https://live.staticflickr.com/8515/8458051641_8563c83111.jpg"
        />
      </div>
    </div>
</template>

<script>
export default {
    name: "Modal",
    methods: {
    openLightBox() {
      const open = document.getElementById("myModal");
      open.style.display = "block";

      //console.log(images)

      //console.log(this.$root.imgArray)
      //const array = this.$root.imgArray
    },

    closeLightBox() {
      const open = document.getElementById("myModal");
      open.style.display = "none";

      //alert("Bra!")
    },
  },

}
</script>

<style>
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