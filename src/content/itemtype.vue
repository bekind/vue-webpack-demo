<template>
    <div>
        <swiper :options="swiperOption">
            <swiper-slide v-for="(data,index) in item" :key='index'>
                <div class="content">
                    <img v-lazy='data.img'>
                </div>
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
import '../swiper.min.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
    name: 'itemtype',
    props: ['item'],
    components: {
        swiper,
        swiperSlide
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    data () {
        return {
            swiperOption: {
                observer:true,
                observerParents: true,
                autoplay:true,
                // loop: true,
                disableOnInteraction : false,
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    // updated () {
    //     console.log(1);
    //     this.swiper.autoplay.start();
    // },
    mounted() {
    }
}
</script>
<style scoped>
.content {
    width: 100%;
    height: 175px;
}

.content img {
    width: 100%;
    height: 100%;
}
</style>
