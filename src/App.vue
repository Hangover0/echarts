<template>
  <div id="app">
    <div class="img">
      <img class="headImg" src="./assets/head.png" alt="">
    </div>  
    <div class="data">
      <p>{{data}}</p>
      <!-- <iframe class="weather" name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=52&icon=1&num=3" width="280" height="50" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" color="#fff"></iframe> -->
    </div>
    <div class="content">
      <echartsL/>
      <echartsR/>
    </div>
    <div class="copy">
      <p>Designed By DELL Inc Powered By 贵阳中通华软件技术有限公司</p>
    </div>
  </div>
</template>

<script>
import echartsL from './components/echartsL'
import echartsR from './components/echartsR'
export default {
  name: 'App',
  components: {
    echartsL,
    echartsR
  },
  data(){
    return {
      data: new Date(),
    }
  },
}
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
p {
  padding: 0px;
}
/* html {
  width: 9600px;
  height: 3240px;
} */
#app {
  width: 9600px;
  height: 3240px;
  min-width: 9600px;
  min-height: 3240px;
  font-family: "Microsoft YaHei";
  background: url("./assets/背景.jpg");
  position: relative;
}
/* 版权样式 */
.copy {
  position: absolute;
  color: #fff;
  right: 55px;
  bottom: 47px;
  opacity: 0.8;
}
/* 时间样式 */
.data{
  color: #ffffff;
  position: absolute;
  top: 79px;
  right: 201px;
}
.content {
  margin: 38px 0 0 1920px;
  box-sizing: border-box;
}
/* 头部图片样式 */
.img {
  width: 100%;
  text-align: center;
}
.headImg {
  width: 4582px;
  height: 247px;
}
</style>
