<template>
  <div id="myModal" class="lightbox nodisplay">
      <span class="close cursor" v-on:click="closeLightBox()">X</span>
      <div class="lightbox-content">
        <img
          src="https://live.staticflickr.com/8515/8458051641_8563c83111.jpg"
        />
        <div class="modal">
          <div class="modal__modalImgUrl"> {{ modalImgUrl }} </div>
          <div class="modal-title"> {{ modalTitle }} </div>
          <div class="modal__modalPrice"> {{ modalPrice }} </div>
          <div class="modal__modalLongDesc"> {{ modalLongDesc }} </div>
        </div>
        
      </div>
    </div>
</template>

<script>
export default {
    name: "Modal",

    props: [
      'modalLongDesc',
      'modalPrice',
      'modalTitle',
      'modalImgUrl',

      ],

    created: function () {
            //clickedProduct = "ALEX"
            //console.log('user data from parent component:')
            //console.log(this.modalObj.modalLongDesc) //prints out "undefined"
            //sessionStorage.getItem('modalLongDesc', this.modalObj.modalLongDesc)
            //this.modalLongDesc = this.modalObj.modalLongDesc
            //console.log("HÄR SKA NÅGOT PRINTAS UT")
            //console.log(sessionStorage.getItem('modalLongDesc', this.modalObj.modalLongDesc))
            //this.modalLongDesc = sessionStorage.getItem('modalLongDesc')
        },

    methods: {

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

.desc {
  color: white;
}

</style>