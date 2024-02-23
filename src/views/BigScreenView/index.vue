<template>
  <VScaleScreen width="1920" height="1080">
    <div class="all-charts">
      <ParkDetail></ParkDetail>
      <ParkIncome></ParkIncome>
      <ParkIndustry></ParkIndustry>
    </div>
    <Model3d></Model3d>
  </VScaleScreen>
</template>

<script setup lang="ts">
import ParkDetail from './parkdetail.vue';
import ParkIncome from './parkincome.vue';
import ParkIndustry from './parkindustry.vue';
import Model3d from './model3d.vue'
import { getParkInfoAPI } from '@/apis/park';
import { useParkStore } from '@/stores';
//引入适配组件
import VScaleScreen from 'v-scale-screen';
//引入store
const parkStore = useParkStore()

//获取游园数据
const getParkInfo = async () => {
  const res = await getParkInfoAPI()
  parkStore.setParkInfo(res.data)
}
onMounted(async () => {
  await getParkInfo()
})
</script>

<style lang="scss" scoped>
.all-charts {
  position: absolute;
  top: 0;
  left: 0;
  width: 30rem;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: linear-gradient(
    to left,
    rgba(0, 6, 15, 0) 0%,
    rgba(0, 6, 15, 0) 20%,
    rgba(0, 0, 0, 0.4) 30%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(1, 4, 11, 1) 70%,
    #0c0e12 100%
  );

  .img-header {
    height: 30px;
  }
}
</style>