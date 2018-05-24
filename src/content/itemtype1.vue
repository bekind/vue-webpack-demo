<template>
    <div class="image-wrap">
        <div v-for="data in item" :key="data.name">
            <img :src='data.image'>
            <span class="mask">{{data.name}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'itemtype1',
    props: ['item']
}
</script>
<style scoped>
.image-wrap{
    height: 100px;
    display: -webkit-box;
    overflow-x: scroll;
    -webkit-overflow-scrolling:touch;
    padding: 10px 10px;
}
.image-wrap div {
    width: 100px;
    height: 100px;
    margin-right: 10px;
    position: relative;
    overflow: hidden;
}
.image-wrap img {
    width: 100%;
    height: 100%;
}
.mask {
    position: absolute;
    background: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,0.5));  
    background: -o-linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,0.5));  
    background: -moz-linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,0.5));  
    background: -mos-linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,0.5));  
    background: linear-gradient(rgba(255, 255, 255, 0), rgba(0,0,0,0.8)); 
    top: 50px;
    left: 0;
    display: inline-block;
    width: 80px;
    height: 50px;
    color: white;
    line-height: 50px;
    padding: 0 10px;
}
</style>
