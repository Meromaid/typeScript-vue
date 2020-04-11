<template>
    <div>Reg</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import {Route} from 'vue-router'
@Component({
    beforeRouteLeave(to:Route,from:Route,next:Function){
        console.log('之间内部的后置置守卫')
        next()
    }
})
export default class Reg extends Vue{}
</script>
