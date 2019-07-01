<template>
  <div class="hello">
    <div class="page-actionsheet-wrapper">
      <div class="ft-login" @click="actionSheet">忘记密码?</div> 
    </div>
    <mt-actionsheet class="name-text" :actions= "data" v-model="sheetVisible"></mt-actionsheet>
  </div>
</template>
 
<script>
  export default {
    name: 'hello',
    data () {
      return {
        // action sheet 选项内容
        data: [{
          name: '找回QQ',
          method : this.getCamera	// 调用methods中的函数
        }, {
          name: '短信验证登录',
          method : this.getLibrary	// 调用methods中的函数
        }],
        // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
        sheetVisible: false
      }
    },
    methods: {
      actionSheet: function(){
        // 打开action sheet
        this.sheetVisible = true;
      },
      getCamera: function(){
        console.log("找不到了")
      },
      getLibrary: function(){
        console.log("发不了短信")
      }
    }
  }
</script>
 
<style>
  .mint-actionsheet-listitem, .mint-actionsheet-button{
    font-weight: 1000;
    font-family: "楷体";
  }
  .ft-login{
        display: flex;
        padding-top: 10px;
        padding-left: 5px;
        color: #00B1FD;
        font-family: "楷体";
        font-size: 18px;
    }
</style>