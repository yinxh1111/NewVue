import Movie from "./movie.js"
const template=`<div class = "data-container">
<button @click=handleBack>返回首页</button>
<Movie :movie = "item" v-for="item in movies"></Movie>
</div>`


export default {
    template,
    components:{
        Movie
    },
    props:["movies"],
    methods: {
        handleBack(){
            this.$router.push("/")
        }
    },
}