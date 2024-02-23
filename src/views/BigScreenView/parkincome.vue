<template>
  <!-- 园区年度收入分析 -->
  <div class="section-two">
    <img class="img-header"
      src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E5%B9%B4%E5%BA%A6%E6%94%B6%E5%85%A5%E5%88%86%E6%9E%90%402x.png"
      alt="" />
    <div class="bar-chart-titile">
      <span>单位：元</span>
      <div>
        <span class="bar-icon blue-bar-icon"></span>
        <span class="bar-icon red-bar-icon"></span>
        收入情况
      </div>
    </div>
    <div class="bar-chart" ref="barChart"></div>
  </div>
</template>
  
<script setup lang="ts">
import { useParkStore } from '@/stores';
//引入store 
const parkStore = useParkStore()

//获取游园信息
let parkInfo = computed(() => {
  return parkStore.parkInfo || {}
})

//引入echarts
const echarts = inject<any>('$echarts')

//获取dom对象
let barChart = ref(null)

// 渲染年度收入分析图表
const initBarChart = () => {
  // 1. 解构图表数据
  const { parkIncome } = parkInfo.value
  // 2. 准备options数据
  const barOptions = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    grid: {
      // 让图表占满容器
      top: '10px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
          show: false,
        },
        data: parkIncome.xMonth,
      },
    ],
    yAxis: [
      {
        type: 'value',
        splitLine: {
          show: false,
        },
      },
    ],
    series: [
      {
        name: '园区年度收入',
        type: 'bar',
        barWidth: '10',
        data: parkIncome.yIncome.map((item: any, index: any) => {
          const color =
            index % 2 === 0
              ? new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0.23, color: '#74c0f8' },
                { offset: 1, color: 'rgba(116,192,248,0.00)' },
              ])
              : new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0.23, color: '#ff7152' },
                { offset: 1, color: 'rgba(255,113,82,0.00)' },
              ])
          return { value: item, itemStyle: { color } }
        }),
      },
    ],
    textStyle: {
      color: '#B4C0CC',
    },
  }
  // 3. 渲染图表
  const myBarChart = echarts.init(barChart.value)
  myBarChart.setOption(barOptions)
  window.addEventListener("resize", function () {
    myBarChart.resize();
  });
}

onMounted(() => {
  initBarChart()
})

</script>


<style>
.section-two {
  /*  主轴宽度（y轴） */
  flex-basis: 35%;
  margin-top: 50px;
  height: 20.625rem;
  .img-header{
    width: 100%;
    height: auto;
  }
  .bar-chart {
    width: 100%;
    /* height: calc(350px - 90px); */
    height: 40vh;
  }
}
</style>