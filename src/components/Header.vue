<template>
  <div class="header">
    <div class="hd-top">
      <a-row type="flex">
        <a-col :span="6" :order="4">
          1 col-order-4
        </a-col>
        <a-col :span="6" :order="3">
          2 col-order-3
        </a-col>
        <a-col :span="6" :order="2">
          3 col-order-2
        </a-col>
        <a-col :span="6" :order="1">
          <img src="../assets/logo.png" alt="QQMusicLogo">
        </a-col>
      </a-row>
    </div>
    <div class="hd-bottom">
      <ul class="list">
        <router-link to="/home" tag="a">首页</router-link>
        <router-link to="/singer" tag="a">歌手</router-link>
        <router-link to="/NewDisc" tag="a">新碟</router-link>
        <router-link to="/rankinglist" tag="a">排行榜</router-link>
        <router-link to="/songlist" tag="a">分类歌单</router-link>
        <router-link to="/fm" tag="a">电台</router-link>
        <router-link to="/mv" tag="a">MV</router-link>
        <router-link to="/album" tag="a">数字专辑</router-link>
        <router-link to="/tickets" tag="a">票务</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.header {
  height: 110px;
}
.ant-row-flex {
  text-align: center;
}
</style>
