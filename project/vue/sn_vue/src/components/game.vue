<template>
    <div class="header1">
        <div class="game-wrap">
            <span>游戏</span>
            <div class="game-cz" @click="gamecz">
                <img style="width:25px;padding-right:40px;" src="../assets/chazhao.png" alt="">
            </div>
        </div>
        <round></round>
        <div class="game-th">
            <div class="game-text">特惠专区</div>
            <div class="game-th2">
                <img src="../assets/game01.png" class="game-img1" alt="">
                <div class="game-th3">
                    <img style="width:50%;" src="../assets/game02.png" alt="">
                    <div style="width:5px;height:118px;"></div>
                    <img src="../assets/game03.jpg" class="game-img3" alt="">
                </div>
            </div>
        </div>
        <div class="wg-navbar">
            <mt-navbar class="wg-navbar-tab" v-model="selected">
                <mt-tab-item id="1">火爆新品</mt-tab-item>
                <mt-tab-item id="2">本周热门</mt-tab-item>
                <mt-tab-item id="3">最新上架</mt-tab-item>
                <mt-tab-item id="4">折扣促销</mt-tab-item>
            </mt-navbar>
            <!-- tab-container -->
            <mt-tab-container class="wg-navbar-ctn" v-model="selected">
                <mt-tab-container-item class="wg-navbar-ctn-item" id="1">
                    <mt-cell class="wg-cell" v-for="(n,index) in 10" :key="index" :title="'content ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                    <mt-cell v-for="(n,index) in 4" :key="index" :title="'content ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                    <mt-cell v-for="(n,index) in 6" :key="index" :title="'content ' + n" />
                </mt-tab-container-item>
                <mt-tab-container-item id="4">
                    <mt-cell>
                        <div>
                            <img src="../assets/game02.png" alt="">
                            <div>
                                <h3>三国杀</h3>
                                <p>564sd68as7d</p>
                                <div style="btn-border">免费</div>
                            </div>
                        </div>
                    </mt-cell>
                </mt-tab-container-item>
            </mt-tab-container>
        </div>
    </div>
</template>

<script>
import  Round from './game/Round'
export default {
    name: 'page-navbar',
    data(){
        return{
            selected:'1'
        }
    },
    methods: {
        gamecz(){
            console.log("wegame");
        }
    },
    components:{
        'round':Round
    }
}
</script>

<style>
    .header1{
        overflow: hidden;
        background-color:  #F5F7F6;
    }
    .game-wrap{
        display: flex;
        position: fixed;
        z-index: 999;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        padding-left: 20px;
        /* background-color: #D5ECE2; */
        background-color: #D5ECE2;
        color: #000;
        font-size: 35px;
        font-weight: 1000;
        font-family: "华文行楷";
        border-bottom: 1px solid #000;
    }
    .geme-cz{
        display: flex;
    }
    .game-th{
        padding-bottom: 20px;
        margin-right: 10px;
        margin-left: 10px;
    }
    .game-text{
        color: #000;
        font-size: 28px;
        font-weight: 1000;
        font-family: "华文行楷";
        text-align: left;
        padding-left: 10px;
        padding-bottom: 10px;
    }
    .game-th2{
        position: relative;
    }
    .game-img1{
        display: flex;
        padding-bottom: 5px;
        width: 100%;
    }
    .game-th3{
        display: flex;
    }
    .game-img3{
        /* padding-left: 5px; */
        width: 50%;
    }
    /* 导航栏 */
    .wg-navbar{
        padding:0 10px 200px 10px;
    }
    .wg-navbar-ctn{
        padding-top: 10px;
    }
    .wg-navbar>.wg-navbar-tab{
        color: #B1B3B2;
    }
    .mint-navbar .mint-tab-item.is-selected {
        color:#000 !important;
        border-bottom: 3px solid #F0C45D !important;
    }
    .mint-cell-wrapper{
        background: #fff;
    }
</style>
