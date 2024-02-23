import { createPinia } from 'pinia'
//导入pinia数据持久化插件
import persist from 'pinia-plugin-persistedstate'
//创建pinia实例
const pinia = createPinia()

//导出pinia
export default pinia

//使用插件
pinia.use(persist)

//统一暴露模块
export * from './modules/user';
export * from './modules/park';