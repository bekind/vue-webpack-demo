<template>
    <div class="item-wrap" v-if="item.post.type==1">
        <div class="desp">
            <p class="title">{{item.post.title}}</p>
            <p class="description line4">{{item.post.content}}</p>
            <p class="author">作者：{{item.blogNickName}}</p>
        </div>
    </div>
    <div class="item-wrap" v-else-if="item.post.type==2">
        <div class="image-wrap">
            <img class='pic' v-lazy="item.post.image" />
            <span class='pic-num' v-if='item.post.ext.imageNum>1'>{{item.post.ext.imageNum}}</span>
        </div>
        <div class="desp">
            <p class="description line2">{{item.post.content}}</p>
            <p class="author">作者：{{item.blogNickName}}</p>
        </div>
    </div>
    <div class="item-wrap" v-else-if="item.post.type==6">
        <div class="desp">
            <p class="title">{{item.post.title}}</p>
            <p class="description line4">{{item.post.content}}</p>
            <p class="author">作者：{{item.blogNickName}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'itemtype6',
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

.title {
    font-size: 18px;
    font-weight: bold;
}

.image-wrap {
    position: relative;
    width: 100%;
    max-height: 340px;
    overflow: hidden;
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
    right: 15px;
    width: 20px;
    height: 20px;
    border-radius: 2px;
    text-align: center;
    font-size: 13px;
    line-height: 20px;
}

.desp {
    margin: 0 10px 10px;
    padding-bottom: 10px;
    border-bottom: #eee solid 1px;
}

.line2 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
}

.line4 {
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
    word-break: break-all;
    text-overflow: ellipsis;
    display: -webkit-box;
    overflow: hidden;
}

.description {
    color: #333;
    font-size: 15px;
    line-height: 25px;
}

.author {
    font-size: 15px;
    line-height: 20px;
    color: #999;
}
</style>