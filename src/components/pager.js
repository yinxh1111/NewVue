const template = `<div class="pager">
<span class="pager-item" @click=changePage(1) :class="value==1?'disabled':''">首页</span>
<span class="pager-item" @click=changePage(value-1) :class="value==1?'disabled':''">上一页</span>
<span class="pager-item" :class="value==item?'active':''" v-for="item in numbers" @click=changePage(item)>{{item}}</span>
<span class="pager-item" @click=changePage(value+1) :class="value==pageNumber?'disabled':''">下一页</span>
<span class="pager-item" @click=changePage(pageNumber) :class="value==pageNumber?'disabled':''">尾页</span>
<span>{{value}}</span>
/
<span>{{pageNumber}}</span>
</div>`
export default {
    template,
    props:{
        value:{
            type:Number,
            default:1
        },
        total:{
            type:Number,
            require: true
        },
        pageSize:{
            type:Number,
            default:10
        },
        panelNumber:{
            type:Number,
            default:5
        }
    },
    computed: {
        pageNumber(){
            return Math.ceil(this.total / this.pageSize) 
        },
        numbers(){
            const pager=[]
            let min,max
            min = this.value - Math.floor(this.panelNumber/2)
            max = this.value + Math.floor(this.panelNumber/2)
            if(min<Math.floor(this.panelNumber/2)&&this.pageNumber>this.panelNumber){
                min=1,max=this.panelNumber
            }
            if(max>this.pageNumber&&this.pageNumber>this.panelNumber){
                max= this.pageNumber
                min= this.pageNumber - this.panelNumber+1
            }
            if(this.pageNumber<this.panelNumber){
                min=1,max=this.pageNumber
            }
            for(let i =min;i<=max;i++){
                pager.push(i)
            }
            return pager
        }
    },
    methods: {
        changePage(number){
            if(number<1){
                number=1
            }else if(number>this.pageNumber){
                number=this.pageNumber
            }
            // this.value = number 子组件不能直接修改父组件传过来的属性,所以此处应该注册事件
            this.$emit("input",number)
        }
    },
}