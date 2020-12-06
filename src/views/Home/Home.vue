<template>
  <div class="home">
    <!-- 歌单推荐 -->
    <SongList></SongList>
    <!-- 新歌首发 -->
    <NewSong></NewSong>
    <!-- 精彩推荐 -->
    <Recommand></Recommand>
    <!-- 新碟首发 -->
    <NewDisc></NewDisc>
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
import NewDisc from './NewDisc'
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
    NewDisc,
    RankingList,
    Mv
  }
}
</script>

<style lang="less">
.home {
  // background-color: rgb(245, 245, 245);
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
        height: 530px;
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
      .hm-songlist {
        border: 1px solid #000;
      }
      .hm-newsong {
        border: 1px solid #000;
      }
      .hm-recommand {
        height: 410px;
        border: 1px solid #000;
      }
      .hm-rankinglist {
        height: 670px;
        border: 1px solid #000;
      }
    }
  }
}
</style>
