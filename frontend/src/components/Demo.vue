<template>
<div class="wrapper">

    <h1>{{name}}</h1>
    <h1>{{title}}</h1>


    <div id="myModal" class="lightbox nodisplay">
      <span class="close cursor" v-on:click="closeLightBox()">X</span>
      <div class="lightbox-content">
        <img
          src="https://live.staticflickr.com/8515/8458051641_8563c83111.jpg"
        />
        <div class="modal">
          <div class="modal__modalImgUrl"> {{ modalImgUrl }} </div>
          <div class="modal-title"> {{ title }} </div>
          <div class="modal__modalPrice"> {{ modalPrice }} </div>
          <div class="modal__modalLongDesc"> {{ modalLongDesc }} </div>
        </div>
        
      </div>
    </div>

</div>  


</template>


<script>
export default {
    name: "Demo",

    props: ['name', 'longDesc', 'title', 'price', 'imgUrl']
      
      
      
}
</script>

<style>

</style>