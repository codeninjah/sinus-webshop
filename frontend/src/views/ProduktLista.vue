<template>
    <div class="wrapper">
        <h1>Produkt Lista</h1>
        <ul v-if="posts && posts.length">
            <li v-for="post of posts"
            :key = "post">
                <p>{{post.title}}</p>
            </li>
        </ul>

        <ul v-if="errors && errors.length">
            <li v-for="error of errors"
            :key = "error">
                <p>{{error.message}}</p>
            </li>
        </ul>

    </div>    
</template>


// <script>
// import axios from 'axios';

// export default {
//     data() {
//         return {
//             posts: [],
//             errors: []
//         }
//     },

//     name: "ProduktLista",
    
//     created() {
//             axios.get('http://localhost:5000/database/productsSeed.json')
//             .then(response => {
//                 this.posts = response.data
//             })
//             .catch(e => {
//                 this.errors.push(e)
//             })
//          }
// }

// </script>


<style scoped>

</style>