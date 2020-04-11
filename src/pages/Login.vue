<template>
    <div>Login
        <div>{{StateHome}}</div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {Component} from 'vue-property-decorator'
import {State,Action,Mutation,Getter} from 'vuex-class'
@Component({})
export default class Login extends Vue{
    @State('home') StateHome!:object[]
}
</script>
