<template>
    <div class="header1">
        <div class="page-wrap">
            <!-- 1.自定义标题子组件 -->
            <tjheader title="直播" 
            :oneImg="require('../assets/chazhao.png')" 
            :twoImg="require('../assets/ElecfansAPPiCON_.png')" 
            :Img1="myImg1" 
            :Img2="myImg2">
            </tjheader>
            <div style="margin-top:48px"></div>
            <tjbody></tjbody>
        </div>
    </div>
</template>

<script>
import TJheader from './live/TJheader'
import TJbody from './live/TJbody'
export default {
    data(){
        return{

        }
    },
     methods: {
        myImg1(){console.log("Img1");},
        myImg2(){console.log("Img2");}
    },
    components:{
        'tjheader':TJheader,
        'tjbody':TJbody
    }
}
</script>

<style>
    .header1{
        overflow: hidden;
        background-color:  #F5F7F6;
    }
</style>