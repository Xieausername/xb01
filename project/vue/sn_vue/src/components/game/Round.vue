<template>
    <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <img src="../../assets/round04.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/round03.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/round02.jpg" alt="">
                </div>
                <div class="swiper-slide">
                    <img src="../../assets/round01.jpg" alt="">
                </div>
            </div>
            <!-- 如果需要分页器 -->
            <!-- <div class="swiper-pagination"></div> -->
            
            <!-- 如果需要导航按钮 -->
            <!-- <div class="swiper-button-prev"></div> -->
            <!-- <div class="swiper-button-next"></div> -->
            
            <!-- 如果需要滚动条 -->
            <!-- <div class="swiper-scrollbar"></div> -->
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper';
export default {
    data(){
        return{
            
        }
    },
    mounted(){
        var mySwiper = new Swiper ('.swiper-container', {
            //direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项
            autoplay: {// 自动滑动
              delay: 4000, //1秒切换一次
              disableOnInteraction: false
            },
            //autoplay: true, //自动轮播
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,//修改swiper的父元素时，自动初始化swiper
            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },
            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 如果需要滚动条
            scrollbar: {
                el: '.swiper-scrollbar',
            },
        })        
    }
}
</script>

<style scoped>
    .swiper-container {
        width: 100%;
        height: 280px;
        margin: 20px auto;
    }
    .swiper-slide>img{
        width: 100%;
        height: 260px;
    }
</style>