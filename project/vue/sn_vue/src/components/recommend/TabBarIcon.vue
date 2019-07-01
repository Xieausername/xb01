<template>
    <div>
        <img :src="focused?selectedImage:normalImage" class="imgstyle" alt="">
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    props:{
        focused:{default:false},
        selectedImage:{default:""},
        normalImage:{default:""}
    }
}
</script>

<style scoped>
    .imgstyle{
        width: 20px;
        height: 20px;
    }
</style>