import App from "./app.js"
import router from "./router.js"
import store from "./store/index.js"
window.store = store
store.dispatch("loginUser/syncLocal")
new Vue({
    template:`<App></App>`,
    el:"#app",
    components:{
        App
    },
    router,
    store
})
// console.log(a)