<template>
    <div class="wrapper">
        <h1>Produkt Lista</h1>

        <!--
        <ul v-if="posts && posts.length">
            <li v-for="(post, index) of posts"
            :key = "post"
            index = index>
                <a href="http://localhost:5000/api/products/" + {{post._id}}><p v-on:click="popUp(index)">{{post.title}} {{post.price}}</p></a>
            </li>
        </ul>
        -->

        <ul v-if="posts && posts.length">
        <li
            v-for="post in posts"
            :key="post.id"
            @click="$router.push(`products/${post._id}`)"
            >
                {{ post.title }}
                {{ post.price }}

                {{post._id}}
                {{post.id}} <!--Printas ej -->

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

    //här kan det vara så att man inte skickat rätt data som ska tas emot av Produkt-componenten via props
    data() {
        return {
            posts: [],
            errors: [],
        }
    },

    name: "ProduktLista",

    /*
    methods: {
        popUp(index){
            this.index = index
            alert(index)
            console.log(index.longDesc) //undefined
        }
    },
    */
    
    created() {
            //axios.get('http://localhost:5000/database/productsSeed.json')
            axios.get("http://localhost:5000/api/products/")
            .then(response => {
                this.posts = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })
         },

    computed: {
        products() {
            return this.$store.state.products;
        },
    },
}

</script>


<style scoped>

ol {
    list-style-type: georgian;
}

</style>