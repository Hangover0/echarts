<template>
  <div id="app">
    <div class="img">
      <img class="headImg" src="./assets/head.png" alt>
    </div>
    <div class="data">
      <p>{{data.toLocaleDateString()}}</p>
      <p>{{data.toLocaleTimeString()}}</p>
      <p>{{weather.weather}}</p>
      <p>{{weather.temperature}}℃</p>
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
      data: new Date(),
      weather: "",
    };
  },
  created() {
    this.$axios
      .get("https://restapi.amap.com/v3/weather/weatherInfo?parameters", {
        params: {
          city: "510100",
          key: "977140f03634a89cee0099bb9681cf8c"
        }
      })
      .then(res => {
        this.weather = res.data.lives[0];
      })
      .catch(error => {
        console.log(error);
      });
    //  this.$axios
    //   .get("https://free-api.heweather.net/s6/weather/now?", {
    //     params: {
    //       location: "chengdu",
    //       key: "HE1905131121461811"
    //     }
    //   })
    //   .then(res => {
    //     console.log(res);
    //     // this.weather = res.data.lives[0];
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   }); 
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
.data {
  display: flex;
  color: #ffffff;
  position: absolute;
  top: 79px;
  right: 201px;
}
.data p {
  margin-right: 30px;
}
.content {
  margin: 38px 20px 0 1920px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
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
