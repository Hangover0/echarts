<template>
  <div class="box">
    <!-- 左边echarts -->
    <div class="boxL">
      <div class="title title1">设备情况看板</div>
      <div>
        <div class="subtitle subtitle1">
          <img class="arrows" src="../assets/标题样式.png" alt>设备故障统计
        </div>
        <div id="echart1"></div>
      </div>
      <div class="transverseLine">
        <img src="../assets/横线.svg" alt>
      </div>
      <div class="boxL-center">
        <div>
          <div class="subtitle">
            <img class="arrows" src="../assets/标题样式.png" alt>每月故障时间分布
          </div>
          <div>
            <div id="echart2"></div>
          </div>
        </div>
        <div>
          <div class="subtitle">
            <img class="arrows" src="../assets/标题样式.png" alt>每月故障时间分布
          </div>
          <div>
            <div id="echart3"></div>
          </div>
        </div>
      </div>
      <div class="transverseLine">
        <img src="../assets/横线.svg" alt>
      </div>
      <div>
        <div class="subtitle">
          <img class="arrows" src="../assets/标题样式.png" alt>故障分布车间
        </div>
        <div id="echart4"></div>
      </div>
    </div>
    <!-- 竖线 -->
    <div class="longLine">
      <img src="../assets/竖线.svg" alt>
    </div>
    <!-- 右边echarts -->
    <div class="boxR">
      <div class="title">生产KPI</div>
      <div>
        <div class="subtitle subtitle1">
          <img class="arrows" src="../assets/标题样式.png" alt>完成工时统计
        </div>
        <div id="echart5"></div>
      </div>
      <div class="transverseLine">
        <img src="../assets/横线.svg" alt>
      </div>
      <div>
        <div class="subtitle">
          <img class="arrows" src="../assets/标题样式.png" alt>完成率统计
        </div>
        <div id="echart6"></div>
        <p class="p p1">金一分厂</p>
        <p class="p p2">金二分厂</p>
        <p class="p p3">总装分厂</p>
        <p class="p p4">锻热铆分厂</p>
        <p class="p p5">铸造分厂</p>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  data() {
    return {
      echart1: "",
      echart2: "",
      echart3: "",
      echart4: "",
      echart5: "",
      echart6: ""
    };
  },
  methods: {
    drawChart1() {
      this.echart1 = echarts.init(
        document.getElementById("echart1"),
        "mythemes"
      );
      this.echart1.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          x: "right",
          data: [
            "设备故障次数",
            "设备维护保养问题数",
            "平均响应时长",
            "故障设备台数"
          ]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "数量（次/台）",
            min: 0,
            max: 50,
            interval: 10,
            axisLabel: {
              formatter: "{value} "
            },
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                width: 3
              }
            }
          },
          {
            type: "value",
            name: "时长",
            min: 0,
            max: 100,
            interval: 20,
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],
        series: [
          {
            name: "设备故障次数",
            type: "bar",
            yAxisIndex: 0,
            data: [10, 13, 15, 16, 12, 20, 9, 12, 7, 15, 12, 13]
          },
          {
            name: "设备维护保养问题数",
            yAxisIndex: 0,
            type: "bar",
            data: [12, 16, 13, 15, 10, 17, 25, 30, 10, 15, 25, 35]
          },
          {
            name: "平均响应时长",
            type: "line",
            yAxisIndex: 1,
            data: [48, 51, 35, 32, 36, 34, 35, 30, 20, 27, 28, 16]
          },
          {
            name: "故障设备台数",
            type: "line",
            yAxisIndex: 0,
            data: [4, 5, 7, 2, 3, 3, 5, 6, 3, 3, 5, 1]
          }
        ]
      });
    },
    drawChart2() {
      this.echart2 = echarts.init(
        document.getElementById("echart2"),
        "mythemes"
      );
      this.echart2.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
          show: "false",
          x: "center",
          y: "bottom",
          data: ["完成率", "未完成率", "外部影响"]
        },
        series: [
          {
            name: "每月故障次数",
            type: "pie",
            radius: ["35%", "65%"],
            center: ["50%", "60%"],
            data: [
              { value: 263, name: "CAK50143DJ" },
              { value: 263, name: "CAK50142DJ" },
              { value: 263, name: "CAK50141DJ" },
              { value: 526, name: "CAK50140DJ" },
              { value: 790, name: "CAK50139DJ" },
              { value: 1053, name: "CAK50138DJ" },
              { value: 1316, name: "CAK50137DJ" },
              { value: 1579, name: "CAK50136DJ" },
              { value: 1842, name: "CAK50135DJ" },
              { value: 2105, name: "CAK50134DJ" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    drawChart3() {
      this.echart3 = echarts.init(
        document.getElementById("echart3"),
        "mythemes"
      );
      this.echart3.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
          show: "false",
          x: "center",
          y: "bottom",
          data: ["完成率", "未完成率", "外部影响"]
        },
        series: [
          {
            name: "每月故障次数",
            type: "pie",
            radius: ["35%", "65%"],
            center: ["50%", "60%"],
            data: [
              { value: 263, name: "CAK50143DJ" },
              { value: 263, name: "CAK50142DJ" },
              { value: 263, name: "CAK50141DJ" },
              { value: 526, name: "CAK50140DJ" },
              { value: 790, name: "CAK50139DJ" },
              { value: 1053, name: "CAK50138DJ" },
              { value: 1316, name: "CAK50137DJ" },
              { value: 1579, name: "CAK50136DJ" },
              { value: 1842, name: "CAK50135DJ" },
              { value: 2105, name: "CAK50134DJ" }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    },
    drawChart4() {
      var geoCoordMap = {
        国航大厦: [117.184715, 36.668172],
        国客: [117.193715, 36.668972],
        城投大厦: [117.190277, 36.668031],
        中信广场: [117.192713, 36.669238],
        建邦大厦: [117.194242, 36.668522],
        家化大厦: [117.196486, 36.66891],
        家化金融: [117.185486, 36.66891],
        嘉杰广场: [117.183963, 36.673647],
        高宝新时代: [117.183762, 36.673762],
        龙之梦: [117.188373, 36.6794603],
        香杉商务: [117.189073, 36.6794603],
        商务中心: [117.186573, 36.6798603],
        广益大厦: [117.193452, 36.673225],
        物华大厦: [117.190162, 36.673162],
        凉城中心商办楼: [117.187573, 36.6798603],
        中兴理想: [117.186573, 36.6799603]
      };
      var BJData = [];
      for (var x in geoCoordMap) {
        BJData.push([
          {
            name: x,
            value: 250 //Math.random()*1000
          },
          {
            name: "虹口区"
          }
        ]);
      }
      var color = ["#56e88c", "#ffa022", "#46bee9"];
      var series = [];
      [["山东建筑大学", BJData]].forEach(function(item, i) {
        series.push({
          type: "effectScatter",
          coordinateSystem: "geo",
          zlevel: 2,
          rippleEffect: {
            brushType: "stroke"
          },
          label: {
            normal: {
              show: false,
              position: "right",
              formatter: "{b}"
            }
          },
          tooltip: {
            formatter: function(params) {
              var strT = String(params.value);
              var num = strT.lastIndexOf(",");
              return params.name + ":" + strT.substr(num + 1);
            }
          },
          symbolSize: function(val) {
            return 10; //3 + val[2] / 10
          },
          itemStyle: {
            normal: {
              color: "#60ff44"
            }
          },
          data: item[1].map(function(dataItem) {
            return {
              name: dataItem[0].name,
              value: geoCoordMap[dataItem[0].name].concat([dataItem[0].value])
            };
          })
        });
      });
      this.echart4 = echarts.init(
        document.getElementById("echart4"),
        "mythemes"
      );
      this.echart4.setOption({
        tooltip: {
          trigger: "item"
        },
        visualMap: [
          {
            show: false,
            pieces: [
              { min: 300 }, // 不指定 max，表示 max 为无限大（Infinity）。
              { min: 200, max: 300 },
              { max: 200 } // 不指定 min，表示 min 为无限大（-Infinity）。
            ],
            color: ["#00D359", "aqua", "yellow"],
            textStyle: {
              color: "#fff"
            }
          }
        ],
        geo: {
          show: true,
          roam: true, //缩放拖拽
          center: [117.186, 36.679],
          zoom: 2750,
          map: "china",
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: "#808080"
              //borderColor: '#111'
            },
            emphasis: {
              areaColor: "#808080"
            }
          }
        },
        series: series
      });
    },
    drawChart5() {
      this.echart5 = echarts.init(
        document.getElementById("echart5"),
        "mythemes"
      );
      this.echart5.setOption({
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            crossStyle: {
              color: "#999"
            }
          }
        },
        toolbox: {
          feature: {
            dataView: { show: true, readOnly: false },
            magicType: { show: true, type: ["line", "bar"] },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        legend: {
          x: "right",
          data: [
            "月份完成工时",
            "同期完成工时",
            "本年完成工时",
            "同比工时完成率"
          ]
        },
        xAxis: [
          {
            type: "category",
            data: [
              "1月",
              "2月",
              "3月",
              "4月",
              "5月",
              "6月",
              "7月",
              "8月",
              "9月",
              "10月",
              "11月",
              "12月"
            ],
            axisPointer: {
              type: "shadow"
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "工时",
            min: 0,
            max: 180,
            interval: 30,
            axisLabel: {
              formatter: "{value} "
            }
          },
          {
            type: "value",
            name: "工时",
            min: 0,
            max: 1500,
            interval: 300,
            axisLabel: {
              formatter: "{value} "
            }
          }
        ],
        series: [
          {
            name: "月份完成工时",
            type: "bar",
            data: [100, 120, 120, 140, 160, 100, 70, 75, 120, 140, 160, 160]
          },
          {
            name: "同期完成工时",
            type: "bar",
            data: [80, 120, 120, 130, 165, 110, 85, 90, 135, 120, 140, 150]
          },
          {
            name: "本年完成工时",
            type: "line",
            yAxisIndex: 1,
            data: [
              150,
              280,
              400,
              500,
              650,
              700,
              780,
              885,
              1000,
              1150,
              1280,
              1480
            ]
          },
          {
            name: "同比工时完成率",
            type: "line",
            yAxisIndex: 0,
            data: [
              1.875,
              2.33,
              3.3,
              3.8,
              3.9,
              6.3,
              9.17,
              9.8,
              7.4,
              9.58,
              9.14,
              9.8
            ]
          }
        ]
      });
    },
    drawChart6() {
      this.echart6 = echarts.init(
        document.getElementById("echart6"),
        "mythemes"
      );
      this.echart6.setOption({
        legend: {
          y: "bottom",
          x: "left",
          orient: "vertical"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%"
        },
        dataset: {
          source: [
            [
              "完成情况",
              "生产供应处",
              "金一分厂",
              "金二分厂",
              "总装分厂",
              "锻热铆分厂",
              "铸造分厂"
            ],
            ["完成率", 8326, 8671, 8671, 9091, 8324, 8324],
            ["未完成率", 717, 166, 498, 606, 559, 559],
            ["外部影响", 957, 1163, 831, 303, 1117, 1117]
          ]
        },
        series: [
          {
            type: "pie",
            radius: 190,
            center: ["30%", "18%"],
            // No encode specified, by default, it is '生产供应处'.
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          },
          {
            name: "金一分厂",
            type: "pie",
            radius: ["20%", "30%"],
            center: ["70%", "18%"],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            },
            encode: {
              itemName: "完成情况",
              value: "金一分厂"
            }
          },
          {
            type: "pie",
            name: "金二分厂",
            radius: ["20%", "30%"],
            center: ["30%", "52%"],
            encode: {
              itemName: "完成情况",
              value: "金二分厂"
            }
          },
          {
            name: "总装分厂",
            type: "pie",
            radius: ["20%", "30%"],
            center: ["70%", "52%"],
            encode: {
              itemName: "完成情况",
              value: "总装分厂"
            }
          },
          {
            name: "段热铆分厂",
            type: "pie",
            radius: ["20%", "30%"],
            center: ["30%", "85%"],
            encode: {
              itemName: "完成情况",
              value: "锻热铆分厂"
            }
          },
          {
            name: "铸造分厂",
            type: "pie",
            radius: ["20%", "30%"],
            center: ["70%", "85%"],
            encode: {
              itemName: "完成情况",
              value: "铸造分厂"
            }
          }
        ]
      });
    },
    drawCharts() {
      this.drawChart1();
      this.drawChart2();
      this.drawChart3();
      this.drawChart4();
      this.drawChart5();
      this.drawChart6();
    }
  },
  mounted: function() {
    this.drawCharts();
  },
  updated: function() {
    this.drawCharts();
  }
};
</script>

<style scoped>
.box {
  width: 3852px;
  height: 2839px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  background: url("../assets/bg.png");
  box-sizing: border-box;
  padding: 0 100px;
}
.boxL {
  width: 50%;
  height: 100%;
  position: relative;
}
.boxR {
  width: 50%;
  height: 100%;
  position: relative;
}
.title {
  position: absolute;
  top: 100px;
  left: 855px;
  font-size: 48px;
  color: #ffffff;
  font-weight: bold;
}
.title1 {
  left: 788px;
}
.subtitle1 {
  margin: 231px 0 0 0;
}
.subtitle {
  font-size: 36px;
  color: #fefefe;
  padding-bottom: 10px;
  margin-left: 50px;
}
#echart1 {
  background: transparent;
  width: 1717px;
  height: 600px;
}
#echart5 {
  width: 1717px;
  height: 600px;
}
#echart6 {
  width: 1717px;
  height: 1400px;
}
#echart4 {
  width: 1629px;
  height: 649px;
}
.boxL-center {
  display: flex;
}
#echart2 {
  margin: 0 200px 0 100px;
}
#echart3 {
  margin: 0 0 0 100px;
}
#echart2,
#echart3 {
  text-align: center;
  width: 600px;
  height: 500px;
}
/* 横线 */
.transverseLine {
  margin: 50px 0 105px 0;
}
/* 竖线 */
.longLine {
  margin: 312px 62px 0 62px;
}
/* 箭头样式 */
.arrows {
  width: 41px;
  height: 31px;
  margin: 0 19px 0 0;
  vertical-align: middle;
}
/* echart6 文字定位 */
.p {
  font-size: 32px;
  color: #e1ebef;
}
.p1 {
  position: absolute;
  bottom: 1360px;
  right: 500px;
}
.p2 {
  position: absolute;
  bottom: 890px;
  right: 1185px;
}
.p3 {
  position: absolute;
  bottom: 890px;
  right: 500px;
}
.p4 {
  position: absolute;
  bottom: 420px;
  right: 1165px;
}
.p5 {
  position: absolute;
  bottom: 420px;
  right: 500px;
}
</style>
