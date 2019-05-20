<template>
  <div id="app">
    <div class="img">
      <img class="headImg" src="./assets/head.png" alt>
    </div>
    <div class="data">
      <p>{{date.loc}}</p>
      <img :src="nameSuffix">
      <p>{{weather.cond_txt}}</p>
      <p>{{weather.tmp}}℃</p>
    </div>
    <div class="content">
      <echartsL/>
      <!-- <echartsR/> -->
    </div>
    <div class="copy">
      <p>Designed By DELL Inc Powered By 贵阳中通华软件技术有限公司</p>
    </div>
  </div>
</template>

<script>
import echartsL from "./components/echartsL";
import echartsR from "./components/echartsR";
import $ from "jquery";
export default {
  name: "App",
  components: {
    echartsL,
    echartsR
  },
  data() {
    return {
      date: "",
      weather: "",
      nameSuffix: "",
    };
  },
  created() {
     this.$axios
      .get("https://free-api.heweather.net/s6/weather/now?location=chengdu&key=b17f9b7ff3a0415bac3c171a2a2943ba", {
        params: {}
      })
      .then(res => {
        this.weather = res.data.HeWeather6[0].now;
        this.date = res.data.HeWeather6[0].update;
        let name = this.weather.cond_code;
        let suffix = ".png";
        this.nameSuffix = require("./assets/" + name + suffix);
      })
      .catch(error => {
        console.log(error);
      }); 
  }
};
</script>

<style>
* {
  padding: 0px;
  margin: 0px;
}
p {
  padding: 0px;
}
#app {
  width: 1920px;
  height: 810px;
  /* min-width: 7680px;
  min-height: 3240px; */
  font-family: "Microsoft YaHei";
  background: url("./assets/background3.jpg");
  position: relative;
  background-size: 1920px 810px;
}
/* 版权样式 */
.copy {
  position: absolute;
  color: #fff;
  right: 5px;
  bottom: 8px;
  opacity: 0.8;
}
/* 时间天气样式 */
.data {
  display: flex;
  color: #ffffff;
  position: absolute;
  top: 10px;
  right: 0px;
  opacity: 0.8;
}
.data p {
  margin-right: 5px;
}
.data img{
  vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 5px;
}
.content {
  margin: 13px 20px 0 0;
  display: flex;
  justify-content: space-around;
}
/* 头部图片样式 */
.img {
  width: 100%;
  text-align: center;
}
.headImg {
  height: 47px;
  margin-right: 850px;
}
</style>
