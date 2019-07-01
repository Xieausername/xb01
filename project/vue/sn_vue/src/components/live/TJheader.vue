<template>
    <div>
        <div class="wg-head">
            <span>{{title}}</span>
            <div class="wg-header">
                <div @click="Img1">
                    <img :src="oneImg" alt="" style="width:25px;">
                </div>
                <div @click="Img2" style="margin-right:40px;">
                    <img :src="twoImg" alt="" style="width:25px;margin-left:15px;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{default:""},
        oneImg:{default:""},
        twoImg:{default:""},
        Img1:{default:Function},
        Img2:{default:Function}
    },
    data(){
        return{

        }
    },
}
</script>

<style>
    .wg-head{
        display: flex;
        position: fixed;
        z-index: 999;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 48px;
        padding-left: 20px;
        background-color: #D5ECE2;
        color: #000;
        font-size: 35px;
        font-weight: 1000;
        font-family: "华文行楷";
    }
    .wg-header{
        display: flex;
    }
</style>
