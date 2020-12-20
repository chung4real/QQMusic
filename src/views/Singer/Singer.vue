<template>
  <div class="singer">
    <div class="singer-img">
      <img src="../../assets/bg_singer.jpg" alt="">
    </div>
    <!-- 歌手类别 -->
    <div class="singer-info">
      <div class="singer-box">
        <div class="singer-hot singer-common" style="margin-top: 10px;">
          <a-button type="primary" class="singer-color">热门</a-button>
          <ul>
            <li
              v-for="hot in singerHot"
              :key="`hot-${hot.id}`"
            >
            <a href="#">{{hot.name}}</a>
            </li>
          </ul>
        </div>
        <div class="singer-area singer-common">
          <a-button type="primary" class="singer-color">全部</a-button>
          <ul>
            <li
              v-for="area in singerArea"
              :key="`area-${area.id}`"
            >
              <a href="#">{{area.name}}</a>
            </li>
          </ul>
        </div>
        <div class="singer-sex singer-common">
          <a-button type="primary" class="singer-color">全部</a-button>
          <ul>
            <li
              v-for="sex in singerSex"
              :key="`sex-${sex.id}`"
            >
              <a href="#">{{sex.name}}</a>
            </li>
          </ul>
        </div>
        <div class="singer-genre singer-common">
          <a-button type="primary" class="singer-color">全部</a-button>
          <ul>
            <li
              v-for="genre in singerGenre"
              :key="`genre-${genre.id}`"
            >
            <a href="#">{{genre.name}}</a>
            </li>
          </ul>
        </div>
      </div>
      <!-- 歌手图片 -->
      <div class="singer-picbox">
        <div
          class="singer-intro"
          v-for="singer in singerList"
          :key="`singer-${singer.singer_id}`"
        >
          <img :src="singer.singer_pic" alt="">
          <p>{{singer.singer_name}}</p>
        </div>
      </div>
      <!-- 歌手名字 -->
      <div class="singer-name">
        <div class="singer-namebox">
          <p
            v-for="name in nameList"
            :key="`name-${name.singer_id}`"
          >
            <a href="#">{{name.singer_name}}</a>
          </p>
        </div>
      </div>
      <a-pagination
        show-size-changer
        :default-current="3"
        :total="500"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Singer',
  data () {
    return {
      singerHot: [],
      singerArea: [],
      singerSex: [],
      singerGenre: [],
      singerList: [],
      nameList: []
    }
  },
  created () {
    this.$http.getSingerCategory()
      .then(resp => {
        const { index, area, sex, genre } = resp
        this.singerHot = index.slice(1)
        this.singerArea = area.slice(1)
        this.singerSex = sex.slice(1)
        this.singerGenre = genre.slice(1)
      })
    this.getNewSongData()
  },
  methods: {
    getNewSongData () {
      this.$http.getNewSong()
        .then(resp => {
          this.singerList = resp.list.slice(0, 10)
          this.nameList = resp.list.slice(10)
        })
    }
  }
}
</script>

<style lang="less" scoped>
.singer-img {
  height: 376px;
  img {
    width: 100%;
    height: 376px;
  }
}
.singer-info {
  position: relative;
  width: 1200px;
  height: 1800px;
  margin: auto;
  border: 1px solid transparent;
  .singer-box {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 170px;
    .singer-common {
      display: flex;
      ul {
        display: flex;
        width: 1000px;
        height: 30px;
        li {
          line-height: 30px;
          margin: 0 15px;
          font-size: 15px;
          a {
            color: #000;
          }
          a:hover{
          color: #4cad6c;
          }
        }
      }
    }
  }
  .singer-color {
    background-color: #56b677;
    border: 1px solid #56b677;
  }
  .singer-picbox {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 540px;
    .singer-intro {
      width: 200px;
      height: 250px;
      img {
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
      p {
        color: #000;
        margin-top: 10px;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
      }
    }
  }
  .singer-namebox {
    margin: 0 auto;
  }
  .singer-name {
    width: 100%;
    height: 800px;
    margin: auto;
    p {
      margin: 17px;
      width: 200px;
      height: 35px;
      color: #000;
      font-weight: bold;
      line-height: 35px;
      text-align: center;
      display: inline-block;
      a {
        color: #000;
      }
      a:hover {
        color: #4cad6c;;
      }
    }
  }
  .ant-pagination {
    position: absolute;
    top: 1700px;
    left: 350px;
  }
}
</style>
