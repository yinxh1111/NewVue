const template = `<div>
<nav>
<div class= "left">
    <router-link to="/">首页</router-link>
    <router-link to="/movie">电影页</router-link>
</div>
<div class="right" v-if="isLogin">
    <span>{{isLogin.name}}</span>
    <button @click="loginOut">退出登陆</button>
</div>

</nav>
 <router-view></router-view>
</div>`
export default {
    template, 
    methods: {
        loginOut(){
            this.$store.dispatch("loginUser/loginOut")
            this.$router.push("/login")
        }
    },
    computed: {
        isLogin(){
            return this.$store.state.loginUser.data
        }
    },
}