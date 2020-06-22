export default {
    async loginService(id,pw){
         return  new Promise(res=>{
             setTimeout(() => {
                 if(id==="admin"&&pw==="123456"){
                     res({
                         loginId:id,
                         name:"超级管理员"
                     })
                 }else{
                     res(null)//必须返回数据
                 }
             }, 500);
         })
     }
}