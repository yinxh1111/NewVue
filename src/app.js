import Movies from "./movies.js"
import Pager from "./pager.js"
const template = `<div>
<h1>这是APP组件</h1>
<Movies></Movies>
<Pager></Pager>
</div>
`

export default {
    template,
    components:{
        Movies,
        Pager
    }
}