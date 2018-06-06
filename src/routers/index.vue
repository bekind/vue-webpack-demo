<template>
    <div class="wrapper">
        <div v-for="item in items" :key="item.id">
            <itemtype4 :item='item' v-if='item.type==4'></itemtype4>
            <itemtype6 :item='item' v-else-if='item.type==6'></itemtype6>
        </div>
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
import itemtype4 from '../content/itemtype4.vue'
import itemtype6 from '../content/itemtype6.vue'
import api from '../server/api.js'

export default {
    data () {
        return {
            items: []
        }
    },
    components: {
        itemtype4,
        itemtype6
    },
    created () {
        var that = this;
        that.getRecommend();
    },
    methods: {
        getRecommend () {
            var that = this;
            if (that.items.length>0) return;
            api.get('recommend',{}, (res)=>{
                if (res.meta.status == 200) {
                    var response = res.response;
                    that.items = response.list;
                }
            });
        }
    }
}
</script>
