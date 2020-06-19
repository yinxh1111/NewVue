const template = `<div>
<span class="item" @click=changePage(1) :class="current==1?'disabled':''">首页</span>
<span class="item" @click=changePage(current-1) :class="current==1?'disabled':''">上一页</span>
<span class="item" :class="current==item?'active':''" v-for="item in numbers" @click=changePage(item)>{{item}}</span>
<span class="item" @click=changePage(current+1) :class="current==pageNumber?'disabled':''">下一页</span>
<span class="item" @click=changePage(pageNumber) :class="current==pageNumber?'disabled':''">尾页</span>
<span>{{current}}</span>
/
<span>{{pageNumber}}</span>
</div>`
export default {
    template,
    data(){
        return {
            current:1,
            total:60,
            pageSize:10,
            panelNumber:5
        }
    },
    computed: {
        pageNumber(){
            return Math.ceil(this.total / this.pageSize) 
        },
        numbers(){
            const pager=[]
            let min,max
            min = this.current - Math.floor(this.panelNumber/2)
            max = this.current + Math.floor(this.panelNumber/2)
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
            this.current = number
        }
    },
}