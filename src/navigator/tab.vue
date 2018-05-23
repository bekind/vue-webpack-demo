<template>
    <div class="footer-tab">
        <ul class="tab-wrapper clearfix">
            <li v-for='(item, index) in tabs' 
            :key='index' 
            :class="[item.cls,{active: activeIndex==index}]" 
            @click='tabClick(index)'>
        <span></span>{{item.title}}</li>
        </ul>
    </div>
</template>

<style scoped>
.clearfix:after {
    clear: both;
    content: '';
    font-size: 0;
    display: block;
    visibility: hidden;
    height: 0;
}
.footer-tab {
    width: 100%;
    height: 64px;
    position: fixed;
    bottom: 0;
    background: #eee;
}
.tab-wrapper {
    height: 100%;
    display: flex;
    display:-webkit-box;
    display:-webkit-flex;
    display:-ms-flexbox;
    padding: 0 10px;
    margin: 0 0;
    align-items: center;
}
.tab-wrapper li {
    flex: 1;
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    -ms-flex: 1;
    text-align: center;
    font-size: 12px;
    color: #515151;
}
.tab-wrapper li.active {
    color: #d81e06;
}
.tab-wrapper li p {
    margin: 0;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
}
.tab-wrapper li span {
    width: 24px;
    height: 28px;
    display: block;
    margin: auto;
    position: relative;
}
.tab-wrapper li.index span {
    background: url('../icon/home.png') no-repeat;
    background-size: 24px 24px;
}
.tab-wrapper li.index.active span{
    background: url('../icon/home-active.png') no-repeat;
    background-size: 24px 24px;
}
.tab-wrapper li.recommend span {
    background: url('../icon/brand.png') no-repeat;
    background-size: 24px 24px;
}
.tab-wrapper li.recommend.active span{
    background: url('../icon/brand-active.png') no-repeat;
    background-size: 24px 24px;
}
.tab-wrapper li.find span {
    background: url('../icon/focus.png') no-repeat;
    background-size: 24px 24px;
}
.tab-wrapper li.find.active span{
    background: url('../icon/focus-active.png') no-repeat;
    background-size: 24px 24px;
}
.tab-wrapper li.setting span {
    background: url('../icon/set.png') no-repeat;
    background-size: 24px 24px;
}
.tab-wrapper li.setting.active span{
    background: url('../icon/set-active.png') no-repeat;
    background-size: 24px 24px;
}
</style>

<script>
export default {
    name: 'foottab',
    data () {
        return {
            tabs: [
                {title: '首页', cls: 'index'},
                {title: '推荐', cls: 'recommend'},
                {title: '发现', cls: 'find'},
                {title: '设置', cls: 'setting'},
            ],
            activeIndex: 0
        }
    },
    methods: {
        tabClick (idx) {
            this.activeIndex = idx;
            this.$emit('tabclick',{idx: idx});
        }
    }
}
</script>
