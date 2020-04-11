<template>
    <div>
        <h1>class组件</h1>
        <h3>data数据</h3>
        <div>{{msg1}}</div>
        <div>{{msg2}}</div>
        <!-- <div>{{msg3}</div>-->
        <div>{{msg4}}</div> 
        <div>{{msg5}}</div>
        <button @click="show(111,'aaa')">事件</button>
        <h4>props</h4>
        <div>{{this.p1}}</div>
        <div ref="box">box</div>
    </div>
</template>

<script lang = 'ts'>
import Vue from 'vue';
import {Person} from '../types'
// 装饰器
import {Component,Prop,Watch,Ref} from 'vue-property-decorator'
@Component({})
export default class classComponent extends Vue{
     //props
    @Prop() p1!:string 
    @Prop({default:"默认值"}) p2:string | undefined


    msg1:string = 'lalalla';
    msg2:string = 'lalla'+this.p1
    // msg3:undefined = undefined // 非响应式
    msg4:any = null // 页面不渲染，响应式
    msg5: Person = {id:1,name:'tom',age:22}
    
    mounted(){
        console.log('classComponent',this.msg5.id)
        this.bbox.style.background='red'
    }

    // 事件
    show(arg1:number,arg2:string):void{
        alert('类组件'+arg1+arg2)
    }

   
    // 属性观测
    @Watch('msg1')
    onMsg1nchange(newValue:string,oldValue:string){
        console.log('属性检测',newValue,oldValue)
    }
    // 深度检测
    @Watch('msg5',{deep:true,immediate:true})
    onMsg5nchange(newValue:string,oldValue:string){
        console.log('属性检测555',newValue,oldValue)
    }

    //ref引用元素
    @Ref('box') bbox!:HTMLDivElement

    //
    




}
/* interface Person {
        id:number
        name:string
        age:number
    } */
</script>