<template>
  <a-locale-provider :locale="zhCN">
    <div class="QQMusic">
      <router-view name="xm-header"></router-view>
      <router-view to="/home" class="main"></router-view>
      <router-view name="xm-footer"></router-view>
    </div>
  </a-locale-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import 'moment/locale/zh-cn'
export default {
  data () {
    return {
      zhCN
    }
  }
}
</script>

<style lang="less">
html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
figure,
fieldset,
legend,
textarea,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}

ul,
ol {
  list-style: none;
}

button,
input,
select,
textarea {
  margin: 0;
}

*, *::before, *::after {
  box-sizing: inherit;
}

img,
video {
  height: auto;
  max-width: 100%;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}

td,
th {
  padding: 0;
}

td:not([align]),
th:not([align]) {
  text-align: left;
}

a {
  text-decoration: none;
  outline: none;
  color: #000;
}

html,
body,
.QQMusic {
  height: 100%;
  overflow-x: hidden;
}
.QQMusic {
  display: flex;
  flex-direction: column;
}
.main {
  flex: 1;
}
</style>
