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
          <vue-seamless-scroll :data="listData" :class-option="optionSingleHeight" class="seamless-warp">
            <ul class="item">
              <li v-for="(item,index) in listData" :key="index">
                <div class='table-container'>
                  <img src="../assets/leftBorder.png" alt="">
                  <span class="title" v-text="item.year"></span>
                  <span class="date" v-text="item.name"></span>
                  <span class="date" v-text="item.price"></span>
                  <span class="date" v-text="item.danwei"></span>
                  <span class="date" v-text="item.name1"></span>
                  <span class="date" v-text="item.price1"></span>
                  <span class="date" v-text="item.danwei1"></span>
                  <img src="../assets/rightBorder.png" alt="">
                </div>
              </li>
            </ul>
          </vue-seamless-scroll>
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
      rightLastEchart: "",
      listData: [{
        year: '2015年',
        name: '销售合同额',
        price: 1.23,
        danwei: '亿',
        name1: '销售收入额',
        price1: 0.93,
        danwei1: '亿'
      }, {
        year: '2016年',
        name: '销售合同额',
        price: 2.35,
        danwei: '亿',
        name1: '销售收入额',
        price1: 1.89,
        danwei1: '亿'
      }, {
        year: '2017年',
        name: '销售合同额',
        price: 1.78,
        danwei: '亿',
        name1: '销售收入额',
        price1: 1.51,
        danwei1: '亿'
      }, {
        'title': '2018年销售合同额亿销售收入额',
        'date': '0.93亿',
        year: '2018年',
        name: '销售合同额',
        price: 1.65,
        danwei: '亿',
        name1: '销售收入额',
        price1: 1.32,
        danwei1: '亿'
      },],
      mainData: [[
        { name: "日本康太克", value: "100" },
        { name: "ABB", value: "99" },
        { name: "太安", value: "98" },
        { name: "东旗", value: "97" },
        { name: "西安西玛电机", value: "96" },
        { name: "瑞士TESA", value: "95" },
        { name: "迪博自控技术", value: "80" },
        { name: "仪和贸易", value: "78" },
        { name: "光明仪表", value: "75" },
        { name: "西门子", value: "74" },
        { name: "南通远东", value: "65" },
        { name: "海德汉光学", value: "62" },
        { name: "五金机械", value: "61" },
        { name: "伸格公司", value: "56" },
        { name: "西门子", value: "54" },
        { name: "上海跃进", value: "40" },
        { name: "日本康太克", value: "39" },
        { name: "ABB", value: "36" },
        { name: "太安", value: "35" },
        { name: "东旗", value: "34" },
        { name: "西安西玛电机", value: "33" },
        { name: "瑞士TESA", value: "32" },
        { name: "迪博自控技术", value: "26" },
        { name: "仪和贸易", value: "24" },
        { name: "光明仪表", value: "22" },
        { name: "西门子", value: "21" },
        { name: "南通远东", value: "20" },
        { name: "海德汉光学", value: "32" },
        { name: "五金机械", value: "35" },
        { name: "伸格公司", value: "20" },
        { name: "西门子", value: "22" },
        { name: "上海跃进", value: "18" },
        { name: "日本康太克", value: "17" },
        { name: "ABB", value: "15" },
        { name: "太安", value: "14" },
        { name: "东旗", value: "13" },
        { name: "西安西玛电机", value: "12" },
        { name: "瑞士TESA", value: "11" },
        { name: "迪博自控技术", value: "10" },
        { name: "仪和贸易", value: "9" },
        { name: "光明仪表", value: "8" },
        { name: "西门子", value: "7 " },
        { name: "南通远东", value: "6" },
        { name: "海德汉光学", value: "5" },
        { name: "五金机械", value: "4" },
        { name: "伸格公司", value: "3" },
        { name: "西门子", value: "2" },
        { name: "上海跃进", value: "1" },
      ], [
        { name: "日本康太克", value: "100" },
        { name: "ABB", value: "99" },
        { name: "太安", value: "98" },
        { name: "东旗", value: "97" },
        { name: "西安西玛电机", value: "96" },
        { name: "瑞士TESA", value: "95" },
        { name: "迪博自控技术", value: "80" },
        { name: "仪和贸易", value: "78" },
        { name: "光明仪表", value: "75" },
        { name: "西门子", value: "74" },
        { name: "南通远东", value: "65" },
        { name: "海德汉光学", value: "62" },
        { name: "五金机械", value: "61" },
        { name: "伸格公司", value: "56" },
        { name: "西门子", value: "54" },
        { name: "上海跃进", value: "40" },
        { name: "日本康太克", value: "39" },
        { name: "ABB", value: "36" },
        { name: "太安", value: "35" },
        { name: "东旗", value: "34" },
        { name: "西安西玛电机", value: "33" },
        { name: "瑞士TESA", value: "32" },
        { name: "迪博自控技术", value: "26" },
        { name: "仪和贸易", value: "24" },
        { name: "光明仪表", value: "22" },
        { name: "西门子", value: "21" },
        { name: "南通远东", value: "20" },
        { name: "海德汉光学", value: "32" },
        { name: "五金机械", value: "35" },
        { name: "伸格公司", value: "20" },
        { name: "西门子", value: "22" },
        { name: "上海跃进", value: "18" },
        { name: "日本康太克", value: "17" },
        { name: "ABB", value: "15" },
        { name: "太安", value: "14" },
        { name: "东旗", value: "13" },
        { name: "西安西玛电机", value: "12" },
        { name: "瑞士TESA", value: "11" },
        { name: "迪博自控技术", value: "10" },
        { name: "仪和贸易", value: "9" },
        { name: "光明仪表", value: "8" },
        { name: "西门子", value: "7 " },
        { name: "南通远东", value: "6" },
        { name: "海德汉光学", value: "5" },
        { name: "五金机械", value: "4" },
        { name: "伸格公司", value: "3" },
        { name: "西门子", value: "2" },
        { name: "上海跃进", value: "1" },
      ], [
        { name: "日本康太克", value: "100" },
        { name: "ABB", value: "99" },
        { name: "太安", value: "98" },
        { name: "东旗", value: "97" },
        { name: "西安西玛电机", value: "96" },
        { name: "瑞士TESA", value: "95" },
        { name: "迪博自控技术", value: "80" },
        { name: "仪和贸易", value: "78" },
        { name: "光明仪表", value: "75" },
        { name: "西门子", value: "74" },
        { name: "南通远东", value: "65" },
        { name: "海德汉光学", value: "62" },
        { name: "五金机械", value: "61" },
        { name: "伸格公司", value: "56" },
        { name: "西门子", value: "54" },
        { name: "上海跃进", value: "40" },
        { name: "日本康太克", value: "39" },
        { name: "ABB", value: "36" },
        { name: "太安", value: "35" },
        { name: "东旗", value: "34" },
        { name: "西安西玛电机", value: "33" },
        { name: "瑞士TESA", value: "32" },
        { name: "迪博自控技术", value: "26" },
        { name: "仪和贸易", value: "24" },
        { name: "光明仪表", value: "22" },
        { name: "西门子", value: "21" },
        { name: "南通远东", value: "20" },
        { name: "海德汉光学", value: "32" },
        { name: "五金机械", value: "35" },
        { name: "伸格公司", value: "20" },
        { name: "西门子", value: "22" },
        { name: "上海跃进", value: "18" },
        { name: "日本康太克", value: "17" },
        { name: "ABB", value: "15" },
        { name: "太安", value: "14" },
        { name: "东旗", value: "13" },
        { name: "西安西玛电机", value: "12" },
        { name: "瑞士TESA", value: "11" },
        { name: "迪博自控技术", value: "10" },
        { name: "仪和贸易", value: "9" },
        { name: "光明仪表", value: "8" },
        { name: "西门子", value: "7 " },
        { name: "南通远东", value: "6" },
        { name: "海德汉光学", value: "5" },
        { name: "五金机械", value: "4" },
        { name: "伸格公司", value: "3" },
        { name: "西门子", value: "2" },
        { name: "上海跃进", value: "1" },
      ]],
      lastData: [
         { name: "日本康太克", value: "100" },
        { name: "ABB", value: "99" },
        { name: "太安", value: "98" },
        { name: "东旗", value: "97" },
        { name: "西安西玛电机", value: "96" },
        { name: "瑞士TESA", value: "95" },
        { name: "迪博自控技术", value: "80" },
        { name: "仪和贸易", value: "78" },
        { name: "光明仪表", value: "75" },
        { name: "西门子", value: "74" },
        { name: "南通远东", value: "65" },
        { name: "海德汉光学", value: "62" },
        { name: "五金机械", value: "61" },
        { name: "伸格公司", value: "56" },
        { name: "西门子", value: "54" },
        { name: "上海跃进", value: "40" },
         { name: "日本康太克", value: "17" },
        { name: "ABB", value: "15" },
        { name: "太安", value: "14" },
        { name: "东旗", value: "13" },
        { name: "西安西玛电机", value: "12" },
        { name: "瑞士TESA", value: "11" },
        { name: "迪博自控技术", value: "10" },
        { name: "仪和贸易", value: "0.9" },
        { name: "光明仪表", value: "0.8" },
        { name: "西门子", value: "0.7 " },
        { name: "南通远东", value: "0.6" },
        { name: "海德汉光学", value: "0.5" },
        { name: "五金机械", value: "0.4" },
        { name: "伸格公司", value: "0.3" },
        { name: "西门子", value: "0.2" },
        { name: "上海跃进", value: "0.1" }
        ,
        { name: "日本康太克", value: "17" },
        { name: "ABB", value: "15" },
        { name: "太安", value: "14" },
        { name: "东旗", value: "13" },
        { name: "西安西玛电机", value: "12" },
        { name: "瑞士TESA", value: "11" },
        { name: "迪博自控技术", value: "10" },
        { name: "仪和贸易", value: "0.9" },
        { name: "光明仪表", value: "0.8" },
        { name: "西门子", value: "0.7 " },
        { name: "南通远东", value: "0.6" },
        { name: "海德汉光学", value: "0.5" },
        { name: "五金机械", value: "0.4" },
        { name: "伸格公司", value: "0.3" },
        { name: "西门子", value: "0.2" },
        { name: "上海跃进", value: "0.1" },
           { name: "仪和贸易", value: "0.9" },
        { name: "光明仪表", value: "0.8" },
        { name: "西门子", value: "0.7 " },
        { name: "南通远东", value: "0.6" },
        { name: "海德汉光学", value: "0.5" },
        { name: "五金机械", value: "0.4" },
        { name: "伸格公司", value: "0.3" },
        { name: "西门子", value: "0.2" },
        { name: "上海跃进", value: "0.1" },
      ]
    }
  },
  computed: {
    optionSingleHeight() {
      return {
        //                       （什么都不设置默认的）
        // singleHeight: 65  ,   //（带停顿的）
        // waitTime:10        // （停顿时间）
        // direction: 0          （从上往下的）
        // direction:2           （左右的）
        //step:1                 （调整速度的）0
        // hoverStop:false        (鼠标停留停止 离开继续运行（反之则停止）)
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 4, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: false, // 是否开启鼠标悬停stop
        direction: 1, // 0向下 1向上 2向左 3向右
        // openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 30, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        waitTime: 4000 // 单步运动停止的时间(默认值1000ms)
      }
    }
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
          y: "bottom",
          show: true,
          textStyle: {
            color: "#fff",
            fontSize: '10'
          },
          show:false,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 0,
          bottom: 10,
          width: 290,
          height:80
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
            fontSize: 8
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
            fontSize: 8
          }
        },
        series: [
          {
            name: "费用增长环比指数",
            type: "bar",
            center:["50%","70%"],
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
        grid: {
          top: 0,
          bottom: 0,
          right: 0,
          left: 0
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
            radius: [3, 28],
            label: {
              fontSize: 8
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
            ],
            labelLine: {
              length: 3,
              length2: 3
            }

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
          show: false,
          x: "right",
          y: "bottom",
          orient: "horizontal",
          data: ["原材料", "外购零件", "工具量具", "工装火具", "办公耗材"],
          textStyle: {
            color: "#fff",
            fontSize: 10
          },
          // padding: [100, 90, 0, 0]
        },
        grid: {
          left: 0,
          right: "10%",
          bottom: "0%",
          height: 80,
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
              fontSize: 10
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            // min: 0,
            // max: 300,
            interval: 50,
            axisLine: {
              lineStyle: {
                color: "#ddd",
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 10
            }
          }
        ],
        series: [
          {
            name: "原材料",
            type: "bar",
            stack: "采购金额",
            // barGap: '10%',
            // barCategoryGap:40,
            barMinHeight: 12,
            data: [110, 105, 100, 95],
           
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
            barMinHeight: 15,
            data: [20, 25, 30, 20]
          },
          {
            name: "工装火具",
            type: "bar",
            stack: "采购金额",
            barMinHeight: 5,
            data: [30, 40, 45, 30],
          
          },
          {
            name: "办公耗材",
            type: "bar",
            stack: "采购金额",
            barMinHeight: 10,
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
            fontSize: 6
          },
          itemWidth:6,
          itemHeight:6,
          padding:[5,0,0,0],
          itemGap:-5
        },
        grid: {
          left: "1%",
          right: "4%",
          bottom: "0%",
          width: 400,
          height: 125,
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
            fontSize: 6
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
            fontSize: 8
          }
        },
        series: [
          {
            name: "直流电机",
            type: "line",
            data: [5, 4.5, 6, 5.8],
           
          },
          {
            name: "交流电机",
            type: "line",
            data: [0.3, 0.5, 0.6, 0.55]
          },
          {
            name: "动平衡仪",
            type: "line",
            data: [2.6, 2.8, 2.7, 3]
          },
          {
            name: "粗糙度仪",
            type: "line",
            data: [1.8, 2.8, 2.5, 3]
          },
          {
            name: "涡流探伤仪",
            type: "line",
            data: [10, 13, 12, 15]
          },

          {
            name: "接触器",
            type: "line",
            data: [0.5, 0.48, 0.55, 0.58]
          },
          {
            name: "滚珠丝杆",
            type: "line",
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
            radius: "85%",
            data: data,
            backgroundStyle: {
              borderWidth: 3,
               
              borderColor: "#32C0E3",
              color: "rgb(255,0,255,0.01)",
              fontWeight:'lighter',
               radius: "60%",
            },
              outline: {
                        //show: true , //是否显示轮廓 布尔值
                        borderDistance: 6, //外部轮廓与图表的距离 数字
                        itemStyle:{
                            borderWidth:3,  //边框的宽度                           
                        }
                    },
            label: {
              normal: {
                formatter: (value * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize:6,
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
            radius: "85%",
            data: data,
             outline: {
                        //show: true , //是否显示轮廓 布尔值
                        borderDistance: 6, //外部轮廓与图表的距离 数字
                        itemStyle:{
                            borderWidth:3,  //边框的宽度                           
                        }
                    },
            backgroundStyle: {
              borderWidth: 3,
              borderColor: "#32C0E3",
              color: "rgb(255,0,255,0.01)",
              fontWeight:'lighter',
               radius: "60%",
            },
            label: {
              normal: {
                formatter: (value * 100).toFixed(2) + "%",
                textStyle: {
                  fontSize: 6
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
            sizeRange: [10, 20],
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
                  let colorIndex = Math.ceil(Math.random() * 5);
                  return colorArr[colorIndex];
                }
              },
              emphasis: {
                shadowBlur: 10,
                shadowColor: "#333"
              }
            },
            data: this.lastData
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
            fontSize: 8
          },
          itemWidth:8,
          itemHeight:9,
          padding:[5,0,0,0],
        },

        toolbox: {
          show: false,
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left:0,
          top:'25%',
          right:'4%',
          width: 370,
          height:130,
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
              fontSize: 8
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              formatter: "{value} %"
            },
            min: "0",
            max: "300",
            axisLine: {
              lineStyle: {
                color: "#fff",
                fontSize: "8px"
              }
            },
            axisLabel: {
              color: "#ddd",
              fontSize: 8
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
            fontSize: 10,
            fontFamily: "Microsoft YaHei",
            fontWeight: "normal"
          },
          padding: [10, 0, 0, 0]
        },
        legend: {
          show: false,
          x: "left",
          y: "bottom",
          data: ["2015年", "2016年", "2017年", "2018年"],
          orient: 'horizontal',
          textStyle: {
            color: "#ddd",
            fontSize: 10
          },
          padding: [30, 0, 0, 0]
        },
        grid:{
          top:'middle'
        },
        series: [
          {
            name: "Line 1",
            type: "pie",
            clockWise: false,
            center:['50%','60%'],
            radius: [10, 20],
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
            center:['50%','60%'],
            radius: [20, 30],
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
            center:['50%','60%'],
            radius: [30, 40],
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
            center:['50%','60%'],
            radius: [40, 50],
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
            lineHeight: 10,
            fontWeight: "lighter",
            fontSize: '6',
            color: '#fff'
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
            fontSize: 8
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
                formatter: "\n{b}: {c} (台)",
                fontSize: "6"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "8",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {

              normal: {
                show: true,
                length: 0,
                length2: 0,
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
            lineHeight: 10,
            fontSize: '6',
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
            fontSize: 10
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
                fontSize: "6"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "8",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                show: true,
                length: 0,
                length2: 0,
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
            lineHeight: 10,
            fontSize: "6",
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
            fontSize: 6
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
                fontSize: "6"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "8",
                  fontWeight: "bold"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                show: true,
                length: 0,
                length2: 0,
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
            lineHeight: 10,
            fontSize: "6",
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
            fontSize: 6
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
                fontSize: "6"
              },

              emphasis: {
                show: true,
                textStyle: {
                  fontSize: "8",
                  fontWeight: "light"
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                show: true,
                length: 0,
                length2: 0,
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
            fontSize: 8
          },
          padding: [10, 0, 0, 0],
          itemWidth:8,
          itemHeight:8,
        },
        grid: {
          top: "20%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          height:110,
          width: 375,
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
            color: "#fff",
            fontSize: 8
          },
          axisLine: {
            lineStyle: {
              color: "#ddd",
              fontSize: 8
            }
          },
          axisLabel: {
            color: "#ddd",
            fontSize: 8
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
            fontSize: 8
          }
        },
        series: [
          {
            name: "订单签单率",
            type: "line",
            data: [95, 95, 80, 95, 100, 89, 90],
          },
          {
            name: "销售产品完成率",
            type: "line",
            data: [85, 80, 91, 95, 120, 80, 64],
          },
          {
            name: "销售回款回笼率",
            type: "line",
            data: [65, 70, 55, 60, 75, 91, 90],
          },
          {
            name: "销售收入增加率",
            type: "line",
            data: [15, 10, 20, 30, 15, 7, 6],
          }
        ]
      });
    }
  },
  mounted: function() {
    this.mainGongyingEchartF();
    let main = this.mainData;
    let that = this;
    setInterval(function() {
      let random = parseInt(Math.random() * 3);
      that.lastData = main[random]
      that.mainGongyingEchartF();
    }, 10000);
    this.caigouEchartF();
    this.caigouKindsEchartF();
    this.overCaigouKindsEchartF();
    this.importantCaigouEchartF();
    this.commitGoodsEchartF();
    this.commitGoodsTimeEchartF();
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
  /* width: 3745px; */
  width: 936.25px;
  display: flex;
  justify-content: space-between;
}

.left-box,
.right-box {
  /* width: 1857px;
  height: 2839px; */
  width: 464.25px;
  height: 709.75px;
  position: relative;
  color: #ffffff;
  background-image: url("../assets/bg2.png");
  background-size: 100% 100%;
  box-sizing: border-box;
  /* padding: 180px 100px 0; */
  padding: 45px 25px 0;
  overflow: hidden;
}

.left-title {
  position: absolute;
  position: absolute;
  top: 24px;
  left: 215px;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
}

.caigou-part {
  width: 100%;
  /* padding: 0 0 50px 0; */
  padding: 0 0 12.5px 0;
}

.caigou-part>div:nth-of-type(2) {
  display: flex;
  width: 100%;
  height: 80%;
  justify-content: flex-start;
}

.caigou-part>div:nth-of-type(2)>div:nth-of-type(1) {
  width: 40%;
  height: 80%;
}

.caigou-part>div:nth-of-type(2)>div:nth-of-type(2) {
  width: 60%;
  height: 80%;
}

.caigou-part2,
.caigou-part3,
.caigou-part4 {
  width: 100%;
  /* padding: 0 0 40px 0; */
  padding: 0 0 10px 0;
}

.sub-title {
  /* font-size: 36px; */
  font-size: 9px;
  color: #fefefe;
  /* padding-bottom: 10px; */
  padding-bottom: 2.5px;
}

.sub-title>img {
  /* margin-right: 20px; */
  width: 10.25px;
  height: 7.75px;
  margin-right: 5px;
}

#caigouEchart {
  background: transparent;
  /* width: 1717px;
  height: 261px; */
  width: 429.25px;
  height: 65x;
}


.total-price {
  /* width: 382.3px !important;
  height: 300px !important; */
  width: 95.57px !important;
  height: 75px !important;
  border-radius: 50%;
  background: url("./../assets/2.svg");
  /* padding: 20px;
   */
  padding: 5x;

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
  /* width: 220px !important;
  height: 200px !important; */
  width: 55px !important;
  height: 50px !important;
  position: absolute;
  border-radius: 50%;
  /* top: 350px;
  left: 160px; */
  top: 87.5px;
  left: 35px;
  text-align: center;
  line-height: 50px;
  background: url("./../assets/bgad.png");
}

.font-part img {
  width: 90%;
  /* margin-left: 10px; */
  margin-left: 2.5px;
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
  /* padding-top: 50px; */
  /* padding-top: 12.5px; */
}

.transverseLine img {
  width: 100%;
}







/* 竖线 */

.longLine {
  text-align: center;
  /* height: 500px; */
  height: 125px
}

.longLine img {
  width: 2px;
  height: 100%;
}







/* 采购KPI的第二部分 */

.part2-box {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.part2-box>div:nth-of-type(1),
.caigou-part4>div:nth-of-type(1) {
  width: 42%;
}

.part2-box>div:nth-of-type(1) {
  display: flex;
  justify-content: space-between;
}

.part2-box>div:nth-of-type(1)>div:nth-of-type(1) {
  width: 80%;
}

.part2-box>div:nth-of-type(1)>div:nth-of-type(2) {
  width: 20%;
}

#caigouKindsEchart {
  /* height: 400px; */
  height: 100px;
}

.part2-box>div:nth-of-type(2),
.caigou-part4>div:nth-of-type(2) {
  width: 58%;
}

#overCaigouKindsEchart {
  /* height: 423px; */
  height: 105.75px;
  /*  */
}







/* 重要物资历史采购价格趋势部分 */

#importantCaigouEchart {
  /* height: 500px; */
  height:150px;
}







/* 交货一次检验合格率  准时交货率 主要供应商*/

.caigou-part4 {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.caigou-part4 .longLine {
  /* height: 730px !important; */
  height: 160px !important;
}

.caigou-part4 .longLine img {
  width: 2px;
  height: 100%;
}

.commit-goods {
  width: 100%;
  display: flex;
  height: 100%;
  justify-content: space-between;
}

.commit-goods>div:nth-of-type(1) {
  width: 80%;
}

.commit-goods>div:nth-of-type(2) {
  width: 20%;
}

#commitGoodsEchart {
  /* height: 300px; */
  height: 60px
}

#commitGoodsTimeEchart {
  /* height: 300px; */
  height: 60px
}

#mainGongyingEchart {
  /* height: 700px; */
  height: 140px;
}







/* 右边部分 */

.right-part1,
.right-part2,
.right-part3,
.right-part4 {
  /* padding-bottom: 50px; */
  padding-bottom: 8px;
}

.right-part1-main {
  display: flex;
  justify-content: flex-start;
}

.right-part1-main>div {
  /* width: 526px;
  height: 93px; */
  width: 131.5px;
  height: 23.25px;
  line-height: 23.25px;
  /* margin-top: 20px; */
  margin-top: 5px;
  background: rgba(109, 156, 235, 0.25);
  border: 1px solid rgba(210, 228, 255, 0.4);
  border-radius: 6px;
}

.right-part1-main>div:nth-of-type(2) {
  /* margin-left: 146px; */
  margin-left: 36.5px;
  opacity: 1;
}

.right-part1-main>div>span:nth-of-type(1) {
  font-size: 30px;
  /* margin-left: 40px; */
  margin-left: 10px;
  color: rgba(30, 198, 239, 1);
}

.right-part1-main>div>span:nth-of-type(2) {
  display: inline-block;
  /* width: 42px;
  height: 42px; */
  width: 10.5px;
  height: 10.5px;
  /* line-height: 42px; */
  line-height: 10.5x;
  /*  */
  text-align: center;
  border-radius: 50%;
  color: #fe8346;
  /* margin-left: 100px; */
  margin-left: 25px;

  font-size: 30px;
  border: 3px solid #fe8346;
  opacity: 1;
}

.right-part1-main>div>span:nth-of-type(3) {
  font-size: 40px;
  font-family: LetsgoDigital-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  /* margin-left: 10px;
  margin-right: 10px; */
  margin-left: 2.5px;
  margin-right: 2.5px;
  opacity: 1;
}

.right-part1-main>div>span:nth-of-type(4) {
  font-size: 24px;
  font-family: LetsgoDigital-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  opacity: 1;
}

#rightEchart1 {
  /* height: 600px; */
  height: 170px;
}







/* 产品数据 */

.right-part3-main {
  display: flex;
  justify-content: space-between;
  height: 150px;
}

.right-part3-main>div:nth-of-type(1) {
  width: 25%;
  height: 100%;
}

.right-part3-main>div:nth-of-type(2) {
  width: 75%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
}

.right-part3-main>div:nth-of-type(2)>div {
  width: 50%;
  height: 50%;
}

#rightLastEchart {
  height: 170px;
}


* {
  margin: 0;
  padding: 0;
}

.seamless-warp {
  height:30px;
  overflow: hidden;
  margin-top: 7.5px;
  margin-left: 22.5px;
}

.table-container {
  width: 302.5px;
  height: 25px;
  line-height: 25px;
  margin: 2.5px 0;
  background: rgba(6, 49, 88, 1);
  border: 1px solid rgba(15, 110, 169, 1);
  position: relative;
  font-weight: lighter;
  padding-left: 11.75px;
}


.table-container>img:nth-of-type(1) {
  height: 25px;
  position: absolute;
  top: 0;
  left: 0;
}

.table-container>img:nth-of-type(2) {
  height: 25px;
  position: absolute;
  top: 0;
  right: 0;
}

.table-container span {
  display: inline-block;
   height: 100%;
   vertical-align: middle;
}

.table-container>span:nth-of-type(1),
.table-container>span:nth-of-type(2),
.table-container>span:nth-of-type(5) {
  font-family: 'SourceHanSansCN-Regular';
  font-size: 8px;
}

.table-container>span:nth-of-type(2),
.table-container>span:nth-of-type(5) {
  padding-left: 10px;
}



/* .table-container > span:nth-of-type(5) {
   padding-left:130px;
} */

.table-container>span:nth-of-type(3),
.table-container>span:nth-of-type(4),
.table-container>span:nth-of-type(6),
.table-container>span:nth-of-type(7) {
  font-family: 'SourceHanSansCN-Regular';
  font-size: 10px;
  color: #09F8CE;
}

.table-container>span:nth-of-type(3),
.table-container>span:nth-of-type(6) {
  /* padding-left: 60px; */
  padding-left: 10px;
}

.table-container>span:nth-of-type(4),
.table-container>span:nth-of-type(7) {
  font-size: 6px;
  /* padding-left: 5px; */
  padding-left: 1.25px;
}
</style>
