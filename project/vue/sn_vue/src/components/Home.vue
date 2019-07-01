<template>
    <div class="page-tabbar">
        <div class="page-wrap">
            <!-- 切换面干 -->
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="recommend">
                    <recommend></recommend>
                </mt-tab-container-item>
                <mt-tab-container-item id="live">
                    <live></live>
                </mt-tab-container-item>
                <mt-tab-container-item id="game">
                    <game></game>
                </mt-tab-container-item>
                <mt-tab-container-item id="me">
                    <me></me>
                </mt-tab-container-item>
            </mt-tab-container>
            <!-- 底部导航栏 -->
            <mt-tabbar v-model="selected" fixed class="footer"> 
                <mt-tab-item id="recommend">
                    <tabbaricon 
                        :selectedImage="require('../assets/tuijianjilu.png')" 
                        :normalImage="require('../assets/tuijian_1.png')" 
                        :focused="currentIndex[0].isSelect">
                    </tabbaricon>推荐
                </mt-tab-item>
                <mt-tab-item id="live">
                    <tabbaricon 
                        :selectedImage="require('../assets/zhibo.png')" 
                        :normalImage="require('../assets/chat-video.png')" 
                        :focused="currentIndex[1].isSelect">
                    </tabbaricon>直播
                </mt-tab-item>
                <mt-tab-item id="game">
                    <tabbaricon 
                        :selectedImage="require('../assets/youxi_1.png')" 
                        :normalImage="require('../assets/youxi.png')" 
                        :focused="currentIndex[2].isSelect">
                    </tabbaricon>游戏
                </mt-tab-item>
                <mt-tab-item id="me">
                    <tabbaricon 
                        :selectedImage="require('../assets/wode.png')" 
                        :normalImage="require('../assets/wode_1.png')" 
                        :focused="currentIndex[3].isSelect">
                    </tabbaricon>我的
                </mt-tab-item>
            </mt-tabbar>
        </div>
    </div>
</template>

<script>
import TabBarIcon from './recommend/TabBarIcon'
import Recommend from './recommend'
import Live from './live'
import Game from './game'
import Me from './me'
export default {
    data(){
        return{
            selected:"recommend",
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false}
            ]
        }
    },
    components:{
        "recommend":Recommend,
        "tabbaricon":TabBarIcon,
        "live":Live,
        'game':Game,
        'me':Me
    },
    watch:{  
        selected(){
            this.currentIndex=[
                {isSelect:this.selected=='recommend'},
                {isSelect:this.selected=='live'},
                {isSelect:this.selected=='game'},
                {isSelect:this.selected=='me'}
            ]
        }
    }
}
</script>

<style>
    div#nav{
        padding: 0;
    }
    /* body默认内边距 */
    body {
    margin: 0;
    }
    .footer{
        height: 48px;
        align-items: center;
    }
    .page-wrap{
        overflow: auto;
        padding-bottom: 0px;
    }
    /* 默认文本tabbar颜色 */
    .mint-tabbar > .mint-tab-item{
        color:#999999;
    }
     /* 尾部背景 */
    .mint-tabbar > .mint-tab-item.is-selected{
        background-color: #fafafa !important;
        color:#000 !important;
    }
</style>

