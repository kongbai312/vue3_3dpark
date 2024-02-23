import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import pinia from '@/stores/index';

//引入基础样式
import '@/styles/common.scss'

const app = createApp(App)

//引入echarts
import echarts from '@/utils/echarts';
//通过provide传递给子组件
app.provide('$echarts', echarts);

app.use(pinia)
app.use(router)

app.mount('#app')