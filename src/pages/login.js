import Loading from "../components/loading.js"
const template= `
<div>
    <div class="center">
        <p>
            <label>账号:</label>
            <input type = "text" v-model="userName" autocomplete /> 
        </p>
        <p>
            <label>密码:</label>
            <input type = "password" v-model="userPassword" autocomplete />
        </p>
        <button @click = "login">登陆</button>
    </div>
    <Loading :show="isLoading"></Loading>
</div>
`
export default {
    template,
    components:{
        Loading
    },
    data() {
        return {
            userName:"",
            userPassword:""
        }
    },
    computed:{
        isLoading(){
            return this.$store.state.loginUser.isLoading
        }
    },
    methods: {
        async login(){
           const result = await this.$store.dispatch("loginUser/login",{
                loginId:this.userName,
                loginPw:this.userPassword
            })
            if(result){
                this.$router.push("/")
            }else{
                alert("账号或密码错误")
            }
        }
    },
}