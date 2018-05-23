<template>
    <div class="item-wrap">
        <div class="image-wrap">
            <img class='pic' v-lazy="item.image" />
        </div>
        <div class="desp">
            <div class="description"><div class='mark'>{{item.mark}}</div>{{item.title}}</div>
            <div class="author">{{item.postCount}}人参与</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'itemtype4',
    props: ['item'],
    data () {
        return {
        }
    },
    mounted () {}
}
</script>

<style scoped>
.item-wrap {
    padding-bottom: 20px;
}

.pic {
    width: 100%;
    height: auto;
}

.pic-num {
    background: #333;
    position: absolute;
    color: white;
    bottom: 20px;
    right: 20px;
}

.desp {
    margin: 0 10px 10px;
    padding-bottom: 10px;
    border-bottom: #eee solid 1px;
}

.description {
    color: #333;
    font-size: 15px;
    line-height: 30px;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
    margin: 10px 0;
}

.mark {
    display: inline-block;
    width: 16px;
    line-height: 16px;
    text-align: center;
    color: white;
    border-radius: 2px;
    font-size: 12px;
    background: #c10721;
    margin-right: 10px;
    vertical-align: middle;
}

.author {
    font-size: 15px;
    line-height: 20px;
    color: #999;
    margin: 10px 0;
}
</style>