<template>
    <div class="model-container">
        <!-- 进度条 -->
        <LoadingComponent :loading="showLoading" />
        <!-- 准备3D渲染节点 -->
        <canvas class="canvas-3d" ref="ref3d"></canvas>
    </div>
</template>

<script setup lang="ts">
// 导入模型解析构造函数
import { Application } from '@splinetool/runtime';
// 导入loading组件
import LoadingComponent from '@/components/LoadingComponent.vue';
import { useUserStore } from '@/stores';

// 初始化3d模型
const ref3d = ref<HTMLCanvasElement>()
//模型基本地址
const publisPath = 'https://fe-hmzs.itheima.net'
//展示进度条
const showLoading = ref(false)
//初始化3D模型
const init3dModel = async() => {
    // 开启loading 
    showLoading.value = true
    // 实例化解析器实例
    let spline = new Application(ref3d.value as HTMLCanvasElement)
    // 拉取模型
    await spline.load(`${publisPath}/scene.splinecode`)
    console.log('3D模型加载并渲染完毕')
    //关闭加载条
    showLoading.value = false
}

// //引入store
// const useStore = useUserStore()
// //token
// let token = computed(() => {
//   return useStore.token || ''
// })
// //监视本地token,有token才发送请求获取信息
// const stopWatch = watch(() => token.value,async() => {
//   //token存在
//   if(token.value !== ''){
//     //获取信息
//     await init3dModel()
//     //停止监听
//     stopWatch()
//   }
// },{
//   immediate:true
// })


// dom节点渲染完毕再加载
onMounted(() => {
    nextTick(() => {
        init3dModel()
    })
})

</script>




<style scoped lang="scss">
.model-container {
    height: 100%;
    background-color: black;
    width: 100%;
    flex-shrink: 0;
}
</style>