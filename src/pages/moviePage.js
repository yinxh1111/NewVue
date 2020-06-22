import Movies from "../components/movies.js"
import Pager from "../components/pager.js"
import Loading from "../components/loading.js"
// import getMovies from "./service/moviesService.js"
const template = `<div>
<Loading :show = "isLoading"></Loading>
<Movies :movies = "movies"></Movies>
<Pager :total= "total" v-model = "current" :pageSize="pageSize"></Pager> 
</div>
`
//上面v-model 就是一个语法糖, 相当于 :value = "current"和@input = "current=$event"
export default {
    template,
    components: {
        Movies,
        Pager,
        Loading,
    },
    mounted() {
        //通过仓库去拿电影数据
        this.$store.dispatch("movie/fetch")
        // const data =moviesService.getMovies(this.current,this.pageSize)
        // this.total=data.total
        // this.movies=data.movies
        // setInterval(()=>{this.show = false},1000)
    },
    //     const data=getMovies.getMovies(this.current,this.pageSize)
    //     this.movies=data.movies
    //     this.total = data.total
    // },
    computed: {
        //通过Vuex.mapState计算得出的,只有get方法,没有set方法,故不能双向数据绑定
        ...Vuex.mapState("movie", ["movies", "total", "current", "pageSize", "isLoading"]),//第一个参数为命名空间,后面的数组为需要被计算的属性
        current: {
            get() {
                return this.$store.state.movie.current
            },
            set(newCurrent) {
                this.$store.commit("movie/setState", { current: newCurrent })
                this.$store.dispatch("movie/fetch")
            }
        }
    },
    // methods: {
    //     handleChange(newCurrent) {
    //         //先改变仓库中的current值,然后在获取仓库的数据
    // this.$store.commit("movie/setState", { current: newCurrent })
    // this.$store.dispatch("movie/fetch")
    //     }
    // },

}