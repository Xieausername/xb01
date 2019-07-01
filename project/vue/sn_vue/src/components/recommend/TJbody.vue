<template>
    <div class="content">
        <div class="body">
            <img src="../../assets/header4.png" style="width:100%;" alt="">
            <div class="text">完成挑战100%得Q币</div>
        </div>
        <div class="body1">
            <div class="cont1 cont">
                <div class="none">
                    <div class="text overflow">掌火板块抢先曝料 全新父亲节限定头像框来袭</div>
                    <div class="text1 Pdtop">穿越火线</div>
                </div>
                <img src="../../assets/header2.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1 cont">
                <div>
                    <div class="text overflow">我带你们打！弑魔纪元套装来一套！！！</div>
                    <div class="text1 Pdtop">穿越火线</div>
                </div>
                <img src="../../assets/header1.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1">
                <div>
                    <div class="text overflow">耀金皮肤再度放出，是不是该考虑出出货了！</div>
                    <div class="text1 Pdtop">穿越火线</div>
                </div>
                <img src="../../assets/header3.png" class="Re-imgs" alt="">
            </div>
        </div>
        <div class="body" style="margin-top:20px;">
            <video src="../../assets/video1.mp4"  controls loop preload="auto" poster="../../assets/game.png" style="width:100%;"></video>
            <div>
                <div class="text">这一狙名为喜欢~</div>
                <div class="cont-bom">
                    <span class="text1" style="align-items:center;">久帝~阿飞
                        <img src="../../assets/zhi1.png" style="padding-left:10px;" alt="">
                    </span>
                    <span class="text1" style="padding-right:10px;align-items:center;">穿越火线</span>
                </div>
            </div>
        </div>
        <div class="body1">
            <div class="cont1 cont">
                <div class="none">
                    <div class="text overflow">角色大放送！说出你最想要的永久角色！</div>
                    <div class="text1 Pdtop">穿越火线</div>
                </div>
                <img src="../../assets/game7.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1 cont">
                <div>
                    <div class="text overflow">夏日专属皮肤来袭,快看是不是你的菜！</div>
                    <div class="text1 Pdtop">逆战</div>
                </div>
                <img src="../../assets/game1.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1">
                <div>
                    <div class="text overflow">女枪的正确打开方式,中期穿甲后期暴击,快来尝试吧！</div>
                    <div class="text1 Pdtop">英雄联盟</div>
                </div>
                <img src="../../assets/game2.png" class="Re-imgs" alt="">
            </div>
        </div>
        <div class="body1">
            <img src="../../assets/game5.png" style="width:100%;" alt="">
            <div>
                <div class="text">虎扑专访FPX小天:队友都是队霸级别 我性格好就贴合团队</div>
                <div class="text1" style="padding-top:5px;padding-bottom:10px;">英雄联盟</div>
            </div>
        </div>
        <div class="body1">
            <div class="cont1 cont">
                <div class="none">
                    <div class="text overflow">Wegame平台《古剑奇谭网络版》仙潜测试公告</div>
                    <div class="text1 Pdtop">古剑奇谭网络版</div>
                </div>
                <img src="../../assets/game10.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1 cont">
                <div>
                    <div class="text overflow">回忆杀！迎接DNF11周年,旧版本历史回顾</div>
                    <div class="text1 Pdtop">地下城与勇士</div>
                </div>
                <img src="../../assets/game3.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1 cont">
                <div>
                    <div class="text overflow">《Mordhua》：中世纪鸡尾酒游戏的色与味</div>
                    <div class="text1 Pdtop">WeGame</div>
                </div>
                <img src="../../assets/game11.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1 cont">
                <div>
                    <div class="text overflow">今日游报：E3 2019,Xbox扬帆起航</div>
                    <div class="text1 Pdtop">WeGame</div>
                </div>
                <img src="../../assets/game8.png" class="Re-imgs" alt="">
            </div>
            <div class="cont1">
                <div>
                    <div class="text overflow">双萝莉组合幻神达成双礼包跨度小需二选一</div>
                    <div class="text1 Pdtop">地下城与勇士</div>
                </div>
                <img src="../../assets/game12.png" class="Re-imgs" alt="">
            </div>
        </div>
        <div>
            <mt-button size="large" type="primary" @click="loadMore">加载更多</mt-button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    },
    methods: {
        loadMore(){
            console.log("已经到底了");
        }   
    },
}
</script>

<style>
    body{
        touch-action: none;
    }
    /* 总页面 */
    .content{
        padding-top: 48px;
        margin-left: 10px;
        margin-right: 10px;
        /* touch-action: none; */
    }
    /* 第一个div样式 */
    .body{
        width: 100%;
        background-color: #fff;
    }
    .text{
        font-size: 17px;
        font-family: "楷体";
        font-weight: 700;
        padding-top: 10px;
        display: flex;
        padding-left: 15px;
        padding-bottom: 10px;
        color: black;
        text-align: left;
    }
    /* 第二个div样式 */
    .body1{
        width:100%;
        background-color: #fff;
        margin-top: 20px;
    }
    .text1{
        font-size: 8px;
        color: #999;
        display: flex;
        padding-left: 18px;
    }
    .cont1{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 110px;
        margin: 10px;
    }
    .cont{
        border-bottom: 0.1px solid #ddd;
    }
    .none{
        display: flex-start;
    }
    .cont-bom{
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
    }
    /* 所有图片 */
    .Re-imgs{
        width:130px;
        height:90px;
        padding-left:10px;
        flex-shrink:0;
    }
    /* 文本溢出隐藏 */
    .overflow {
        /* position:relative; */
        line-height:20px;
        max-height:32px;
        overflow:hidden;
    }
    /* 显示省略号 */
    /* .overflow::after {
        content: "\02026";
        position:absolute;
        bottom:0;
        right:0;
        padding-left:40px;
        background:-webkit-linear-gradient(left,transparent,#fff 55%);
        background:-o-linear-gradient(right,transparent,#fff 55%);
        background:-moz-linear-gradient(right,transparent,#fff 55%);
        background:linear-gradient(to right,transparent,#fff 55%);
    } */
    .Pdtop{
        padding-top: 15px;
    }
</style>