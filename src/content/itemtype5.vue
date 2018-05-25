<template>
    <div class="item-wrapper">
        <div class="fans-opt">
            <div class="fans">
                <img v-lazy='item.post.blogInfo.bigAvaImg'>
                <span>{{item.post.blogInfo.blogNickName}}</span>
            </div>
            <div class="focus-btn">关注</div>
        </div>
        <div class="post">
            <img v-if='getMiddleSize(item.post)' v-lazy="getMiddleSize(item.post)">
            <div class="caption">
                <p class="desc" v-html='item.post.digest'></p>
                <div class="see-all" v-if="item.post.type==1">查看全文</div>
                <p class="tags" v-if='item.post.tagList.length'><em>#</em><span v-for='tag in item.post.tagList' :key="tag">{{tag}}</span></p>
            </div>
            <div class="menu">
                <span class="like"></span>
                <span class="message"></span>
                <span class="send"></span>
                <span class="zan"></span>
                <span class="more"></span>
            </div>
            <div class="comments">
                <p><span>{{item.post.postCount.postHot}}热度</span><span>{{item.post.postCount.responseCount}}条评论</span></p>
                <ul>
                    <li v-for="comment in item.comments" :key="comment.id"><em>{{comment.publisherMainBlogInfo.blogNickName}}</em><span v-if='comment.replyBlogInfo'>回复了<em class="ml5">{{comment.replyBlogInfo.blogNickName}}</em></span>：<span v-html='comment.content'></span></li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'itemtype5',
    props: ['item'],
    methods: {
        getMiddleSize (post) {
            if (post.firstImageUrl) {
                var imageArr = JSON.parse(post.firstImageUrl);
                if (imageArr.length>1) {
                    return imageArr[1]
                }
            }
            return post.firstSmallImageUrl;
        }
    }
}
</script>
<style scoped>
.item-wrapper {
    background: #f4f6f5;
    padding-top: 10px;
}
.fans-opt {
    width: 100%;
    height: 64px;
    display: -webkit-flex;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: #fff;
}
.fans {
    display: flex;
    align-items: center;
    margin-left: 10px;
}
.fans img{
    width: 44px;
    height: 44px;
    border-radius: 50%;
}
.fans span{
    margin-left: 10px;
}
.focus-btn {
    width: 60px;
    height: 30px;
    text-align: center;
    background: #98cb27;
    color: white;
    border-radius: 15px;
    line-height: 30px;
    margin-right: 10px;
}
.post {
    width: 100%;
    background: white;
}
.post img {
    width: 100%;
    height: auto;
}
.caption {
    margin: 0 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    border-bottom: #999 dashed 1px;
}
.caption p{
    margin: 0;
    line-height: 32px;
}
.caption p.desc{
    color: #333;
}
.desc p{
    margin: 0;
}
.caption p.tags{
    color: #999;
}
.caption p.tags em{
    font-style: normal;
    font-weight: bold;
    color: #becaca;
}
.caption p.tags span{
    margin-left: 10px;
}
.menu {
    width: 100%;
    background: white;
    margin: 10px 0;
}
.menu span{
    display: inline-block;
    width: 30px;
    height: 30px;
    margin-left: 10px;
}
.menu span.like{
    background: url('../icon/like.png') no-repeat;
    background-size: 100% 100%;
}
.menu span.like.active{
    background: url('../icon/like_fill.png') no-repeat;
    background-size: 100% 100%;
}
.menu span.message{
    background: url('../icon/message.png') no-repeat;
    background-size: 25px 25px;
    background-position: center center;
}
.menu span.send{
    background: url('../icon/send.png') no-repeat;
    background-size: 25px 25px;
    background-position: center center;
}
.menu span.zan{
    background: url('../icon/praise.png') no-repeat;
    background-size: 100% 100%;
}
.menu span.zan.active{
    background: url('../icon/praise_fill.png') no-repeat;
    background-size: 100% 100%;
}
.menu span.more{
    background: url('../icon/more1.png') no-repeat;
    background-size: 100% 100%;
    float: right;
    margin-right: 20px;
}
.comments {
    color: #999;
}
.comments p {
    margin: 0;
    color: #aaa;
}
.comments p span {
    margin-left: 10px;
}
.comments ul {
    list-style: none;
    padding: 0 10px;
}
.comments ul li em {
    font-style: normal;
    color: #5da1bd;
}
.comments ul li span {
    margin: 0 5px;
}
.ml5{
    margin-left: 5px;
}
.see-all{
    width: 100px;
    height: 30px;
    border-radius: 30px;
    color: #999;
    border: 1px solid #999;
    text-align: center;
    line-height: 30px;
    margin-bottom: 10px;
}
</style>
