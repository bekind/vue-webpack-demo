<template>
    <div class="avatars">
        <div class="avatar-info">
            <div>二次元达人</div>
            <div class="img-list">
                <i></i>
                <img v-lazy="avator" v-for="avator in item.avators" :key="avator"/>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'itemtype16',
    props: ['item']
}
</script>
<style scoped>
.avatars {
    width: 100%;
    height: 60px;
    background: #f4f6f5;
    padding-top: 10px;
    line-height: 60px;
    color: #333;
}
.avatar-info {
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
}
.img-list {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
}
.img-list i{
    display: inline-block;
    width: 25px;
    height: 25px;
    background: url('../icon/rigtharrow.png') no-repeat;
    background-size: 25px 25px;
    background-position: right center;
    margin-left: 10px;
}
.img-list img{
    display: inline-block;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: -10px;
    border: 2px solid #fff;
}
</style>
