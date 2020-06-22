import Home from "./pages/index.js"
import Movie from "./pages/moviePage.js"
import MovieDetail from "./pages/movieDetail.js"
import Login from "./pages/login.js"
import store from "./store/index.js"
const router = new VueRouter({
    routes:[
        {path:"/",component:Home},
        {path:"/movie",component:Movie,meta:{needLogin:true}},
        {path:"/movie/:id",component:MovieDetail,meta:{needLogin:true}},
        {path:"/login",component:Login}
    ],
})
//导航守卫
router.beforeEach(function(to,from,next){
    //到的页面需要登录才能看到
    if(to.meta&&to.meta.needLogin){
        //检查是否已经登录了
        if(store.state.loginUser.data){
            next()
        }else{
            next("/login")
        }
    }else{
        next()
    }
})
export default router
