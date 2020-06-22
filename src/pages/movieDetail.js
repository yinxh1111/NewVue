import Movie from "../components/movie.js"
import moviesService from "../service/moviesService.js"
import isLoading from "../components/loading.js"
const template = `<div class="data-container">
    <Movie v-if="movie" :movie = "movie"></Movie>
    <isLoading :show="show"></isLoading>
</div>`
export default {
    template,
    data() {
        return {
            movie:null,
            show:true
        }
    },
    components:{
        Movie,
        isLoading
    },
    props:["movie"],
    mounted() {
        const id = this.$route.params.id
        const data = moviesService.getMovieById(id)
        this.movie = data.movie
        setInterval(()=>{
            this.show= false
        },1000)
    },
}