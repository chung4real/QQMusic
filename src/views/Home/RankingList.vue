<template>
    <!-- 排行榜 -->
    <div class="hm-box hm-rankinglist">
      <div class="hm-container">
        <div class="hm-common hm-rankinglist">
          <h2>排&nbsp;行&nbsp;榜</h2>
          <div class="rankinglist-box">
            <div class="rankinglist-info rank-color1"></div>
            <div class="rankinglist-info rank-color2"></div>
            <div class="rankinglist-info rank-color3"></div>
            <div class="rankinglist-info rank-color4"></div>
            <div class="rankinglist-info rank-color5"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.rankinglist-box {
  .rankinglist-info {
    float: left;
    width: 220px;
    height: 550px;
    margin-left: 42px;
  }
  .rank-color1 {
    background-color: #cc7f95;
  }
  .rank-color2 {
    background-color: #ffc7c7;
  }
  .rank-color3 {
    background-color: #ffe2e2;
  }
  .rank-color4 {
    background-color: #ffe0d8;
  }
  .rank-color5 {
    background-color: #8785a2;
  }
}
</style>
