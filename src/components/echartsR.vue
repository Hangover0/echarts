<template>
  <div class="echart-container">
    <div class="left-box">
      <!-- 采购KPI部分 -->
      <div class="left-title">采购KPI</div>
      <!--采购费用分析  -->
      <div class="caigou-part">
        <div class="sub-title">
          <img class="arrows" src="../assets/Headingstyles.png" alt>采购费用分析
        </div>
        <div>
          <div class="total-price">
            <div class="sub-total"></div>
          </div>
          <div class="font-part">
            <img src="../assets/totalPrice.png" alt>
          </div>
          <div id="caigouEchart"></div>
        </div>
        <div class="transverseLine">
          <img src="../assets/transverseLine.svg" alt>
        </div>
      </div>

      <div class="caigou-part2">
        <div class="part2-box">
          <!-- 各类物资采购金额占比 -->
          <div>
            <div class="caigou-kinds">
              <div class="sub-title">
                <img class="arrows" src="../assets/Headingstyles.png" alt>各类物资采购金额占比
              </div>
              <div id="caigouKindsEchart"></div>
            </div>
            <!-- 竖线 -->
            <div class="longLine">
              <img src="../assets/longstring.svg" alt>
            </div>
          </div>
          <!--历年各类物资采购金额占比  -->
          <div>
            <div class="sub-title">
              <img class="arrows" src="../assets/Headingstyles.png" alt>历年各类物资采购金额占比
            </div>
            <div id="overCaigouKindsEchart"></div>
          </div>
        </div>

        <!-- 横线 -->
        <div class="transverseLine">
          <img src="../assets/transverseLine.svg" alt>
        </div>
      </div>

      <div class="caigou-part3">
        <div class="sub-title">
          <img class="arrows" src="../assets/Headingstyles.png" alt>重要物资历史采购价格趋势
        </div>
        <div id="importantCaigouEchart"></div>
        <div class="transverseLine">
          <img src="../assets/transverseLine.svg" alt>
        </div>
      </div>

      <div class="caigou-part4">
        <div class="commit-goods">
          <div>
            <div>
              <div class="sub-title">
                <img class="arrows" src="../assets/Headingstyles.png" alt>交货一次检验合格率
              </div>
              <div id="commitGoodsEchart"></div>
            </div>
            <div>
              <div class="sub-title">
                <img class="arrows" src="../assets/Headingstyles.png" alt>准时交货率
              </div>
              <div id="commitGoodsTimeEchart"></div>
            </div>
          </div>
          <div class="longLine">
            <img src="../assets/longstring.svg" alt>
          </div>
        </div>
        <div class="main-gongying">
          <div class="sub-title">
            <img class="arrows" src="../assets/Headingstyles.png" alt>主要供应商
          </div>
          <div id="mainGongyingEchart"></div>
        </div>
      </div>
    </div>
    <div class="right-box">
      <!-- 销售KPI部分 -->
      <div class="left-title">销售KPI</div>
      <div>
        <!-- 采购费用分析 -->
        <div class="right-part1">
          <div class="sub-title">
            <img class="arrows" src="../assets/Headingstyles.png" alt>采购费用分析
          </div>
          <div class="right-part1-main">
            <div>
              <span>合同总额</span>
              <span>￥</span>
              <span>1.65</span>
              <span>亿元</span>
            </div>
            <div>
              <span>销售总额</span>
              <span>￥</span>
              <span>1.32</span>
              <span>亿元</span>
            </div>
          </div>
        </div>
        <!--客户增长  -->
        <div class="right-part2">
          <div class="sub-title">
            <img class="arrows" src="../assets/Headingstyles.png" alt>客户增长
          </div>
          <div id="rightEchart1"></div>
          <div class="transverseLine">
            <img src="../assets/transverseLine.svg" alt>
          </div>
        </div>

        <!--产品数据  -->
        <div class="right-part3">
          <div class="sub-title">
            <img class="arrows" src="../assets/Headingstyles.png" alt>产品数据
          </div>
          <div class="right-part3-main">
            <div id="product1"></div>
            <div>
              <div id="product2"></div>
              <div id="product3"></div>
              <div id="product4"></div>
              <div id="product5"></div>
            </div>
          </div>
          <div class="transverseLine">
            <img src="../assets/transverseLine.svg" alt>
          </div>
        </div>

        <div class="right-part4">
          <div class="sub-title">
            <img class="arrows" src="../assets/Headingstyles.png" alt>销售数据
          </div>
          <div id="rightLastEchart"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import echarts from "echarts";
import liquidFill from "echarts-liquidfill";
import wordCloud from "echarts-wordcloud";
export default {
  name: "echartsR",
  data() {
    return {
      caigouEchart: "",
      caigouKindsEchart: "",
      overCaigouKindsEchart: "",
      importantCaigouEchart: "",
      commitGoodsEchart: "",
      commitGoodsTimeEchart: "",
      mainGongyingEchart: "",
      rightEchart1: "",
      product1: "",
      product2: "",
      product3: "",
      product4: "",
      product5: "",
      rightLastEchart: ""
    };
  },
  methods: {
    caigouEchartF() {
      this.caigouEchart = echarts.init(
        document.getElementById("caigouEchart"),
        "mythemes"
      );
      this.caigouEchart.setOption({
        title: {},
        legend: {
          x: "right",
          y: "top",
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: 20
          },
          padding: [0, 130, 50, 0]
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 80,
          bottom: 30,
          height: 200
        },
        xAxis: {
          type: "value",
          position: "top",
          splitLine: { lineStyle: { type: "dashed" } },
          min: -0.1,
          max: 0.25,
          nameTextStyle: {
            color: "#fff"
          },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            color: "#ddd",
            fontSize: 18
          }
        },
        yAxis: {
          type: "category",
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: ["2017", "2016", "2015"],
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            color: "#ddd",
            fontSize: 18
          }
        },
        series: [
          {
            name: "费用增长环比指数",
            type: "bar",
            label: {
              normal: {
                show: true,
                formatter: "{b}"
              }
            },
            data: [0.12, 0.25, -0.1]
          }
        ]
      });
    },
    caigouKindsEchartF() {
      this.caigouKindsEchart = echarts.init(
        document.getElementById("caigouKindsEchart"),
        "mythemes"
      );
      this.caigouKindsEchart.setOption({
        title: {},
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
          show: false,
          x: "center",
          y: "bottom",
          orient: "horizontal",
          data: [
            "原材料",
            "外购零件",
            "工具量具",
            "工装火具",
            "办公耗材",
            "劳保清洁品"
          ],
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        },
        grid: {
          bottom: "30%"
        },
        toolbox: {
          show: false,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ["pie", "funnel"]
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: "采购金额占比",
            type: "pie",
            radius: [30, 160],
            label: {
              fontSize: 24
            },
            center: ["50%", "50%"],
            roseType: "area",
            data: [
              { value: 35, name: "原材料" },
              { value: 15, name: "外购零件" },
              { value: 10, name: "工具量具" },
              { value: 5, name: "工装火具" },
              { value: 45, name: "办公耗材" },
              { value: 2, name: "劳保清洁品" }
            ]
          }
        ]
      });
    },
    overCaigouKindsEchartF() {
      this.overCaigouKindsEchart = echarts.init(
        document.getElementById("overCaigouKindsEchart"),
        "mythemes"
      );
      this.overCaigouKindsEchart.setOption({
        title: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          x: "right",
          y: "bottom",
          orient: "horizontal",
          data: ["原材料", "外购零件", "工具量具", "工装火具", "办公耗材"],
          textStyle: {
            color: "#fff",
            fontSize: 20
          },
          padding: [100, 90, 0, 0]
        },
        grid: {
          left: 0,
          right: "10%",
          bottom: "12%",
          width: 900,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: ["2015", "2016", "2017", "2018"],
            nameTextStyle: {
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#ddd"
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            min: 0,
            max: 300,
            interval: 50,
            axisLine: {
              lineStyle: {
                color: "#ddd"
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18
            }
          }
        ],
        series: [
          {
            name: "原材料",
            type: "bar",
            stack: "采购金额",
            barWidth: 60,
            data: [110, 105, 100, 95],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
          },
          {
            name: "外购零件",
            type: "bar",
            stack: "采购金额",
            data: [60, 75, 85, 105],
          },
          {
            name: "工具量具",
            type: "bar",
            stack: "采购金额",
            data: [20, 25, 30, 20]
          },
          {
            name: "工装火具",
            type: "bar",
            stack: "采购金额",
            data: [30, 40, 45, 30],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
            },
          },
          {
            name: "办公耗材",
            type: "bar",
            stack: "采购金额",
            data: [22, 25, 28, 18],
          }
        ]
      });
    },
    importantCaigouEchartF() {
      this.importantCaigouEchart = echarts.init(
        document.getElementById("importantCaigouEchart"),
        "mythemes"
      );
      this.importantCaigouEchart.setOption({
        title: {},
        tooltip: {
          trigger: "axis"
        },
        legend: {
          x: "right",
          y: "top",
          data: [
            "直流电机",
            "交流电机",
            "动平衡仪",
            "粗糙度仪",
            "涡流探伤仪",
            "接触器",
            "滚珠丝杆"
          ],
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "2%",
          width: 1595,
          containLabel: true
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          data: ["2015", "2016", "2017", "2018"],
          nameTextStyle: {
            color: "#fff"
          },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            color: "#ddd",
            fontSize: 18
          }
        },
        yAxis: {
          type: "value",
          min: 0,
          max: 20,
          interval: 2,
          axisLabel: {
            formatter: "{value} 万元"
          },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            color: "#ddd",
            fontSize: 18
          }
        },
        series: [
          {
            name: "直流电机",
            type: "line",
            data: [5, 4.5, 6, 5.8],
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            }
          },
          {
            name: "交流电机",
            type: "line",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            data: [0.3, 0.5, 0.6, 0.55]
          },
          {
            name: "动平衡仪",
            type: "line",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            data: [2.6, 2.8, 2.7, 3]
          },
          {
            name: "粗糙度仪",
            type: "line",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            data: [1.8, 2.8, 2.5, 3]
          },
          {
            name: "涡流探伤仪",
            type: "line",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            data: [10, 13, 12, 15]
          },

          {
            name: "接触器",
            type: "line",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            data: [0.5, 0.48, 0.55, 0.58]
          },
          {
            name: "滚珠丝杆",
            type: "line",
            markPoint: {
              data: [
                { type: "max", name: "最大值" },
                { type: "min", name: "最小值" }
              ]
            },
            data: [1.2, 1.5, 1.4, 1.7]
          }
        ]
      });
    },
    commitGoodsEchartF() {
      this.commitGoodsEchart = echarts.init(
        document.getElementById("commitGoodsEchart"),
        "mythemes"
      );
      var value = 0.95;
      var data = [];
      data.push(value);
      data.push(value);
      data.push(value);
      data.push(value);
      data.push(value);
      this.commitGoodsEchart.setOption({
        // backgroundColor: '#1b2735',
        title: {},
        series: [
          {
            type: "liquidFill",
            radius: "80%",
            data: data,
            backgroundStyle: {
              borderWidth: 3,
              borderColor: "#32C0E3",
              color: "rgb(255,0,255,0.01)"
            },
            label: {
              normal: {
                formatter: (value * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize: 50
                }
              }
            }
          }
        ]
      });
    },
    commitGoodsTimeEchartF() {
      this.commitGoodsTimeEchart = echarts.init(
        document.getElementById("commitGoodsTimeEchart"),
        "mythemes"
      );
      var value = 0.62;
      var data = [];
      data.push(value);
      data.push(value);
      data.push(value);
      data.push(value);
      data.push(value);
      this.commitGoodsTimeEchart.setOption({
        // backgroundColor: '#1b2735',
        title: {},
        series: [
          {
            type: "liquidFill",
            radius: "80%",
            data: data,
            backgroundStyle: {
              borderWidth: 3,
              borderColor: "#32C0E3",
              color: "rgb(255,0,255,0.01)"
            },
            label: {
              normal: {
                formatter: (value * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize: 50
                }
              }
            }
          }
        ]
      });
    },
    mainGongyingEchartF() {
      this.mainGongyingEchart = echarts.init(
        document.getElementById("mainGongyingEchart"),
        "mythemes"
      );
      this.mainGongyingEchart.setOption({
        tooltip: {},
        series: [
          {
            type: "wordCloud",
            gridSize: 20,
            sizeRange: [12, 50],
            rotationRange: [0, 0],
            shape: "circle",
            textStyle: {
              normal: {
                color: function() {
                  let colorArr = [
                    "#3fb1e3",
                    "#6be6c1",
                    "#e3b67f",
                    "#aaa0e6",
                    "#c4ebad",
                    "#96dee8"
                  ];
                  let colorIndex = Math.ceil(Math.random() * 6);
                  return colorArr[colorIndex];
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: [
              { name: "日本康太克", value: "9000" },
              { name: "ABB", value: "8581" },
              { name: "太安", value: "8086" },
              { name: "东旗", value: "7555" },
              { name: "西安西玛电机", value: "7067" },
              { name: "瑞士TESA", value: "6544" },
              { name: "迪博自控技术", value: "6098" },
              { name: "仪和贸易", value: "5584" },
              { name: "光明仪表", value: "5012" },
              { name: "西门子", value: "4565" },
              { name: "南通远东", value: "4047" },
              { name: "海德汉光学", value: "3582" },
              { name: "五金机械", value: "3055" },
              { name: "伸格公司", value: "2550" },
              { name: "西门子", value: "2062" },
              { name: "上海跃进", value: "1566" },
              { name: "日本康太克", value: "9000" },
              { name: "ABB", value: "8581" },
              { name: "太安", value: "8086" },
              { name: "东旗", value: "7555" },
              { name: "西安西玛电机", value: "7067" },
              { name: "瑞士TESA", value: "6544" },
              { name: "迪博自控技术", value: "6098" },
              { name: "仪和贸易", value: "5584" },
              { name: "光明仪表", value: "5012" },
              { name: "西门子", value: "4565" },
              { name: "南通远东", value: "4047" },
              { name: "海德汉光学", value: "3582" },
              { name: "五金机械", value: "3055" },
              { name: "伸格公司", value: "2550" },
              { name: "西门子", value: "2062" },
              { name: "上海跃进", value: "1566" },
              { name: "日本康太克", value: "1000" },
              { name: "ABB", value: "981" },
              { name: "太安", value: "886" },
              { name: "东旗", value: "755" },
              { name: "西安西玛电机", value: "667" },
              { name: "瑞士TESA", value: "644" },
              { name: "迪博自控技术", value: "598" },
              { name: "仪和贸易", value: "584" },
              { name: "光明仪表", value: "512" },
              { name: "西门子", value: "465" },
              { name: "南通远东", value: "404" },
              { name: "海德汉光学", value: "382" },
              { name: "五金机械", value: "305" },
              { name: "伸格公司", value: "255" },
              { name: "西门子", value: "206" },
              { name: "上海跃进", value: "156" },
              { name: "日本康太克", value: "1000" },
              { name: "ABB", value: "981" },
              { name: "太安", value: "886" },
              { name: "东旗", value: "755" },
              { name: "西安西玛电机", value: "667" },
              { name: "瑞士TESA", value: "644" },
              { name: "迪博自控技术", value: "598" },
              { name: "仪和贸易", value: "584" },
              { name: "光明仪表", value: "512" },
              { name: "西门子", value: "465" },
              { name: "南通远东", value: "404" },
              { name: "海德汉光学", value: "382" },
              { name: "五金机械", value: "305" },
              { name: "伸格公司", value: "255" },
              { name: "西门子", value: "206" },
              { name: "上海跃进", value: "156" },
            ]
          }
        ]
      });
    },
    rightEchartF1() {
      this.rightEchart1 = echarts.init(
        document.getElementById("rightEchart1"),
        "mythemes"
      );
      this.rightEchart1.setOption({
        title: {
          show: false
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985"
            }
          }
        },
        legend: {
          x: "right",
          data: [
            "生产计划大纲按时生产完成率",
            "同期客户增长率",
            "同期最终客户占比率"
          ],
          y: "top",
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        },

        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "2%",
          width: 1595,
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["2014年", "2015年", "2016年", "2017年", "2018年"],
            nameTextStyle: {
              color: "#fff"
            },
            axisLine: {
              lineStyle: {
                color: "#ddd"
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18
            }
          }
        ],
        yAxis: [
          {
            name: "比率",
            type: "value",
            axisLabel: {
              formatter: "{value} %"
            },
            min: "0",
            max: "300",
            axisLine: {
              lineStyle: {
                color: "#fff",
                fontSize: "18px"
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 18
            }
          }
        ],
        series: [
          {
            name: "生产计划大纲按时生产完成率",
            type: "line",
            stack: "总量",
            areaStyle: {},
            data: [95, 90, 200, 97, 150],
            markPoint: {
              data: [
                {
                  name: "最大值",
                  type: "max"
                },
                { name: "最小值", type: "min" }
              ]
            }
          },
          {
            name: "同期客户增长率",
            stack: "总量",
            type: "line",
            areaStyle: {},
            data: [60, 80, 50, 30, 10]
          },
          {
            name: "同期最终客户占比率",
            type: "line",
            stack: "总量",
            label: {
              normal: {
                show: true,
                position: "top"
              }
            },
            areaStyle: { normal: {} },
            data: [30, 20, 50, 70, 90]
          }
        ]
      });
    },
    productF1() {
      this.product1 = echarts.init(
        document.getElementById("product1"),
        "mythemes"
      );
      var hideStyle = {
        normal: {
          color: "transparent", //未完成的圆环的颜色
          label: {
            show: false
          },
          labelLine: {
            show: false
          }
        },
        emphasis: {
          show: false
        }
      };
      this.product1.setOption({
        title: {
          text: "销售计划完成率",
          textStyle: {
            color: "#ddd",
            fontSize: 20,
            fontFamily: "Microsoft YaHei",
            fontWeight: "normal"
          },
          padding: [40, 0, 0, 180]
        },
        legend: {
          x: "right",
          y: "bottom",
          data: ["2015年", "2016年", "2017年", "2018年"],
          textStyle: {
            color: "#ddd",
            fontSize: 20
          },
          padding: [0, 0, 40, 0]
        },
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: false,
            radius: [180, 200],
            label: {
              normal: {
                show: false,
                position: "inside"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            hoverAnimation: true,
            data: [
              {
                value: 107,
                name: "2015年"
              },
              {
                value: 193,
                name: "hide",
                itemStyle: hideStyle
              }
            ]
          },
          {
            name: "Line 2",
            type: "pie",
            clockWise: false,
            radius: [150, 170],
            label: {
              normal: {
                show: false,
                position: "inside"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            hoverAnimation: true,
            data: [
              {
                value: 100,
                name: "2016年"
              },
              {
                value: 100,
                name: "hide",
                itemStyle: hideStyle
              }
            ]
          },
          {
            name: "Line 3",
            type: "pie",
            clockWise: false,
            radius: [120, 140],
            label: {
              normal: {
                show: false,
                position: "inside"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            hoverAnimation: true,
            data: [
              {
                value: 197,
                name: "2017年"
              },
              {
                value: 3,
                name: "hide",
                itemStyle: hideStyle
              }
            ]
          },
          {
            name: "Line 4",
            type: "pie",
            clockWise: false,
            radius: [90, 110],
            label: {
              normal: {
                show: false,
                position: "inside"
              }
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            hoverAnimation: true,
            data: [
              {
                value: 93,
                name: "2018年"
              },
              {
                value: 107,
                name: "hide",
                itemStyle: hideStyle
              }
            ]
          }
        ]
      });
    },
    productF2() {
      this.product2 = echarts.init(
        document.getElementById("product2"),
        "mythemes"
      );
      this.product2.setOption({
        title: {
          text: "轧辊磨床累计\n交货数量",
          show: true,
          x: "center",
          y: "center",
          textStyle: {
            lineHeight: 25,
            fontWeight: "lighter"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ["2015年", "2016年", "2017年", "2018年"],
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        },
        series: [
          {
            name: "2015年",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "outside",
                formatter: "{b}: {c} (台)",
                fontSize: "18"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 153, name: "2015年" },
              { value: 180, name: "2016年" },
              { value: 166, name: "2017年" },
              { value: 178, name: "2018年", selected: true }
            ]
          }
        ]
      });
    },
    productF3() {
      this.product3 = echarts.init(
        document.getElementById("product3"),
        "mythemes"
      );
      this.product3.setOption({
        title: {
          text: "轧辊磨床客户\n 订购累计台数",
          show: true,
          x: "center",
          y: "center",
          textStyle: {
            lineHeight: 25,
            fontWeight: "lighter"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ["2015年", "2016年", "2017年", "2018年"],
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        },
        series: [
          {
            name: "2015年",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "outside",
                formatter: "{b}: {c} (台)",
                fontSize: "18"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 153, name: "2015年" },
              { value: 180, name: "2016年" },
              { value: 166, name: "2017年" },
              { value: 178, name: "2018年", selected: true }
            ]
          }
        ]
      });
    },
    productF4() {
      this.product4 = echarts.init(
        document.getElementById("product4"),
        "mythemes"
      );
      this.product4.setOption({
        title: {
          text: "无心磨床客户订购\n累计台数",
          show: true,
          x: "center",
          y: "center",
          textStyle: {
            lineHeight: 25,
            fontWeight: "lighter"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ["2015年", "2016年", "2017年", "2018年"],
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        },
        series: [
          {
            name: "2015年",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "outside",
                formatter: "{b}: {c} (台)",
                fontSize: "18"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 97, name: "2015年" },
              { value: 112, name: "2016年" },
              { value: 117, name: "2017年" },
              { value: 130, name: "2018年", selected: true }
            ]
          }
        ]
      });
    },
    productF5() {
      this.product5 = echarts.init(
        document.getElementById("product5"),
        "mythemes"
      );
      this.product5.setOption({
        title: {
          text: "无心磨床客户订购\n累计台数",
          show: true,
          x: "center",
          y: "center",
          textStyle: {
            lineHeight: 25,
            fontWeight: "lighter"
          }
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ["2015年", "2016年", "2017年", "2018年"],
          textStyle: {
            color: "#fff",
            fontSize: 20
          }
        },
        series: [
          {
            name: "2015年",
            type: "pie",
            radius: ["50%", "70%"],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: "outside",
                formatter: "{b}: {c} (台)",
                fontSize: "18"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "20",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 97, name: "2015年" },
              { value: 112, name: "2016年" },
              { value: 117, name: "2017年" },
              { value: 130, name: "2018年", selected: true }
            ]
          }
        ]
      });
    },
    rightLastEchartF() {
      this.rightLastEchart = echarts.init(
        document.getElementById("rightLastEchart"),
        "mythemes"
      );
      this.rightLastEchart.setOption({
        title: {},
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross"
          }
        },
        legend: {
          x: "right",
          y: "top",
          data: [
            "订单签单率",
            "销售产品完成率",
            "销售回款回笼率",
            "销售收入增加率"
          ],
          textStyle: {
            color: "#fff",
            fontSize: 20
          },
          padding: [0, 0, 60, 0]
        },
        grid: {
          top: "15%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          width: 1595,
          containLabel: true
        },
        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2012年",
            "2013年",
            "2014年",
            "2015年",
            "2016年",
            "2017年",
            "2018年"
          ],
          nameTextStyle: {
            color: "#fff"
          },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            color: "#ddd",
            fontSize: 18
          }
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value} %"
          },
          axisLine: {
            lineStyle: {
              color: "#ddd"
            }
          },
          axisLabel: {
            color: "#ddd",
            fontSize: 18
          }
        },
        series: [
          {
            name: "订单签单率",
            type: "line",
            data: [95, 95, 80, 95, 100, 89, 90],
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            }
          },
          {
            name: "销售产品完成率",
            type: "line",
            data: [85, 80, 91, 95, 120, 80, 64],
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            }
          },
          {
            name: "销售回款回笼率",
            type: "line",
            data: [65, 70, 55, 60, 75, 91, 90],
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            }
          },
          {
            name: "销售收入增加率",
            type: "line",
            data: [15, 10, 20, 30, 15, 7, 6],
            markPoint: {
              data: [{ type: "max", name: "最大值" }]
            }
          }
        ]
      });
    }
  },
  mounted: function() {
    this.caigouEchartF();
    this.caigouKindsEchartF();
    this.overCaigouKindsEchartF();
    this.importantCaigouEchartF();
    this.commitGoodsEchartF();
    this.commitGoodsTimeEchartF();
    this.mainGongyingEchartF();
    this.rightEchartF1();
    this.productF1();
    this.productF2();
    this.productF3();
    this.productF4();
    this.productF5();
    this.rightLastEchartF();
  }
};
</script>

<style scoped>
.echart-container {
  width: 3745px;
  display: flex;
  justify-content: space-between;
}

.left-box,
.right-box {
  width: 1857px;
  height: 2839px;
  position: relative;
  color: #ffffff;
  background: url("../assets/bg2.png");
  box-sizing: border-box;
  padding: 180px 100px 0;
  overflow: hidden;
}

.left-title {
  position: absolute;
  top: 100px;
  left: 855px;
  font-size: 48px;
  color: #ffffff;
  font-weight: bold;
}

.caigou-part {
  width: 100%;
  padding: 0 0 50px 0;
}

.caigou-part > div:nth-of-type(2) {
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: flex-start;
}

.caigou-part > div:nth-of-type(2) > div:nth-of-type(1) {
  width: 40%;
  height: 80%;
}

.caigou-part > div:nth-of-type(2) > div:nth-of-type(2) {
  width: 60%;
  height: 80%;
}

.caigou-part2,
.caigou-part3,
.caigou-part4 {
  width: 100%;
  padding: 0 0 40px 0;
}

.sub-title {
  font-size: 36px;
  color: #fefefe;
  padding-bottom: 10px;
}

.sub-title > img {
  margin-right: 20px;
}

#caigouEchart {
  background: transparent;
  width: 1717px;
  height: 261px;
}


.total-price {
  width: 382.3px !important;
  height: 300px !important;
  border-radius: 50%;
  background: url("./../assets/2.svg");
  padding: 20px;
  position: relative;
  animation: loading 2s linear infinite;
}

.sub-total {
  width: 100% !important;
  height: 100% !important;
  border: 5px solid transparent;
  border-radius: 50%;
  background: url("./../assets/1.svg");
  box-sizing: border-box;
  animation: loading1 1s linear infinite;
}

.font-part {
  width: 220px !important;
  height: 200px !important;
  position: absolute;
  border-radius: 50%;
  top: 350px;
  left: 160px;
  text-align: center;
  line-height: 200px;
  background: url("./../assets/bgad.png");
}

.font-part img {
  width: 90%;
  margin-left: 10px;
}

@-webkit-keyframes loading {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loading1 {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-360deg);
  }
}

@keyframes loading1 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

/* 横线 */
.transverseLine {
  padding-top: 50px;
}

.transverseLine img {
  width: 100%;
}

/* 竖线 */
.longLine {
  text-align: center;
  height: 500px;
}

.longLine img {
  width: 2%;
  height: 100%;
}

/* 采购KPI的第二部分 */
.part2-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.part2-box > div:nth-of-type(1),
.caigou-part4 > div:nth-of-type(1) {
  width: 40%;
}

.part2-box > div:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
}

.part2-box > div:nth-of-type(1) > div:nth-of-type(1) {
  width: 80%;
}

.part2-box > div:nth-of-type(1) > div:nth-of-type(2) {
  width: 20%;
}

#caigouKindsEchart {
  height: 400px;
}

.part2-box > div:nth-of-type(2),
.caigou-part4 > div:nth-of-type(2) {
  width: 60%;
}

#overCaigouKindsEchart {
  height: 423px;
}

/* 重要物资历史采购价格趋势部分 */

#importantCaigouEchart {
  height: 500px;
}

/* 交货一次检验合格率  准时交货率 主要供应商*/

.caigou-part4 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.caigou-part4 .longLine {
  height: 730px !important;
}
.caigou-part4 .longLine img {
  width: 2%;
  height: 100%;
}

.commit-goods {
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
}

.commit-goods > div:nth-of-type(1) {
  width: 80%;
}

.commit-goods > div:nth-of-type(2) {
  width: 20%;
}

#commitGoodsEchart {
  height: 300px;
}

#commitGoodsTimeEchart {
  height: 300px;
}

#mainGongyingEchart {
  height: 700px;
}

/* 右边部分 */

.right-part1,
.right-part2,
.right-part3,
.right-part4 {
  padding-bottom: 50px;
}

.right-part1-main {
  display: flex;
  justify-content: flex-start;
}

.right-part1-main > div {
  width: 526px;
  height: 93px;
  line-height: 93px;
  margin-top: 20px;
  background: rgba(109, 156, 235, 0.25);
  border: 1px solid rgba(210, 228, 255, 0.4);
  border-radius: 6px;
}

.right-part1-main > div:nth-of-type(2) {
  margin-left: 146px;
  opacity: 1;
}

.right-part1-main > div > span:nth-of-type(1) {
  font-size: 30px;
  margin-left: 40px;
  color: rgba(30, 198, 239, 1);
}

.right-part1-main > div > span:nth-of-type(2) {
  display: inline-block;
  width: 42px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  border-radius: 50%;
  color: #fe8346;
  margin-left: 100px;
  font-size: 30px;
  border: 3px solid #fe8346;
  opacity: 1;
}

.right-part1-main > div > span:nth-of-type(3) {
  font-size: 40px;
  font-family: LetsgoDigital-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 10px;
  margin-right: 10px;
  opacity: 1;
}

.right-part1-main > div > span:nth-of-type(4) {
  font-size: 24px;
  font-family: LetsgoDigital-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
}

#rightEchart1 {
  height: 600px;
}

/* 产品数据 */

.right-part3-main {
  display: flex;
  justify-content: space-between;
  height: 600px;
}

.right-part3-main > div:nth-of-type(1) {
  width: 30%;
  height: 100%;
}

.right-part3-main > div:nth-of-type(2) {
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
}

.right-part3-main > div:nth-of-type(2) > div {
  width: 50%;
  height: 50%;
}

#rightLastEchart {
  height: 700px;
}
</style>
