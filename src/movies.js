import Movie from "./movie.js"
const template=`<div class = "data-container">
<Movie :movie = "item" v-for="item in movies"></Movie>
</div>`


export default {
    template,
    components:{
        Movie
    },
    props:["movies"]
}