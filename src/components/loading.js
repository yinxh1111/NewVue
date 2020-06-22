import Modal from "./modal.js"
 const template =`<Modal v-show="show">
 <div class="loading">
 加载中...
 </div>
 </Modal>`
export default {
    template,
    components:{
        Modal
    },
    props:{
        show:{
            type:Boolean,
            default:false
        }
    }
}