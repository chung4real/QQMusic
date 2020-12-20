<template>
  <div class="home">
    <!-- 歌单推荐 -->
    <SongList></SongList>
    <!-- 新歌首发 -->
    <NewSong></NewSong>
    <!-- 精彩推荐 -->
    <Recommand></Recommand>
    <!-- 排行榜 -->
    <RankingList></RankingList>
    <!-- MV -->
    <Mv></Mv>
  </div>
</template>

<script>
import SongList from './Songlist'
import NewSong from './NewSong'
import Recommand from './Recommand'
import RankingList from './RankingList'
import Mv from './Mv'

export default {
  name: 'Home',
  created () {
    // this.$http.getSongList()
    //   .then(resp => {
    //     console.log(resp)
    //   })
  },
  components: {
    SongList,
    NewSong,
    Recommand,
    RankingList,
    Mv
  }
}
</script>

<style lang="less">
.home {
  h2 {
    text-align: center;
    font-size: 30px;
    padding-top: 30px;
  }
  .hm-box {
    background-color: #999;
    background-image: linear-gradient(#f5f5f5, #fff);
    .hm-container {
      width: 1350px;
      margin: auto;
      .hm-common {
        height: 550px;
        ul {
          width: 500px;
          height: 50px;
          margin: auto;
          li {
            width: 80px;
            line-height: 30px;
            float: left;
            text-align: center;
            a {
              color: #000;
              font-size: 16px;
            }
            a:hover {
              color: rgb(97, 190, 130);
            }
          }
        }
      }
      .hm-recommand {
        height: 410px;
      }
      .hm-rankinglist {
        height: 670px;
      }
    }
  }
}
</style>
