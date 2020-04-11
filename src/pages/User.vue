<template>
    <div>goods</div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import {Route} from 'vue-router'
@Component({
    beforeRouteEnter(to:Route,from:Route,next:Function){
        console.log('之间内部的前置守卫')
        next()
    }
})
export default class Goods extends Vue{}
</script>
