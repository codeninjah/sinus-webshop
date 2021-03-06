<template>
    <div class="wrapper">
        <Navigation />
    </div>
</template>


<script>
import Navigation from "@/components/Navigation.vue"

export default {
    name: "Header",

    components: {
        Navigation
    }
    
}
</script>


<style scoped>

    .wrapper{
        padding: 10px 0;
    }

</style>