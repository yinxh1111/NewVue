import Movies from "./movies.js"
import Pager from "./pager.js"
import mockDatas from './assets/mockDatas.js'
const template = `<div>
<Movies :movies = "pageMovie"></Movies>
<Pager :total= "total" v-model = "current" :pageSize="pageSize"></Pager> 
</div>
`
//上面v-model 就是一个语法糖, 相当于 :value = "current"和@input = "current=$event"
export default {
    template,
    components:{
        Movies,
        Pager,
    },
    data() {
        return {
            mockDatas:mockDatas,
            current:1,
            pageSize:2,
            total:mockDatas.length
        }
    },
    computed: {
        pageMovie(){
            return this.mockDatas.slice((this.current-1)*this.pageSize,this.current*this.pageSize)
        }
    },
}