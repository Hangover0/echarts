<template>
  <div class="echart-container">
    <div class="left-box">
      <!-- 采购KPI部分 -->
      <div class="left-title">采购KPI</div>
      <!--采购费用分析  -->
      <div class="caigou-part">
        <div class="sub-title">
          <img class="arrows" src="../assets/标题样式.png" alt>采购费用分析
        </div>
        <div>
          <div class='total-price'>
            <div class='sub-total'>
              
            </div>
          </div>
          <div id="caigouEchart">
          </div>

        </div>
        <div class='transverseLine'>
          <img src="../assets/横线.svg" alt>
        </div>
      </div>

      <div class='caigou-part2'>
        <div class='part2-box'>
          <!-- 各类物资采购金额占比 -->
          <div>
            <div class='caigou-kinds'>
              <div class="sub-title">
                <img class="arrows" src="../assets/标题样式.png" alt>各类物资采购金额占比
              </div>
              <div id='caigouKindsEchart'></div>
            </div>
            <!-- 竖线 -->
            <div class="longLine">
              <img src="../assets/竖线.svg" alt>
            </div>
          </div>
          <!--历年各类物资采购金额占比  -->
          <div>
            <div class="sub-title">
              <img class="arrows" src="../assets/标题样式.png" alt>历年各类物资采购金额占比
            </div>
            <div id='overCaigouKindsEchart'></div>
          </div>
        </div>

        <!-- 横线 -->
        <div class='transverseLine'>
          <img src="../assets/横线.svg" alt>
        </div>
      </div>

      <div class="caigou-part3">
        <div class="sub-title">
          <img class="arrows" src="../assets/标题样式.png" alt>重要物资历史采购价格趋势
        </div>
        <div id='importantCaigouEchart'></div>
        <div class='transverseLine'>
          <img src="../assets/横线.svg" alt>
        </div>
      </div>

      <div class="caigou-part4">
        <div class='commit-goods'>
          <div>
            <div>
              <div class="sub-title">
                <img class="arrows" src="../assets/标题样式.png" alt>交货一次检验合格率
              </div>
              <div id="commitGoodsEchart">
              </div>

            </div>
            <div>
              <div class="sub-title">
                <img class="arrows" src="../assets/标题样式.png" alt>准时交货率
              </div>
              <div id="commitGoodsTimeEchart"></div>
            </div>
          </div>
          <div class="longLine">
            <img src="../assets/竖线.svg" alt>
          </div>

        </div>
        <div class="main-gongying">
          <div class="sub-title">
            <img class="arrows" src="../assets/标题样式.png" alt>主要供应商
          </div>
          <div id="mainGongyingEchart">
          </div>
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
            <img class="arrows" src="../assets/标题样式.png" alt>采购费用分析
          </div>
          <div class='right-part1-main'>
            <div>
              <span>合同总额</span>
              <span>￥</span>
              <span>1.65</span>
              <span>亿元 </span>
            </div>
            <div>
              <span>合同总额</span>
              <span>￥</span>
              <span>1.65</span>
              <span>亿元 </span>
            </div>
          </div>
        </div>
        <!--客户增长  -->
        <div class="right-part2">
          <div class="sub-title">
            <img class="arrows" src="../assets/标题样式.png" alt>客户增长
          </div>
          <div id='rightEchart1'></div>
          <div class='transverseLine'>
            <img src="../assets/横线.svg" alt>
          </div>
        </div>

        <!--产品数据  -->
        <div class="right-part3">
          <div class="sub-title">
            <img class="arrows" src="../assets/标题样式.png" alt>产品数据
          </div>
          <div class='right-part3-main'>
            <div id="product1">
            </div>
            <div>
              <div id="product2"></div>
              <div id="product3"></div>
              <div id="product4"></div>
              <div id="product5"></div>
            </div>
          </div>
          <div class='transverseLine'>
            <img src="../assets/横线.svg" alt>
          </div>
        </div>

        <div class="right-part4">
          <div class="sub-title">
            <img class="arrows" src="../assets/标题样式.png" alt>订单签单率
          </div>
          <div id='rightLastEchart'></div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import echarts from "echarts";
import liquidFill from 'echarts-liquidfill'
import wordCloud from 'echarts-wordcloud'
export default {
  name: 'echartsR',
  data() {
    return {
      caigouEchart: "",
      caigouKindsEchart: '',
      overCaigouKindsEchart: '',
      importantCaigouEchart: '',
      commitGoodsEchart: '',
      commitGoodsTimeEchart: '',
      mainGongyingEchart: '',
      rightEchart1: '',
      product1: '',
      product2: '',
      product3: '',
      product4: '',
      product5: '',
      rightLastEchart: '',
    }
  },
  methods: {
    caigouEchartF() {
      this.caigouEchart = echarts.init(
        document.getElementById("caigouEchart"),
        "mythemes"
      );
      this.caigouEchart.setOption({
        title: {
        },
        legend: {
          y: 'bottom',
          show: true,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          top: 80,
          bottom: 30,
          height: 200
        },
        xAxis: {
          type: 'value',
          position: 'top',
          splitLine: { lineStyle: { type: 'dashed' } },
          min: -0.1,
          max: 0.25
        },
        yAxis: {
          type: 'category',
          axisLine: { show: false },
          axisLabel: { show: false },
          axisTick: { show: false },
          splitLine: { show: false },
          data: ['2017', '2016', '2015']
        },
        series: [
          {
            name: '费用增长环比指数',
            type: 'bar',
            label: {
              normal: {
                show: true,
                formatter: '{b}'
              }
            },
            data: [
              0.12,
              0.25,
              -0.1
            ]
          }
        ]
      })
    },
    caigouKindsEchartF() {
      this.caigouKindsEchart = echarts.init(
        document.getElementById("caigouKindsEchart"),
        "mythemes"
      );
      this.caigouKindsEchart.setOption({
        title: {

        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {d}%"
        },
        legend: {
          x: 'left',
          y: 'bottom',
          orient: 'vertical',
          data: ['原材料', '外购零件', '工具量具', '工装火具', '办公耗材', '劳保清洁品']
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            magicType: {
              show: true,
              type: ['pie', 'funnel']
            },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        calculable: true,
        series: [
          {
            name: '采购金额占比',
            type: 'pie',
            radius: [30, 160],
            center: ['50%', '50%'],
            roseType: 'area',
            data: [
              { value: 35, name: '原材料' },
              { value: 15, name: '外购零件' },
              { value: 10, name: '工具量具' },
              { value: 5, name: '工装火具' },
              { value: 45, name: '办公耗材' },
              { value: 2, name: '劳保清洁品' },
            ]
          }
        ]
      })
    },
    overCaigouKindsEchartF() {
      this.overCaigouKindsEchart = echarts.init(
        document.getElementById("overCaigouKindsEchart"),
        "mythemes"
      );
      this.overCaigouKindsEchart.setOption({
        title: {
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          x: 'center',
          y: 'bottom',
          data: ['原材料', '外购零件', '工具量具', '工装火具', '办公耗材'],
        },
        grid: {
          left: '32%',
          right: '10%',
          bottom: '8%',
          width: 500,
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['2015', '2016', '2017', '2018']
          }
        ],
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 300,
            interval: 50
          }
        ],
        series: [

          {
            name: '原材料',
            type: 'bar',
            stack: '采购金额',
            barWidth: 60,
            data: [110, 105, 100, 95]
          },
          {
            name: '外购零件',
            type: 'bar',
            stack: '采购金额',
            data: [60, 75, 85, 105]
          },
          {
            name: '工具量具',
            type: 'bar',
            stack: '采购金额',
            data: [20, 25, 30, 20]
          },
          {
            name: '工装火具',
            type: 'bar',
            stack: '采购金额',
            data: [30, 40, 45, 30]
          },
          {
            name: '办公耗材',
            type: 'bar',
            stack: '采购金额',
            data: [22, 25, 28, 18]
          },


        ]
      })
    },
    importantCaigouEchartF() {
      this.importantCaigouEchart = echarts.init(
        document.getElementById("importantCaigouEchart"),
        "mythemes"
      );
      this.importantCaigouEchart.setOption({
        title: {
        },
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          y: 'bottom',
          data: ['直流电机', '交流电机', '动平衡仪', '粗糙度仪', '涡流探伤仪', '接触器', '滚珠丝杆']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '8%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          data: ['2015', '2016', '2017', '2018']
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 20,
          interval: 2,
          axisLabel: {
            formatter: '{value} 万元'
          }
        },
        series: [
          {
            name: '直流电机',
            type: 'line',
            data: [5, 4.5, 6, 5.8],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
          },
          {
            name: '交流电机',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [0.3, 0.5, 0.6, 0.55]
          },
          {
            name: '动平衡仪',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [2.6, 2.8, 2.7, 3]
          },
          {
            name: '粗糙度仪',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [1.8, 2.8, 2.5, 3]
          },
          {
            name: '涡流探伤仪',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [10, 13, 12, 15]
          },

          {
            name: '接触器',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [0.5, 0.48, 0.55, 0.58]
          },
          {
            name: '滚珠丝杆',
            type: 'line',
            markPoint: {
              data: [
                { type: 'max', name: '最大值' },
                { type: 'min', name: '最小值' }
              ]
            },
            data: [1.2, 1.5, 1.4, 1.7]
          },

        ]
      })
    },
    commitGoodsEchartF() {
      this.commitGoodsEchart = echarts.init(
        document.getElementById("commitGoodsEchart"),
        "mythemes"
      );
      var value = 0.55
      var data = []
      data.push(value)
      data.push(value)
      data.push(value)
      data.push(value)
      data.push(value)
      this.commitGoodsEchart.setOption({
        // backgroundColor: '#1b2735',
        title: {
        },
        series: [{
          type: 'liquidFill',
          radius: '80%',
          data: data,
          backgroundStyle: {
            borderWidth: 3,
            borderColor: '#32C0E3',
            color: 'rgb(255,0,255,0.01)'
          },
          label: {
            normal: {
              formatter: (value * 100).toFixed(2) + '%',
              textStyle: {
                fontSize: 50
              }
            }
          }
        }]
      })
    },
    commitGoodsTimeEchartF() {
      this.commitGoodsTimeEchart = echarts.init(
        document.getElementById("commitGoodsTimeEchart"),
        "mythemes"
      );
      var value = 0.55
      var data = []
      data.push(value)
      data.push(value)
      data.push(value)
      data.push(value)
      data.push(value)
      this.commitGoodsTimeEchart.setOption({
        // backgroundColor: '#1b2735',
        title: {

        },
        series: [{
          type: 'liquidFill',
          radius: '80%',
          data: data,
          backgroundStyle: {
            borderWidth: 3,
            borderColor: '#32C0E3',
            color: 'rgb(255,0,255,0.01)'
          },
          label: {
            normal: {
              formatter: (value * 100).toFixed(2) + '%',
              textStyle: {
                fontSize: 50
              }
            }
          }
        }]
      })
    },
    mainGongyingEchartF() {
      this.mainGongyingEchart = echarts.init(
        document.getElementById("mainGongyingEchart"),
        "mythemes"
      );
      var worldCloudoption = {
        title: {
        },
        tooltip: {
          show: true
        },
        series: [{
          name: '研发部邮件主题分析',
          type: 'wordCloud',
          sizeRange: [6, 66],
          rotationRange: [-45, 90],
          textPadding: 0,
          autoSize: {
            enable: true,
            minSize: 6
          },
          textStyle: {
            normal: {
              color: function() {
                let colorArr = ['#3fb1e3', '#6be6c1', '#e3b67f', '#aaa0e6', '#c4ebad', '#96dee8'];
                let colorIndex = Math.ceil(Math.random() * 3);
                return colorArr[colorIndex];
              }
            },
            emphasis: {
              shadowBlur: 10,
              shadowColor: '#333'
            }
          },
          data: [{
            name: "Jayfee",
            value: 666
          }, {
            name: "Nancy",
            value: 520
          }]
        }]
      };

      var JosnList = [];

      JosnList.push({ name: '日本康太克', value: '1' }, { name: 'ABB', value: '2' }, { name: '太安', value: '3' }, { name: '东旗', value: '4' },
        { name: '西安西玛电机', value: '5' }, { name: '瑞士TESA', value: '6' }, { name: '迪博自控技术', value: '7' }, { name: '仪和贸易', value: '8' }, { name: '光明仪表', value: '9' },
        { name: '西门子', value: '10' }, { name: '南通远东', value: '11' }, { name: '海德汉光学', value: '12' }, { name: '五金机械', value: '13' }, { name: '伸格公司', value: '14' },
        { name: '西门子', value: '15' }, { name: '上海跃进', value: '16' }, { name: '西门子', value: '10' }, { name: '南通远东', value: '11' }, { name: '海德汉光学', value: '12' }, { name: '五金机械', value: '13' }, { name: '伸格公司', value: '14' },
        { name: '西门子', value: '15' }, { name: '上海跃进', value: '16' }, { name: '日本康太克', value: '1' }, { name: 'ABB', value: '2' }, { name: '太安', value: '3' }, { name: '东旗', value: '4' },
        { name: '西安西玛电机', value: '5' }, { name: '瑞士TESA', value: '6' }, { name: '迪博自控技术', value: '7' }, { name: '仪和贸易', value: '8' }, { name: '光明仪表', value: '9' },
        { name: '西门子', value: '10' }, { name: '南通远东', value: '11' }, { name: '海德汉光学', value: '12' }, { name: '五金机械', value: '13' }, { name: '伸格公司', value: '14' },
        { name: '西门子', value: '15' }, { name: '上海跃进', value: '16' }, { name: '西门子', value: '10' }, { name: '南通远东', value: '11' }, { name: '海德汉光学', value: '12' }, { name: '五金机械', value: '13' }, { name: '伸格公司', value: '14' },
        { name: '西门子', value: '15' }, { name: '上海跃进', value: '16' });
      worldCloudoption.series[0].data = JosnList;

      this.mainGongyingEchart.setOption(worldCloudoption);

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
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            },
          }
        },
        legend: {
          data: ['生产计划大纲按时生产完成率', '同期客户增长率', '同期最终客户占比率'],
          y: 'bottom'
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['2014年', '2015年', '2016年', '2017年', '2018年'],
          }
        ],
        yAxis: [
          {
            name: '比率',
            type: 'value',
            axisLabel: {
              formatter: '{value} %'
            },
            min: '0',
            max: '300'
          }
        ],
        series: [
          {
            name: '生产计划大纲按时生产完成率',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [95, 90, 200, 97, 150],
            markPoint: {
              data: [
                {
                  name: '最大值',
                  type: 'max'
                },
                { name: '最小值', type: 'min' }
              ]
            }
          },
          {
            name: '同期客户增长率',
            stack: '总量',
            type: 'line',
            areaStyle: {},
            data: [60, 80, 50, 30, 10]
          },
          {
            name: '同期最终客户占比率',
            type: 'line',
            stack: '总量',
            label: {
              normal: {
                show: true,
                position: 'top'
              }
            },
            areaStyle: { normal: {} },
            data: [30, 20, 50, 70, 90]
          }
        ]
      })
    },
    productF1() {
      this.product1 = echarts.init(
        document.getElementById("product1"),
        "mythemes"
      );
      this.product1.setOption({
        title: {
          text: '销售计划完成率',
          x: 'center',
          y: 'bottom'
        },
        tooltip: {
          show: true,

        },
        angleAxis: {
          name: '完成率',
          min: 0,
          max: 220,
          interval: 50,
          show: false,
          clockwise: false,
          startAngle: 90,
        },
        radiusAxis: {
          type: 'category',
          data: ['2015年', '2016年', '2017年', '2018年'],
          z: 10,
          show: false
        },
        polar: {
        },
        series: [{
          type: 'bar',
          data: [
            {
              value: 93,
              name: '2015年销售计划完成率',
              itemStyle: {

              },
            },
            {
              value: 197,
              name: '2016年销售计划完成率'
            },
            {
              value: 100,
              name: '2017年销售计划完成率'
            },
            {
              value: 107,
              name: '2018年销售计划完成率'
            },],
          coordinateSystem: 'polar',
          name: '销售计划完成率',
          label: {
            normal: {
              show: true,

            },
          }
        },]
      })


    },
    productF2() {
      this.product2 = echarts.init(
        document.getElementById("product2"),
        "mythemes"
      );
      this.product2.setOption({
        title: {
          text: '轧辊磨床累计交货数量',
          show: true,
          x: 'center',
          y: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ['2015年', '2016年', '2017年', '2018年']
        },
        series: [
          {
            name: '2015年',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: "{b}: {c} (台)"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 153, name: '2015年' },
              { value: 180, name: '2016年' },
              { value: 166, name: '2017年' },
              { value: 178, name: '2018年', selected: true },
            ]
          }
        ]
      })
    },
    productF3() {
      this.product3 = echarts.init(
        document.getElementById("product3"),
        "mythemes"
      );
      this.product3.setOption({
        title: {
          text: '轧辊磨床客户订购累计台数',
          show: true,
          x: 'center',
          y: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ['2015年', '2016年', '2017年', '2018年']
        },
        series: [
          {
            name: '2015年',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: "{b}: {c} (台)"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 153, name: '2015年' },
              { value: 180, name: '2016年' },
              { value: 166, name: '2017年' },
              { value: 178, name: '2018年', selected: true },
            ]
          }
        ]
      })
    },
    productF4() {
      this.product4 = echarts.init(
        document.getElementById("product4"),
        "mythemes"
      );
      this.product4.setOption({
        title: {
          text: '无心磨床客户订购累计台数',
          show: true,
          x: 'center',
          y: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ['2015年', '2016年', '2017年', '2018年']
        },
        series: [
          {
            name: '2015年',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: "{b}: {c} (台)"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 97, name: '2015年' },
              { value: 112, name: '2016年' },
              { value: 117, name: '2017年' },
              { value: 130, name: '2018年', selected: true },
            ]
          }
        ]
      })
    },
    productF5() {
      this.product5 = echarts.init(
        document.getElementById("product5"),
        "mythemes"
      );
      this.product5.setOption({
        title: {
          text: '无心磨床客户订购累计台数',
          show: true,
          x: 'center',
          y: 'center'
        },
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          show: false,
          data: ['2015年', '2016年', '2017年', '2018年']
        },
        series: [
          {
            name: '2015年',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            label: {
              normal: {
                show: true,
                position: 'outside',
                formatter: "{b}: {c} (台)"
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: '30',
                  fontWeight: 'bold'
                }
              }
            },
            labelLine: {
              normal: {
                show: true
              }
            },
            data: [
              { value: 97, name: '2015年' },
              { value: 112, name: '2016年' },
              { value: 117, name: '2017年' },
              { value: 130, name: '2018年', selected: true },
            ]
          }
        ]
      })
    },
    rightLastEchartF() {
      this.rightLastEchart = echarts.init(
        document.getElementById("rightLastEchart"),
        "mythemes"
      );
      this.rightLastEchart.setOption({
        title: {
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['订单签单率', '销售产品完成率', '销售回款回笼率', '销售收入增加率']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['2012年', '2013年', '2014年', '2015年', '2016年', '2017年', '2018年']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} %'
          }
        },
        series: [
          {
            name: '订单签单率',
            type: 'line',
            data: [95, 95, 80, 95, 100, 89, 90],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' }
              ]
            },
          },
          {
            name: '销售产品完成率',
            type: 'line',
            data: [85, 80, 91, 95, 120, 80, 64],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' }
              ]
            },
          },
          {
            name: '销售回款回笼率',
            type: 'line',
            data: [65, 70, 55, 60, 75, 91, 90],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' }
              ]
            },

          },
          {
            name: '销售收入增加率',
            type: 'line',
            data: [15, 10, 20, 30, 15, 7, 6],
            markPoint: {
              data: [
                { type: 'max', name: '最大值' }
              ]
            },
          }
        ]
      })
    },



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
    
  },
  created: function() {
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
}
</script>

<style scoped>
.echart-container {
  width: 3800px;
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
  ;
}

.caigou-part {
  width: 100%;
  padding: 0 0 50px 0;
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
  padding: 0 0 40px 0;
}

.sub-title {
  font-size: 36px;
  color: #fefefe;
  padding-bottom: 10px;
}

.sub-title>img {
  margin-right: 20px;
}

#caigouEchart {
  background: transparent;
  width: 1717px;
  height: 261px;
}


/* .total-price {
  width: 382.3px !important;
  height: 300px !important;
  border-radius: 50%;
  position: relative;
  border: 5px solid transparent;
  border-left-color: rgba(30, 198, 239, 0.3);
  border-bottom-color: rgba(30, 198, 239, 0.3);
  border-top-color: rgba(30, 198, 239, 0.3);
  padding: 20px;
  animation: loading 2s linear infinite;
} */
.total-price {
  width: 382.3px !important;
  height: 300px !important;
  border-radius: 50%;
  background: url('./../assets/2.svg');
  padding: 20px;
  animation: loading 2s linear infinite;
}

.sub-total {
  width: 100% !important;
  height: 100% !important;
  border: 5px solid transparent;
  border-radius: 50%;
   background: url('./../assets/1.svg');
  box-sizing: border-box;
  animation: loading1 1s linear infinite;
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
  height: 650px;
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

.part2-box>div:nth-of-type(1),
.caigou-part4>div:nth-of-type(1) {
  width: 40%;
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
  height: 400px;
}

.part2-box>div:nth-of-type(2),
.caigou-part4>div:nth-of-type(2) {
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
  height: 300px;
}

#commitGoodsTimeEchart {
  height: 300px;
}

#mainGongyingEchart {
  height: 500px;
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

.right-part1-main>div {
  width: 526px;
  height: 93px;
  margin-top:20px;
  background: rgba(109, 156, 235, 0.25);
  border: 1px solid rgba(210, 228, 255, 1);
  border-radius: 6px;
}

.right-part1-main>div:nth-of-type(2) {
  margin-left: 146px;
}

.right-part1-main>div>span:nth-of-type(1) {
  font-size: 30px;
  margin-left: 40px;
  font-family: FZLTHK--GBK1-0;
  font-weight: 400;
  color: rgba(30, 198, 239, 1);
}

.right-part1-main>div>span:nth-of-type(2) {
  display: inline-block;
  width: 42px;
  height: 42px;
  line-height: 42px;
  text-align: center;
  border-radius: 50%;
  color: #FE8346;
  margin-left: 20px;
  font-size: 30px;
  border: 3px solid #FE8346;
}

.right-part1-main>div>span:nth-of-type(3) {
  font-size: 60px;
  font-family: LetsgoDigital-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  margin-left: 10px;
}

.right-part1-main>div>span:nth-of-type(4) {
  font-size: 40px;
  font-family: LetsgoDigital-Regular;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
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

.right-part3-main>div:nth-of-type(1) {
  width: 40%;
  height: 100%;
}

.right-part3-main>div:nth-of-type(2) {
  width: 60%;
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
  height: 600px;
}
</style>
