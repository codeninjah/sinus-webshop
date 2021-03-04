<template>
<div class="wrapper">

    <h1>{{name}}</h1>
    <h1>{{title}}</h1>
    <h1>{{price}}</h1>
    <h1>{{longDesc}}</h1>
    <h1>{{imgUrl}}</h1>


    <div id="myModal" class="lightbox nodisplay">
      <span class="close cursor" v-on:click="closeLightBox()">X</span>
      <div class="lightbox-content">
        <img
          src="https://live.staticflickr.com/8515/8458051641_8563c83111.jpg"
        />
        <div class="modal">
          <div class="modal__modalImgUrl"> {{ imgUrl }} </div>
          <div class="modal-title"> {{ title }} </div>
          <div class="modal__modalPrice"> {{ price }} </div>
          <div class="modal__modalLongDesc"> {{ longDesc }} </div>
        </div>
        
      </div>
    </div>

</div>  


</template>


<script>
export default {
    name: "demo",

    props: ['name', 'longDesc', 'title', 'price', 'imgUrl']
      
      
      
}
</script>

<style>

</style>