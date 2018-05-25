<template>
    <div>
        <div class="wrapper">
            <section v-if='curIdx==0'>
                <div v-for="item in items" :key="item.id">
                    <itemtype4 :item='item' v-if='item.type==4'></itemtype4>
                    <itemtype6 :item='item' v-else-if='item.type==6'></itemtype6>
                </div>
            </section>
            <section v-else-if='curIdx==1' >
                <div v-for="(item,index) in postItems" :key="index">
                    <itemtype :item='item.item' v-if='item.type==0'></itemtype>
                    <itemtype1 :item="item.item" v-if='item.type==1'></itemtype1>
                    <itemtype5 :item="item.item" v-if='item.type==5'></itemtype5>
                </div>
            </section>
        </div>
        <foottab @tabclick='tabClicked'></foottab>
    </div>
</template>

<style scoped>
.wrapper {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 64px;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
}
</style>

<script>
import itemtype from './content/itemtype.vue'
import itemtype1 from './content/itemtype1.vue'
import itemtype4 from './content/itemtype4.vue'
import itemtype5 from './content/itemtype5.vue'
import itemtype6 from './content/itemtype6.vue'
import foottab from './navigator/tab.vue'
import api from './server/api.js'

export default {
    data () {
        return {
            items: [],
            postItems: [],
            curIdx: 0
        }
    },
    components: {
        itemtype,
        itemtype1,
        itemtype4,
        itemtype5,
        itemtype6,
        foottab
    },
    created () {
        var that = this;
        that.getRecommend();
    },
    methods: {
        tabClicked (data) {
            this.curIdx = data.idx;
            switch(this.curIdx) {
                case 0:
                    this.getRecommend();
                    break;
                case 1:
                    this.getPostItems();
                    break;
                case 2: 
                    break;
            }
        },
        getRecommend () {
            var that = this;
            if (that.items.length>0) return;
            api.get('recommend',{}, (res)=>{
                if (res.meta.status == 200) {
                    var response = res.response;
                    that.items = response.list;
                }
            });
        },
        getPostItems () {
            var that = this;
            if (that.postItems.length>0) return;
            api.get('domainpost',{}, (res)=>{
                if (res.meta.status == 200) {
                    var response = res.response;
                    that.postItems = response.items;
                }
            });
        }
    }
}
</script>
