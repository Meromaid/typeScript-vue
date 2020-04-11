<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <classComponent p1="第一个props"/>
    <ExtendComponent p1="扩展式组件的props值"/>
    <FunctionComponenet bb1="函数式组件的props值"/> -->
    
    <router-view></router-view>
    <Header/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Header from './Header.vue'
/* import classComponent from './components/classComponent.vue';
import ExtendComponent from './components/ExtendComponent.vue'
import FunctionComponenet from './components/FunctionComponenet.vue' */

@Component({
  components: {
   /*  classComponent,ExtendComponent,FunctionComponenet */
   Header
  },
})
export default class App extends Vue {
  show(arg:number):void{
    console.log('show'+arg)
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
