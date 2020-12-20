<template>
    <!-- MV -->
    <div class="hm-box hm-mv">
      <div class="hm-container">
        <div class="hm-common hm-mv">
          <h2>M&nbsp;V</h2>
          <div class="mv-box">
            <div
              class="mv-info"
              v-for="banner in mvBanners"
              :key="`banner-${banner.singerid}`"
            >
              <div class="mv-pic">
                <img :src="banner.picurl" alt="">
              </div>
              <div class="mv-text">
                <p>{{banner.mvtitle}}</p>
                <p>{{banner.singername}}</p>
                <a-icon type="video-camera" />&nbsp;
                <span>{{banner.listennum}}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'Hm-mv',
  data () {
    return {
      mvBanners: [],
      mvLists: []
    }
  },
  created () {
    this.$http.getNewMv()
      .then(resp => {
        this.mvBanners = resp.list.slice(0, 10)
      })
  }
}
</script>

<style lang="less" scoped>
  .mv-box {
    width: 1350px;
    height: 450px;
    margin:auto;
    .mv-info{
      float: left;
      width: 230px;
      height: 200px;
      margin: 15px 0 0 33px;
      .mv-pic {
        width: 230px;
        height: 125px;
        overflow: hidden;
        img {
          width: 230px;
          height: 125px;
          transition: all 0.4s;
        }
        img:hover {
          transform: scale(1.1);
        }
      }
      .mv-text {
        p {
          overflow:hidden; //超出的文本隐藏
          text-overflow:ellipsis; //溢出用省略号显示
          white-space:nowrap; //溢出不换行
        }
      }
    }
  }
</style>
