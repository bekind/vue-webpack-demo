<template>
    <div>
        <section v-if='curIdx==0'>
            <div v-for="item in items" :key="item.id">
                <itemtype4 :item='item' v-if='item.type==4'></itemtype4>
                <itemtype6 :item='item' v-else-if='item.type==6'></itemtype6>
            </div>
        </section>
        <section v-else-if='curIdx==1' >
            123
        </section>
        <foottab @tabclick='tabClicked'></foottab>
    </div>
</template>

<style scoped>
</style>

<script>
import itemtype4 from './content/itemtype4.vue'
import itemtype6 from './content/itemtype6.vue'
import foottab from './navigator/tab.vue'
import api from './server/api.js'

export default {
    data () {
        return {
            items: [],
            curIdx: 0
        }
    },
    components: {
        itemtype4,
        itemtype6,
        foottab
    },
    created () {
        var that = this;
        api.get('recommend',{}, (res)=>{
            if (res.meta.status == 200) {
                var response = res.response;
                that.items = response.list.slice(0,5);
            }
        })
    },
    methods: {
        tabClicked: function(data) {
            this.curIdx = data.idx;
        }
    }
}
</script>
