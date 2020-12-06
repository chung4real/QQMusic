<template>
  <div class="footer">
    <div class="footer-top">
      <ul class="client">
        <p style="margin-left: 15px">下载QQ音乐客户端</p>
        <li>
          <a-icon type="windows" style="font-size:50px" />
          <p>PC版</p>
        </li>
        <li>
          <a-icon type="weibo" style="font-size:50px" />
          <p>weibo版</p>
        </li>
        <li>
          <a-icon type="android" style="font-size:50px" />
          <p>Android版</p>
        </li>
        <li>
          <a-icon type="apple" style="font-size:50px" />
          <p>iPhone版</p>
        </li>
      </ul>
      <ul class="client">
        <p style="margin-left: 15px">特色产品</p>
        <li>
          <a-icon type="qq" style="font-size:50px" />
          <p>QQ</p>
        </li>
        <li>
          <a-icon type="wechat" style="font-size:50px" />
          <p>Wechat</p>
        </li>
        <li>
          <a-icon type="github" style="font-size:50px" />
          <p>Github</p>
        </li>
        <li>
          <a-icon type="youtube" style="font-size:50px" />
          <p>Youtube</p>
        </li>
      </ul>
      <div class="cooperation">
        <p class="title">合作链接</p>
        <div>
          <p>CJ ENM</p>
          <p>腾讯视频</p>
          <p>手机QQ空间</p>
          <p>最新版QQ</p>
        </div>
        <div>
          <p>腾讯社交广告</p>
          <p>电脑管家</p>
          <p>QQ浏览器</p>
          <p>腾讯微云</p>
        </div>
        <div>
          <p>腾讯云</p>
          <p>企鹅FM</p>
          <p>智能电视网</p>
          <p>当贝市场</p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        <a href="#">关于腾讯</a> ｜ <a href="#">About Tencent</a> ｜
        <a href="#">服务条款</a> ｜ <a href="#">用户服务协议</a> ｜
        <a href="#">隐私政策</a> ｜ <a href="#">权利声明</a> ｜
        <a href="#">广告服务</a> ｜ <a href="#">腾讯招聘</a> ｜
        <a href="#">客服中心</a> ｜ <a href="#">网站导航</a> ｜
      </p>
      <p>Copyright © 1998 - 2020 Tencent. All Rights Reserved.</p>
      <p>腾讯公司 版权所有 腾讯网络文化经营许可证</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
.footer {
  width: 100%;
  height: 400px;
  background-color: rgb(51, 51, 51);
  &-top {
    color: rgb(127, 127, 127);
    margin: 0 auto;
    padding: 20px;
    width: 1350px;
    display: flex;
    justify-content: space-between;
    img {
      width: 50px;
      height: 50px;
    }
    .client {
      width: 500px;
      height: 150px;
      li {
        width: 80px;
        height: 80px;
        text-align: center;
        float: left;
        display: flex;
        flex-direction: column;
        margin: 30px 40px 0 0;
        img {
          margin-left: 15px;
        }
        p {
          font-size: 14px;
          margin: 20px 0 0 5px;
        }
      }
      li:hover {
        color: rgb(97, 191, 130);
      }
    }
    .cooperation {
      float: left;
      div {
        float: left;
        margin: 20px 20px 0 0;
        p {
          margin-top: 5px;
          font-size: 14px;
        }
        p:hover {
          color: rgb(97, 191, 130);
        }
      }
    }
  }
  &-bottom {
    width: 1300px;
    height: 120px;
    font-size: 14px;
    margin: 30px auto;
    color: rgb(127, 127, 127);
    p {
      margin-top: 20px;
      text-align: center;
      a {
        color: rgb(127, 127, 127);
      }
      a:hover {
        color: rgb(97, 191, 130);
      }
    }
  }
}
</style>
