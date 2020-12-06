<template>
  <div class="header">
    <div class="header-top">
      <img src="../assets/logo.png" alt="QQMusciLogo">
      <span><a href="#">音乐馆</a></span>
      <span><a href="#">我的音乐</a></span>
      <span><a href="#">客户端</a></span>
      <span><a href="#">开放平台</a></span>
      <span><a href="#">VIP</a></span>
      <a-select
        show-search
        placeholder="搜索音乐、MV、歌单、用户"
        option-filter-prop="children"
        style="width: 230px;margin-left:20px;"
        :filter-option="filterOption"
        @focus="handleFocus"
        @blur="handleBlur"
        @change="handleChange"
      >
        <a-select-option value="jack">
          Jack
        </a-select-option>
        <a-select-option value="lucy">
          Lucy
        </a-select-option>
        <a-select-option value="tom">
          Tom
        </a-select-option>
      </a-select>
      <a-avatar size="large" icon="user" />
      <a-dropdown style="margin-left: 20px;">
      <a-menu slot="overlay" @click="handleMenuClick">
        <a-menu-item key="1">
          续费绿钻豪华版
        </a-menu-item>
        <a-menu-item key="2">
          续费付费包
        </a-menu-item>
      </a-menu>
      <a-button type="primary"> 开通VIP <a-icon type="down" /> </a-button>
    </a-dropdown>
    </div>
    <div class="header-bottom">
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
  name: 'Header',
  created () {
    this.$http.getHotSearch()
      .then(resp => {
        console.log(resp)
      })
  },
  methods: {
    handleChange (value) {
      console.log(`selected ${value}`)
    },
    handleBlur () {
      console.log('blur')
    },
    handleFocus () {
      console.log('focus')
    },
    filterOption (input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      )
    },
    handleMenuClick (e) {
      console.log('click', e)
    }
  }
}
</script>

<style lang="less" scoped>
.list {
  width: 800px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;
  color: #000;
  li:hover {
    color: rgb(97, 191, 130);
  }
}
.header {
  height: 140px;
  width: 1200px;
  margin: 0 auto;
  &-top {
    height: 90px;
    line-height: 90px;
    border-bottom: 1px solid rgb(242, 242, 242);
    img {
      width: 170px;
      height: 46px;
      vertical-align: middle;
    }
    span {
      font-size: 18px;
      margin-left: 30px;
      a{
        color: #000;
        padding: 34px 15px;
      }
    }
    span a:hover {
      color: #fff;
      background-color: rgb(97, 190, 130);
    }
    .ant-btn-primary {
      background-color: rgb(97, 190, 130);
      border-color:rgb(97, 190, 130);
    }
  }
  &-bottom {
    height: 50px;
    line-height: 50px;
    .list {
      a {
        font-size: 16px;
        color: #000;
      }
      a:hover {
        color: rgb(97, 190, 130);
      }
    }
  }
}
</style>
