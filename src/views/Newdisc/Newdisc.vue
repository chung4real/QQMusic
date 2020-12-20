<template>
  <div class="newdisc">
    <div class="newdisc-box">
      <ul>
        <li><a href="#">内地</a></li>
        <li><a href="#">港台</a></li>
        <li><a href="#">欧美</a></li>
        <li><a href="#">韩国</a></li>
        <li><a href="#">日本</a></li>
        <li><a href="#">其他</a></li>
      </ul>
      <div class="newdisc-picbox">
        <div class="newdisc-pic">
          <img src="../../assets/logo.png" alt="">
          <p>123</p>
          <p>123123</p>
        </div>
        <div class="newdisc-pic">
          <img src="../../assets/logo.png" alt="">
          <p>123</p>
          <p>123123</p>
        </div>
        <div class="newdisc-pic">
          <img src="../../assets/logo.png" alt="">
          <p>123</p>
          <p>123123</p>
        </div>
        <div class="newdisc-pic">
          <img src="../../assets/logo.png" alt="">
          <p>123</p>
          <p>123123</p>
        </div>
        <div class="newdisc-pic">
          <img src="../../assets/logo.png" alt="">
          <p>123</p>
          <p>123123</p>
        </div>
        <div class="newdisc-pic">
          <img src="../../assets/logo.png" alt="">
          <p>123</p>
          <p>123123</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Newdisc',
  created () {
    this.$http.getSongList()
      .then(resp => {
        console.log(resp)
      })
  }
}
</script>

<style lang="less" scoped>
.newdisc-box {
  width: 1200px;
  height: 1200px;
  margin: auto;
  border: 1px solid #000;
  a {
    color: #000;
    margin-top: 50px;
    width: 70px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    float: left;
  }
  a:hover {
    background-color: #2bba71;
    color: #fff;
  }
  .newdisc-picbox {
    width: 1200px;
    height: 1000px;
    margin-top: 100px;
    background-color: lightblue;
    .newdisc-pic {
      margin: 10px 0 0 15px;
      float: left;
      width: 220px;
      height: 300px;
      border: 1px solid #000;
      img {
        width: 220px;
        height: 220px;
        border: 1px solid #000;
      }
      p {
        margin-top: 10px;
      }
    }
  }
}
</style>
