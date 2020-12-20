<template>
  <!-- 歌单推荐 -->
  <div class="hm-box" name="hm-songlist">
    <div class="hm-container">
      <div class="hm-common hm-songlist">
        <h2>歌&nbsp;单&nbsp;推&nbsp;荐</h2>
        <ul>
          <li><a href="#">为你推荐</a></li>
          <li><a href="#">MC喊麦</a></li>
          <li><a href="#">安静</a></li>
          <li><a href="#">睡前</a></li>
          <li><a href="#">寂寞</a></li>
          <li><a href="#">乐器</a></li>
        </ul>
        <div class="songlist-swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <div class="songlist">
                  <div
                    class="songlist-box"
                    v-for="banner in banners"
                    :key="`banner-${banner.content_id}`"
                  >
                    <div class="songlist-img">
                      <img :src="banner.cover" />
                    </div>
                    <p>{{banner.title}}</p>
                    <p>播放量：{{banner.listen_num.toString().slice(0, 4)}}万</p>
                  </div>
                </div>
              </div>
              <div class="swiper-slide">
                <div class="songlist">
                  <div
                    class="songlist-box"
                    v-for="banner in list"
                    :key="`banner-${banner.content_id}`"
                  >
                    <div class="songlist-img">
                      <img :src="banner.cover" />
                    </div>
                    <p>{{banner.title}}</p>
                    <p>播放量：{{banner.listen_num.toString().slice(0, 4)}}万</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-prev swiper-button-black" slot="button-prev"></div>
            <div class="swiper-button-next swiper-button-black" slot="button-next"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/css/swiper.css'
export default {
  name: 'Hm-songlist',
  data () {
    return {
      banners: [],
      list: []
    }
  },
  created () {
    this.$http.getSongList()
      .then(resp => {
        this.banners = resp.list.slice(0, 5)
        this.list = resp.list.slice(6, 11)
        this.$nextTick().then(() => {
          this.getSongListBanner()
        })
      })
  },
  methods: {
    getSongListBanner () {
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
.songlist-swiper {
  height: 300px;
}
.songlist {
  position: relative;
  display: flex;
  justify-content: space-between;
  margin: auto;
  width: 1200px;
  height: 350px;
}
.swiper-pagination {
  position: absolute;
  top: 280px;
}
.songlist .songlist-box {
  float: left;
  width: 220px;
  height: 300px;
}
.songlist-box img {
  transition: all 0.4s;
}
.songlist .songlist-img {
  width: 220px;
  height: 220px;
  border-radius: 10px;
  overflow: hidden;
}
.songlist-box img:hover {
  transform: scale(1.1);
}
.songlist-box p {
  margin-top: 15px;
}
.swiper-button-prev:after,
.swiper-button-next:after {
  margin-top: -120px;
}
</style>
