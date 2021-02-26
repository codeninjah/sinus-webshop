<template>
    <div class="wrapper">
        <h1>Produkt Lista</h1>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts"
            :key = "post">
                <p>{{post.title}} {{post.price}}</p>
            </li>
        </ul>

        <ol v-if="errors && errors.length">
            <li v-for="error of errors"
            :key = "error">
                <p>{{error.message}}</p>
            </li>
        </ol>

    </div>    
</template>


<script>
import axios from 'axios';

export default {
    data() {
        return {
            posts: [],
            errors: []
        }
    },

    name: "ProduktLista",
    
    created() {
            //axios.get('http://localhost:5000/database/productsSeed.json')
            axios.get("http://localhost:5000/api/products/")
            .then(response => {
                this.posts = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
         }
}

</script>


<style scoped>

ol {
    list-style-type: georgian;
}

</style>