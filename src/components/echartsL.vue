<template>
  <div class="box">
    <!-- 左边echarts -->
    <div class="boxL">
      <div class="title title1">设备情况看板</div>
      <div>
        <div class="subtitle subtitle1">
          <img class="arrows" src="../assets/Headingstyles.png" alt>设备故障统计
        </div>
        <div id="echart1"></div>
      </div>
      <div class="transverseLine">
        <img src="../assets/transverseLine.svg" alt>
      </div>
      <div class="boxL-center">
        <div>
          <div class="subtitle">
            <img class="arrows" src="../assets/Headingstyles.png" alt>每月故障时间分布
          </div>
          <div>
            <div id="echart2"></div>
          </div>
        </div>
        <div>
          <div class="subtitle">
            <img class="arrows" src="../assets/Headingstyles.png" alt>每月故障时间分布
          </div>
          <div>
            <div id="echart3"></div>
          </div>
        </div>
      </div>
      <div class="transverseLine">
        <img src="../assets/transverseLine.svg" alt>
      </div>
      <div>
        <div class="subtitle">
          <img class="arrows" src="../assets/Headingstyles.png" alt>故障分布车间
        </div>
        <div class="haloBox">
          <div class="halo1">
            <div class="halo2 halo">
              <div class="halo3 halo">
                <div class="halo4 halo">
                  <div class="halo5 halo">总装分厂</div>
                </div>
              </div>
            </div>
          </div>
          <div class="GoldTwo">
            <div class="GoldTwo4 halo">
              <div class="GoldTwo3 halo">
                <div class="GoldTwo2 halo">
                  <div class="GoldTwo1 halo">金二分厂</div>
                </div>
              </div>
            </div>
          </div>
          <div class="Agold">
            <div class="Agold4 halo">
              <div class="Agold3 halo">
                <div class="Agold2 halo">
                  <div class="Agold1 halo">金一分厂</div>
                </div>
              </div>
            </div>
          </div>
          <div class="cast">
            <div class="cast4 halo">
              <div class="cast3 halo">
                <div class="cast2 halo">
                  <div class="cast1 halo">段热铆分厂</div>
                </div>
              </div>
            </div>
          </div>
          <div class="Heatforging">
            <div class="Heatforging4 halo">
              <div class="Heatforging3 halo">
                <div class="Heatforging2 halo">
                  <div class="Heatforging1 halo">铸造分厂</div>
                </div>
              </div>
            </div>
          </div>
          <div class="one">
            <div class="one4 circle">
              <div class="one3 circle">
                <div class="one2 circle">
                  <div class="one1 circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="two">
            <div class="two4 circle">
              <div class="two3 circle">
                <div class="two2 circle">
                  <div class="two1 circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="three">
            <div class="three4 circle">
              <div class="three3 circle">
                <div class="three2 circle">
                  <div class="three1 circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="four">
            <div class="four4 circle">
              <div class="four3 circle">
                <div class="four2 circle">
                  <div class="four1 circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="five">
            <div class="five4 circle">
              <div class="five3 circle">
                <div class="five2 circle">
                  <div class="five1 circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="six">
            <div class="six4 circle">
              <div class="six3 circle">
                <div class="six2 circle">
                  <div class="six1 circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="seven">
            <div class="seven4 circle">
              <div class="seven3 circle">
                <div class="seven2 circle">
                  <div class="seven1 circle"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="eight">
            <div class="eight4 circle">
              <div class="eight3 circle">
                <div class="eight2 circle">
                  <div class="eight1 circle"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 竖线 -->
    <div class="longLine">
      <img src="../assets/longstring.svg" alt>
    </div>
    <!-- 右边echarts -->
    <div class="boxR">
      <div class="title">生产KPI</div>
      <div>
        <div class="subtitle subtitle1">
          <img class="arrows" src="../assets/Headingstyles.png" alt>完成工时统计
        </div>
        <div id="echart5"></div>
      </div>
      <div class="transverseLine">
        <img src="../assets/transverseLine.svg" alt>
      </div>
      <div>
        <div class="subtitle">
          <img class="arrows" src="../assets/Headingstyles.png" alt>完成率统计
        </div>
        <div class="echart6Box">
          <div id="echart6"></div>
          <div class="p">
            <p class="p1">金一分厂</p>
            <p class="p2">金二分厂</p>
            <p class="p3">总装分厂</p>
            <p class="p4">锻热铆分厂</p>
            <p class="p5">铸造分厂</p>
          </div>
        </div>
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
        legend: {
          y: "top",
          x: "right",
          textStyle: {
            color: '#ddd',
            fontSize: 20
          },
          padding:[0,170,0,0],
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
            },
            nameTextStyle: {
              color: "#fff",
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              },
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18,
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
                color: "#ddd",
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18,
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
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18,
            }
          }
        ],
        series: [
          {
            name: "设备故障次数",
            type: "bar",
            yAxisIndex: 0,
            data: [10, 13, 15, 16, 12, 20, 9, 12, 7, 15, 12, 13],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
          },
          {
            name: "设备维护保养问题数",
            yAxisIndex: 0,
            type: "bar",
            data: [12, 16, 13, 15, 10, 17, 25, 30, 10, 15, 25, 35],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
          },
          {
            name: "平均响应时长",
            type: "line",
            yAxisIndex: 1,
            data: [48, 51, 35, 32, 36, 34, 35, 30, 20, 27, 28, 16],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
          },
          {
            name: "故障设备台数",
            type: "line",
            yAxisIndex: 0,
            data: [4, 5, 7, 2, 3, 3, 5, 6, 3, 3, 5, 1],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
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
            label: {
              fontSize: 22
            },
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
            label: {
              fontSize: 22
            },
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
        legend: {
          y: "top",
          x: "right",
          textStyle: {
            color: '#ddd',
            fontSize: 20,
          },
          padding:[0,170,0,0],
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
            },
            nameTextStyle: {
              color: "#fff",
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              },
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18,
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
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18,
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
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18,
            }
          }
        ],
        series: [
          {
            name: "月份完成工时",
            type: "bar",
            data: [100, 120, 120, 140, 160, 100, 70, 75, 120, 140, 160, 160],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
          },
          {
            name: "同期完成工时",
            type: "bar",
            data: [80, 120, 120, 130, 165, 110, 85, 90, 135, 120, 140, 150],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
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
          y: "top",
          x: "right",
          orient: "horizontal",
          textStyle: {
            color: '#ddd',
            fontSize: 20,
            lineHeight: 30,
          }, 
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
            label: {
              fontSize: 24
            },
            radius: 220,
            center: ["30%", "17%"],
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
            label: {
              fontSize: 24
            },
            radius: ["18%", "28%"],
            center: ["70%", "17%"],
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
            label: {
              fontSize: 24
            },
            radius: ["18%", "28%"],
            center: ["30%", "51%"],
            encode: {
              itemName: "完成情况",
              value: "金二分厂"
            }
          },
          {
            name: "总装分厂",
            type: "pie",
            label: {
              fontSize: 24
            },
            radius: ["18%", "28%"],
            center: ["70%", "51%"],
            encode: {
              itemName: "完成情况",
              value: "总装分厂"
            }
          },
          {
            name: "段热铆分厂",
            type: "pie",
            label: {
              fontSize: 24
            },
            radius: ["18%", "28%"],
            center: ["30%", "85%"],
            encode: {
              itemName: "完成情况",
              value: "锻热铆分厂"
            }
          },
          {
            name: "铸造分厂",
            type: "pie",
            label: {
              fontSize: 24
            },
            radius: ["18%", "28%"],
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
      this.drawChart5();
      this.drawChart6();
    }
  },
  mounted: function() {
    this.drawCharts();
  },
  updated: function() {
    this.drawCharts();
  },
};
</script>

<style scoped>
/* 1.定义动画 */
@keyframes halos4 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 1);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(0, 255, 255, 0.9);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 0.8);
  }
}
@keyframes halos3 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 0.7);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(0, 255, 255, 0.6);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 0.5);
  }
}
@keyframes halos2 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 0.5);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(0, 255, 255, 0.4);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 0.3);
  }
}
@keyframes halos1 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 0.3);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(0, 255, 255, 0.2);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(0, 255, 255, 0.1);
  }
}
/* 2.定义动画 */
@keyframes GoldTwo4 {
  0% {
    box-shadow: 0px 0px 1px 0px rgb(30,189,223,1);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(30,189,223, 0.9);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(30,189,223, 0.8);
  }
}
@keyframes GoldTwo3 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(30,189,223, 0.7);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(30,189,223, 0.6);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(30,189,223, 0.5);
  }
}
@keyframes GoldTwo2 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(30,189,223, 0.5);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(30,189,223, 0.4);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(30,189,223, 0.3);
  }
}
@keyframes GoldTwo1 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(30,189,223, 0.3);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(30,189,223, 0.2);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(30,189,223, 0.1);
  }
}
/* 3.定义动画 */
@keyframes Agold4 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 1);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(229,183,132, 0.9);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 0.8);
  }
}
@keyframes Agold3 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 0.7);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(229,183,132, 0.6);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 0.5);
  }
}
@keyframes Agold2 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 0.5);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(229,183,132, 0.4);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 0.3);
  }
}
@keyframes Agold1 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 0.3);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(229,183,132, 0.2);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(229,183,132, 0.1);
  }
}
/* 4.定义动画 */
@keyframes cast4 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 1);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(107,230,193, 0.9);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 0.8);
  }
}
@keyframes cast3 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 0.7);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(107,230,193, 0.6);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 0.5);
  }
}
@keyframes cast2 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 0.5);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(107,230,193, 0.4);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 0.3);
  }
}
@keyframes cast1 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 0.3);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(107,230,193, 0.2);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(107,230,193, 0.1);
  }
}
/* 5.定义动画 */
@keyframes Heatforging4 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 1);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(234,131,138, 0.9);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 0.8);
  }
}
@keyframes Heatforging3 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 0.7);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(234,131,138, 0.6);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 0.5);
  }
}
@keyframes Heatforging2 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 0.5);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(234,131,138, 0.4);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 0.3);
  }
}
@keyframes Heatforging1 {
  0% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 0.3);
  }
  70% {
    box-shadow: 0px 0px 15px 0px rgba(234,131,138, 0.2);
  }
  100% {
    box-shadow: 0px 0px 1px 0px rgba(234,131,138, 0.1);
  }
}
.haloBox {
  width: 1700px;
  height: 840px;
  overflow: hidden;
  margin: 20px 0 0 50px;
  position: relative;
  color: #ffffff;
  font-size: 36px;
  text-align: center;
}
.halo1 {
  display: flex;
  position: absolute;
  top: 80px;
  left: 480px;
}
.GoldTwo {
  display: flex;
  position: absolute;
  top: 320px;
  left: 250px;
}
.GoldTwo4 {
  animation: GoldTwo1 2s linear infinite;
}
.GoldTwo3 {
  animation: GoldTwo2 2s linear infinite;
}
.GoldTwo2 {
  animation: GoldTwo3 2s linear infinite;
}
.GoldTwo1 {
  line-height: 225px;
  animation: GoldTwo4 1.5s linear infinite;
  width: 225px;
  height: 225px;
  background: #118ede;
}
.Agold {
  display: flex;
  position: absolute;
  top: 280px;
  left: 650px;
}
.Agold4 {
  animation: Agold1 2s linear infinite;
}
.Agold3 {
  animation: Agold2 2s linear infinite;
}
.Agold2 {
  animation: Agold3 2s linear infinite;
}
.Agold1 {
  line-height: 175px;
  animation: Agold4 1.5s linear infinite;
  width: 175px;
  height: 175px;
  background: #e5b784;
}
.cast {
  display: flex;
  position: absolute;
  top: 50px;
  left: 1000px;
}
.cast4 {
  animation: cast1 2s linear infinite;
}
.cast3 {
  animation: cast2 2s linear infinite;
}
.cast2 {
  animation: cast3 2s linear infinite;
}
.cast1 {
  line-height: 250px;
  animation: cast4 1.5s linear infinite;
  width: 250px;
  height: 250px;
  background: #6be6c1;
}
.Heatforging {
  display: flex;
  position: absolute;
  top: 500px;
  left: 900px;
}
.Heatforging4 {
  animation: Heatforging1 2s linear infinite;
}
.Heatforging3 {
  animation: Heatforging2 2s linear infinite;
}
.Heatforging2 {
  animation: Heatforging3 2s linear infinite;
}
.Heatforging1 {
  line-height: 200px;
  animation: Heatforging4 1.5s linear infinite;
  width: 200px;
  height: 200px;
  background: #ea838a;
}
.one {
  display: flex;
  position: absolute;
  top: 200px;
  left: 330px;
}
.one4 {
  animation: cast1 2s linear infinite;
}
.one3 {
  animation: cast2 2s linear infinite;
}
.one2 {
  animation: cast3 2s linear infinite;
}
.one1 {
  animation: cast4 1.5s linear infinite;
  width: 30px;
  height: 30px;
  background: #6BE6C1;
}
.two {
  display: flex;
  position: absolute;
  top: 380px;
  left: 150px;
}
.two4 {
  animation: Agold1 2s linear infinite;
}
.two3 {
  animation: Agold2 2s linear infinite;
}
.two2 {
  animation: Agold3 2s linear infinite;
}
.two1 {
  animation: Agold4 1.5s linear infinite;
  width: 60px;
  height: 60px;
  background: #E5B784;
}
.three {
  display: flex;
  position: absolute;
  top: 370px;
  left: 590px;
}
.three4 {
  animation: Heatforging1 2s linear infinite;
}
.three3 {
  animation: Heatforging2 2s linear infinite;
}
.three2 {
  animation: Heatforging3 2s linear infinite;
}
.three1 {
  animation: Heatforging4 1.5s linear infinite;
  width: 15px;
  height: 15px;
  background: #EA838A;
}
.four {
  display: flex;
  position: absolute;
  top: 650px;
  left: 650px;
}
.four4 {
  animation: cast1 2s linear infinite;
}
.four3 {
  animation: cast2 2s linear infinite;
}
.four2 {
  animation: cast3 2s linear infinite;
}
.four1 {
  animation: cast4 1.5s linear infinite;
  width: 50px;
  height: 50px;
  background: #6BE6C1;
}
.five {
  display: flex;
  position: absolute;
  top: 0px;
  left: 750px;
}
.five4 {
  animation: GoldTwo1 2s linear infinite;
}
.five3 {
  animation: GoldTwo2 2s linear infinite;
}
.five2 {
  animation: GoldTwo3 2s linear infinite;
}
.five1 {
  animation: GoldTwo4 1.5s linear infinite;
  width: 50px;
  height: 50px;
  background: #1EBDDF;
}
.six {
  display: flex;
  position: absolute;
  top: 400px;
  left: 1000px;
}
.six4 {
  animation: GoldTwo1 2s linear infinite;
}
.six3 {
  animation: GoldTwo2 2s linear infinite;
}
.six2 {
  animation: GoldTwo3 2s linear infinite;
}
.six1 {
  animation: GoldTwo4 1.5s linear infinite;
  width: 40px;
  height: 40px;
  background: #1EBDDF;
}
.seven {
  display: flex;
  position: absolute;
  top: 550px;
  left: 1250px;
}
.seven4 {
  animation: GoldTwo1 2s linear infinite;
}
.seven3 {
  animation: GoldTwo2 2s linear infinite;
}
.seven2 {
  animation: GoldTwo3 2s linear infinite;
}
.seven1 {
  animation: GoldTwo4 1.5s linear infinite;
  width: 45px;
  height: 45px;
  background: #1EBDDF;
}
.eight {
  display: flex;
  position: absolute;
  top: 300px;
  left: 1400px;
}
.eight4 {
  animation: Agold1 2s linear infinite;
}
.eight3 {
  animation: Agold2 2s linear infinite;
}
.eight2 {
  animation: Agold3 2s linear infinite;
}
.eight1 {
  animation: Agold4 1.5s linear infinite;
  width: 50px;
  height: 50px;
  background: #E5B784;
}
.halo{
  margin: 15px;
  border-radius: 50%;
  border: transparent 1px solid;
}
.circle{
  margin: 5px;
  border-radius: 50%;
  border: transparent 1px solid;
}
.halo2 {
  animation: halos1 2s linear infinite;
}
.halo3 {
  animation: halos2 2s linear infinite;
}
.halo4 {
  animation: halos3 2s linear infinite;
}
.halo5 {
  line-height: 150px;
  animation: halos4 1.5s linear infinite;
  width: 150px;
  height: 150px;
  background: #1ebddf;
}
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
.echart6Box {
  position: relative;
  width: 1717px;
  height: 1600px;
}
#echart6 {
  width: 1717px;
  height: 1600px;
}
/* echart6 文字定位 */
.p {
  font-size: 32px;
  color: #e1ebef;
}
.p1 {
  position: absolute;
  bottom: 1310px;
  right: 455px;
}
.p2 {
  position: absolute;
  bottom: 760px;
  right: 1140px;
}
.p3 {
  position: absolute;
  bottom: 760px;
  right: 450px;
}
.p4 {
  position: absolute;
  bottom: 220px;
  right: 1120px;
}
.p5 {
  position: absolute;
  bottom: 220px;
  right: 450px;
}
.boxL-center {
  display: flex;
}
#echart2 {
  margin: 0 200px 0 80px;
}
#echart3 {
  margin: 0 0 0 80px;
}
#echart2,
#echart3 {
  text-align: center;
  width: 650px;
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
</style>
