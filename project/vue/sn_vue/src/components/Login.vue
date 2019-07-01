<template>
    <div class="wg-l">
        <div class="page-wrap">
            <login title="QQ登录"></login>
        </div>
        <div style="margin-top:48px"></div>
        <tjbody></tjbody>
    </div>
</template>

<script>
import Login from './Login/Title'
import TJbody from './Login/TJbody'
import axios from 'axios'
export default {
    data(){
        return{

        }
    },
    components:{
        "login":Login,
        "tjbody":TJbody
    }
}
</script>

<style>
    .wg-l{
        overflow: hidden;
        background-color: #F4F8FB;
        padding-bottom: 147px;
    }
</style>