<template>
    <div>
        <div class="wg-login">
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        title:{default:""}
    },
    data(){
        return{

        }
    }
}
</script>

<style>
    .wg-login{
        display: flex;
        position: fixed;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
        z-index: 999;
        background-color: #00B1FD;
        color:#fff;
        font-size: 25px;
        font-family: "楷体";
    }
</style>