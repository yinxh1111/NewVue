import mockDatas from '../assets/mockDatas.js'
export default {
    // async getMovies(page,pageSize){
    //      const datas=await fetch("https://api.myjson.com/bins/15f8x1").then(res=>res.json())
    //     return {
    //         total:datas.length,
    //         movies:datas.slice((page-1)*pageSize,page*pageSize)
    //     }
    // },
    // async getMoviesById(id){
    //     const datas = await fetch("https://api.myjson.com/bins/15f8x1").then(res=>res.json())
    //     return {
    //         movie:datas.find(item=>item._id===id)
    //     }
    // }

    getMovies(page,pageSize){
        return {
            total:mockDatas.length,
            movies:mockDatas.slice((page-1)*pageSize,page*pageSize)
        }
    },
    getMovieById(id){
        return {
            movie:mockDatas.find(item=>item._id===id)
        }
    }
}