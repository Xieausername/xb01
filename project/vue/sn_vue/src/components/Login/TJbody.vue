<template>
    <div class="content">
        <div>
            <img src="../../assets/login.png" style="width:100%;" alt="">
            <div>
                <mt-field placeholder="QQ号码" v-model="utext" class="input"></mt-field>
                <mt-field placeholder="密码" v-model="upass" type="password" class="input"></mt-field>
            </div>
        </div>
        <div class="bt-login">
            <mt-button size="large" type="primary" class="mybutton" @click="login">登录</mt-button>
        </div>
        <tjfoter></tjfoter>
    </div>
</template>

<script>
import TJfoter from './TJfoter'
export default {
    data(){
        return{
            utext:"",
            upass:""
        }
    },
    methods:{
        login(){
            var t=this.utext;
            var p=this.upass;
            var treg=/^[0-9]{5,10}$/;
            var preg=/^[\w]{6,16}$/;
            if(!treg.test(t)){
                this.$toast("账号格式不正确");
                return;
            }
            if(!preg.test(p)){
                this.$toast("密码格式不正确");
                return;
            }
            var url="Login";
            var obj={utext:t,upass:p};
            this.axios.get(url,{params:obj}).then(result=>{
              if(result.data.code==1){
                this.$router.push("/Home");
              }else{
                this.$messagebox("消息",result.data.msg);
              }
            });
        }
    },
    components:{
        'tjfoter':TJfoter
    },
}
</script>

<style>
    .bt-login{
        padding-top: 20px;
    }
    .ft-login{
        display: flex;
        padding-top: 10px;
        padding-left: 5px;
        color: #00B1FD;
        font-family: "楷体";
        font-size: 18px;
    }
    .input{
        color:#C3C3C3;
        font-family: "楷体";
        padding:0 10px 0 10px;
        border-bottom:0.1px solid #ddd;
    }
</style>