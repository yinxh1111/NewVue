import loginService from "../service/loginService.js"
export default {
    namespaced:true,
    state:{
            data:null,
            isLoading:false      
    },
    mutations:{//配置状态有哪些改变,且每一个变化为一个函数,不会产生副作用,及无ajax请求,异步操作等
        setIsLoading(state,payload){//第一个参数为state,表示当前状态,第二个参数payload,负载,该函数的额外信息
            state.isLoading = payload
        },
        setUser(state,userObj){
            state.data = userObj
        }
    },//可通过store.commit("函数名",payload)来改变state中的状态
    actions:{//配置状态有哪些改变,此函数可以有副作用,及ajax请求,异步操作等
        async login(context,payload){//context几乎等同于厂库对象store
            context.commit("setIsLoading",true)
            const res = await loginService.loginService(payload.loginId,payload.loginPw)
            if(res){
                context.commit("setUser",res)
                localStorage.setItem("loginUser",JSON.stringify(res))
                return true
            }
            context.commit("setIsLoading",false)
            return false
        },
        loginOut(context){//退出登陆
            context.commit("setUser",null)
            localStorage.removeItem("loginUser")
            context.commit("setIsLoading",false)
        },
        syncLocal(context){//同步本地local
            const local = localStorage.getItem("loginUser")
            if(local){
                context.commit("setUser",JSON.parse(local))
            }
        }
    }//也不能直接调用,只有通过store.dispatch("函数名",payload)来调用
}