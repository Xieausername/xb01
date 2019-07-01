<template>
    <div class="header1">
        <div class="page-wrap">
            
        </div>
        <round></round>
    </div>
</template>

<script>
import  Round from './game/Round'
export default {
    data(){
        return{

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
</style>
