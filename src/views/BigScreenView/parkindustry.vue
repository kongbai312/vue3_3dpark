<template>
    <!-- 园区产业分布 -->
    <div class="section-three">
        <img class="img-header"
            src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E4%BA%A7%E4%B8%9A%E5%88%86%E5%B8%83%402x.png"
            alt="" />
        <div class="pie-chart" ref="pieChart"></div>
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

// 渲染园区产业分布图表
let pieChart = ref(null)

const initPieChart = () => {
    const { parkIndustry } = parkInfo.value
    const pieOption = {
        color: [
            '#00B2FF', '#2CF2FF', '#892CFF', '#FF624D', '#FFCF54', '#86ECA2'],
        legend: {
            itemGap: 20,
            bottom: '0',
            icon: 'rect',
            itemHeight: 10, // 图例icon高度
            itemWidth: 10, // 图例icon宽度
            textStyle: {
                color: '#c6d1db',
            },
        },
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '园区产业分析',
                type: 'pie',
                radius: ['55%', '60%'], // 设置内圈与外圈的半径使其呈现为环形
                center: ['50%', '40%'], // 圆心位置， 用于调整整个图的位置
                tooltip: {
                    trigger: 'item',
                    formatter: (params: any) => {
                        return `${params.seriesName}</br><div style='display:flex;justify-content: space-between;'><div>${params.marker}${params.name}</div><div>${params.percent}%</div></div>`
                    }
                },
                label: {
                    show: false,
                    position: 'center',
                },
                data: parkIndustry,
            },
        ],

    }
    const myPieChart = echarts.init(pieChart.value)
    myPieChart.setOption(pieOption)
    window.addEventListener("resize", function () {
        myPieChart.resize();
    });
}

//监听
let stopWatch = watch(() => Object.keys(parkInfo.value).length, () => {
    //如果有数据，则开始渲染
    if (Object.keys(parkInfo.value).length !== 0) {
        nextTick(() => {
            initPieChart()
            //渲染完毕停止监听
            stopWatch()
        })
    }
}, {
    immediate: true
})

// onMounted(() => {
//     if(Object.keys(parkInfo.value).length! == 0){
//         initPieChart()
//     }
// })
</script>

<style>
.section-three {
    flex-basis: 40%;
    margin-top: 50px;
    width: 100%;

    .img-header {
        width: 100%;
        height: auto;
    }

    .pie-chart {
        position: relative;
        margin: 0 auto;
        padding-bottom: 20px;
        width: 80%;
        /* height: calc(350px - 40px); */
        height: 60vh;
    }
}
</style>