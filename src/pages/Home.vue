<template>
    <div>
        home
        <div>{{StateHome}}</div>
        <div>{{isLoading}}</div>
    </div>
    
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import axios from 'axios'
import {State,Action,Mutation,Getter} from 'vuex-class'
@Component({})
export default class Home extends Vue{
    /* async mounted(){
        var {data} =  await axios.get('/data/user.json')
        console.log(data)
    } */
    /* mounted(){
        axios({
            url:"/data/user.json"
        }).then(
            res => console.log(res.data)
        )
    } */

     // 装饰器拿到仓库中的数据
     @State bLoading : boolean | undefined
     @State('home') StateHome!:object[]
     @State(state=>state.home[0]) h11!:object

     @Getter('isLoading') getterLoading!: string
     @Getter isLoading!: string

     @Action('UPDATE_HOME') updateHome!:(payload:object)=>void
     @Action UPDATE_HOME!:(payload:object)=>void

     @Mutation('UPDATE_LOADING') updateLaading!:(payload:boolean)=>void
     @Mutation UPDATE_LOADING!:(payload:boolean)=>void

     // 测试
     mounted(){
         this.updateHome({
             _page:'1',
             _limit:'1'
         })
         this.UPDATE_LOADING(true)
     }
}
</script>
