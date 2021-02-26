<template>
  <div>
    <Produkt :product="product" />
  </div>
</template>

<script>
import Produkt from "@/components/Produkt.vue";

export default {
  components: { Produkt },

  computed: {
    product() {
      let id = this.$route.params.id;
      let product = this.$store.getters.getProduct(id);
      return product;
    },
  },

};
</script>


<style scoped>

</style>