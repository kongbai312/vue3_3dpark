<template>
    <!-- 园区概况 -->
    <div class="section-one">
        <img class="img-header"
            src="https://yjy-teach-oss.oss-cn-beijing.aliyuncs.com/smartPark/%E5%A4%A7%E5%B1%8F%E5%88%87%E5%9B%BE/%E5%9B%AD%E5%8C%BA%E6%A6%82%E5%86%B5%402x.png"
            alt="" />
        <div class="icons-container">
            <div class="item">
                <div class="icons-item building-icon">
                    <span class="number">
                        <!-- 
                首次渲染（后端数据没有返回）
                parkInfo - {} - {}.base -> undefined -> undefined.buidingTotal
                
                二次渲染（后端数据返回之后 响应式状态发生变化 再次引起模版渲染）

                场景：访问一个空对象多层次的属性
                解决办法：可选链?.   保证必须前面有值才会继续往后进行点运算
               -->
                        {{ parkInfo.base?.buildingTotal }}
                    </span>
                </div>
                <span class="title">楼宇总数</span>
                <span class="unity">（栋）</span>
            </div>
            <div class="item">
                <div class="icons-item enterprise-icon">
                    <span class="number">
                        {{ parkInfo.base?.enterpriseTotal }}
                    </span>
                </div>
                <span class="title">入驻企业总数</span>
                <span class="unity">（家）</span>
            </div>
            <div class="item">
                <div class="icons-item car-icon">
                    <span class="number">
                        {{ parkInfo.base?.parkingTotal }}
                    </span>
                </div>
                <span class="title">车位总数</span>
                <span class="unity">（个）</span>
            </div>
            <div class="item">
                <div class="icons-item rod-icon">
                    <span class="number">
                        {{ parkInfo.base?.chargePoleTotal }}
                    </span>
                </div>
                <span class="title">一体杆总数</span>
                <span class="unity">（个）</span>
            </div>
        </div>
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
</script>

<style lang="scss" scoped>
.section-one {
  flex-basis: 25%;
  .img-header{
    width: 100%;
  }
  .icons-container {
    display: flex;
    justify-content: space-between;
    padding: 20px 0;

    .item {
      text-align: center;
      display: flex;
      flex-direction: column;
      flex: 1;

      .icons-item {
        height: 80px;
        position: relative;

        .number {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          font-size: 18px;
          font-family: FontquanXinYiGuanHeiTi, FontquanXinYiGuanHeiTi-Regular;
          color: #ffffff;
        }
      }

      .building-icon {
        background: url('@/assets/building-icon.png') no-repeat 50% 0 / contain;
      }

      .enterprise-icon {
        background: url('@/assets/enterprise-icon.png') no-repeat 50% 0 / contain;
      }

      .rod-icon {
        background: url('@/assets/rod-icon.png') no-repeat 50% 0 / contain;
      }

      .car-icon {
        background: url('@/assets/car-icon.png') no-repeat 50% 0 / contain;
      }

      .title,
      .unity {
        font-size: 14px;
        color: #cdd7e1;
      }

      .title {
        margin-top: 8px;
      }
    }
  }
}
</style>