<template>
    <div class="wrapper">
        <h1>Produkt</h1>
        
        <!-- Tar man bort följande rad, så printas h1 rubriken ovan 
        <p>{{product.title}} {{product.price}}</p>
        -->

        <p v-on:click=test>a</p>

        <ul v-if="posts && posts.length">
        <li
            v-for="post of posts"
            :key="post[0]"
            >
                {{ post.title }}
                {{ post.price }}

                {{post._id}}
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
    name: "Produkt",

    //Här verkar ej product vara rätt prop
    props: ['title'],

    data() {
        return {
            posts: [],
            errors: [],
        }
    },

    methods : {
        test(){
             alert(this.$route.path)
        }
    },

    created(){

        //axios.get('http://localhost:5000/database/productsSeed.json')
            axios.get("http://localhost:5000/api" + this.$route.path)
            .then(response => {
                this.posts = response.data
            })
            .catch(e => {
                this.errors.push(e)
            })


        //console.log tests
        console.log(this.$route.params)
        console.log(this.$route.query)
        console.log(this.$router)
    }
}
</script>


<style scoped>

</style>