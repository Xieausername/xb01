<template>
    <div>
        <div class="page-head">
            <div class="right-head nav">
                <mt-button size="small" @click.native.prevent="active = 'tab-container1'">{{title}}</mt-button>
                <mt-button size="small" @click.native.prevent="active = 'tab-container2'">{{text}}</mt-button>
            </div>
            <div class="right-head">
                <div @click="Img1">
                    <img :src="oneImg" alt="" style="width:25px;">
                </div>
                <div @click="Img2">
                    <img :src="twoImg" alt="" style="width:25px;margin-left:15px;">
                </div>
                <div @click="Img3" style="margin-right:30px;">
                    <img :src="threeImg" alt="" style="width:25px;margin-left:15px;">
                </div>
            </div>
        </div>
        <div class="page-tab-container">
            <mt-tab-container class="page-tabbar-tab-container" v-model="active" swipeable>
                <mt-tab-container-item id="tab-container1">
                    <!-- cell组件 -->
                    <mt-cell style="touch-action: none">
                        <tjbody></tjbody>
                    </mt-cell>
                </mt-tab-container-item>
                <mt-tab-container-item id="tab-container2">
                    <!-- cell组件 -->
                    <mt-cell>
                        <tjbody></tjbody>
                    </mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
import TJbody from './TJbody'
export default {
    name: 'page-tab-container',
    props:{
        title:{default:""},
        text:{default:""},
        oneImg:{default:""},
        twoImg:{default:""},
        threeImg:{default:""},
        Img1:{default:Function},
        Img2:{default:Function},
        Img3:{default:Function}
    },
    data(){
        return{
            active: 'tab-container1'
        }
    },
    components:{
        'tjbody':TJbody
    }
}
</script>

<style>
    .page-head{
        display: flex;
        position: fixed;
        z-index: 999;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        padding-left: 15px;
        background-color: #D5ECE2;
    }
    .right-head{
        display: flex;
    }
    .app-container {
        padding-top: 0px;
    }
    .item {
        display: inline-block;
    }
    
    .nav {
        padding: 10px;
    }
    
    .link {
        color: inherit;
        padding: 20px;
        display: block;
    }
    .mint-button--small{
        background-color: #d5ece2!important;
        color: #000!important;
        font-size: 25px!important;
        font-weight: 1000;
        font-family: "华文行楷";
    }
    .mint-button::after {
        background-color: #D5ECE2!important;
    }
    .mint-cell-wrapper{
        background-color: #d5ece2cf;
    }
</style>