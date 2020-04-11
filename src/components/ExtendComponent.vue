<template>
    <div>
        <h2>扩展组件</h2>
        <div>{{msg}}</div>
        <div ref="box">box</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data(){
        return {
            msg:'123'
        }
    },
    watch:{
        msg(newValue:string,oldValue:string){
            console.log('属性检测',newValue,oldValue)
        }
    },
    props:{
        p1:{
            type:String,
            default:'默认值',
            required:false,
            validator:(val:string)=>val.length>2
        }
    },
    mounted(){
        console.log('extendComponent')
            // this.box.style.background='yellow'
    }
})
</script>