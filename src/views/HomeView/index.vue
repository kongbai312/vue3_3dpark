<template>
  <main>
    <BigScreen></BigScreen>
  </main>
</template>

<script setup lang='ts'>
  import BigScreen from '../BigScreenView/index.vue';
  import { useUserStore } from '@/stores';
  const userStore = useUserStore()
  onMounted(() => {
    userStore.getToken()
  })
</script>

<style lang="scss" scoped>

</style>
