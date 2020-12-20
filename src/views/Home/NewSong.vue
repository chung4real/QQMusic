<template>
  <!-- 新歌首发 -->
    <div class="hm-box hm-newsong">
      <div class="hm-container">
        <div class="hm-common hm-newsong">
          <h2>新&nbsp;歌&nbsp;首&nbsp;发</h2>
          <ul>
            <li><a href="#">最新</a></li>
            <li><a href="#">内地</a></li>
            <li><a href="#">港台</a></li>
            <li><a href="#">欧美</a></li>
            <li><a href="#">韩国</a></li>
            <li><a href="#">日本</a></li>
          </ul>
          <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide swiper-box">
                  <div
                    class="newsong-box"
                    v-for="banner in banners"
                    :key="`banner-${banner.singer_id}`"
                  >
                    <div class="newsong-img">
                      <img :src="banner.singer_pic" alt="">
                    </div>
                    <p>
                      <span>{{banner.singer_name}}</span><br>
                      <span>关注度：{{banner.singer_id.toString().slice(0, 4)}}万</span>
                    </p>
                  </div>
                </div>
                <div class="swiper-slide swiper-box">
                  <div
                    class="newsong-box"
                    v-for="banner in list"
                    :key="`banner-${banner.singer_mid}`"
                  >
                    <div class="newsong-img">
                      <img :src="banner.singer_pic" alt="">
                    </div>
                    <p>
                      <span>{{banner.singer_name}}</span><br>
                      <span>关注度：{{banner.singer_id.toString().slice(0, 4)}}万</span>
                    </p>
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
  name: 'Hm-newsong',
  data () {
    return {
      banners: [],
      list: []
    }
  },
  created () {
    this.$http.getNewSong()
      .then(resp => {
        this.banners = resp.list.slice(0, 9)
        this.list = resp.list.slice(10, 19)
        this.$nextTick().then(() => {
          this.getNewSongBanner()
        })
      })
  },
  methods: {
    getNewSongBanner () {
      // 轮播图渲染
      // eslint-disable-next-line
      new Swiper ('.swiper-container', {
        direction: 'horizontal', // 垂直切换选项
        loop: true, // 循环模式选项
        speed: 2000,
        autoplay: false,
        effect: 'fade',
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
.swiper-box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  .newsong-box {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    margin-top: 20px;
    width: 350px;
    height: 100px;
    border-bottom: 2px solid #f5f5f5;
    p {
      width: 230px;
      height: 70px;
      span {
        display: flex;
      }
    }
    .newsong-img {
      img {
        width: 85px;
        height: 85px;
      }
      span {
        float: left;
      }
    }
  }
}
</style>
