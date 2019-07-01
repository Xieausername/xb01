<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <!-- 1.自定义标题子组件 -->
            <tjheader title="推荐" text="关注" 
            :oneImg="require('../assets/liwu.png')" 
            :twoImg="require('../assets/chazhao.png')" 
            :threeImg="require('../assets/saoma.png')" 
            :Img1="myImg1" 
            :Img2="myImg2" 
            :Img3="myImg3">
            </tjheader>
            <div style="margin-top:48px"></div>
        </div>
    </div>
</template>

<script>
import TJheader from './recommend/TJheader'
export default {
    data(){
        return{
            
        }
    },
    methods: {
        myImg1(){console.log("Img1");},
        myImg2(){console.log("Img2");},
        myImg3(){console.log("Img3");}
    },
    components:{
        'tjheader':TJheader
    }
}
</script>

<style>
    .page-tabbar{
        overflow: hidden;
        background-color:  #F5F7F6;
    }
</style>