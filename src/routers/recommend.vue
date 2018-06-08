<template>
    <div class="wrapper">
        <div v-for="(item,index) in postItems" :key="index">
            <itemtype :item='item.item' v-if='item.type==0'></itemtype>
            <itemtype1 :item="item.item" v-if='item.type==1'></itemtype1>
            <itemtype5 :item="item.item" v-if='item.type==5'></itemtype5>
            <itemtype16 :item="item.item" v-if='item.type==6'></itemtype16>
        </div>
    </div>
</template>

<style>
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
import itemtype from '../content/itemtype.vue'
import itemtype16 from '../content/itemtype1_6.vue'
import itemtype1 from '../content/itemtype1.vue'
import itemtype5 from '../content/itemtype5.vue'
import api from '../server/api.js'
export default {
    data () {
        return {
            postItems: []
        }
    },
    components: {
        itemtype,
        itemtype1,
        itemtype5,
        itemtype16
    },
    created () {
        var that = this;
        that.getPostItems();
        console.log(this.$router.params)
    },
    methods: {
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
