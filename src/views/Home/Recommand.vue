<template>
  <!-- 精彩推荐 -->
    <div class="hm-box hm-recommand">
      <div class="hm-container">
        <div class="hm-common hm-recommand">
          <h2>精&nbsp;彩&nbsp;推&nbsp;荐</h2>
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div
                  class="swiper-slide"
                  v-for="banner in banners"
                  :key="`banner-${banner.id}`"
                >
                  <div class="recommand-box" >
                    <img :src="banner.picUrl" alt="">
                  </div>
                </div>
              </div>
              <!-- 如果需要分页器 -->
              <div class="swiper-pagination"></div>
              <!-- 如果需要导航按钮 -->
              <div class="swiper-button-prev swiper-button-black"></div>
              <div class="swiper-button-next swiper-button-black"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Hm-recommand',
  data () {
    return {
      banners: []
    }
  },
  created () {
    this.$http.getBanner()
      .then(resp => {
        this.banners = resp
        this.$nextTick().then(() => {
          this.getRecommandBanner()
        })
      })
  },
  methods: {
    getRecommandBanner () {
      // eslint-disable-next-line
      new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed: 2000,
        effect: 'fade',
        autoplay: true,
        fadeEffect: {
          crossFade: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
.recommand-box {
  width: 800px;
  height: 300px;
  margin: auto;
  overflow: hidden;
}
.recommand-box img {
  transition: all 0.4s;
}
.recommand-box img:hover{
  transform: scale(1.1);
}
</style>
