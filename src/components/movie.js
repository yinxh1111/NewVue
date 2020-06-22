const template = `<div>
<div class="data">
    <div class="poster"> <img :src="movie.poster" /> </div> 
    <div class="words">
        <h2 class="title"><router-link :to="'/movie/'+movie._id">{{movie.name}}</router-link></h2> 
        <div class="attach">
            <span> 英文名:{{movie.ename}}</span> <span>{{movie.type}}</span> 
            <br> 
            <span>上映地区：{{movie.area}}</span> <span>上映时间：{{movie.upDate}}</span> <span>时长：{{movie.time}}</span>
        </div> 
        <div class="desc">{{movie.intro}}</div>
    </div>
    </div>
</div>`
export default {
    template,
    props:["movie"],
}