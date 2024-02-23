import { defineStore } from 'pinia';

export const useParkStore = defineStore('3d_park',() => {
    //游园信息
    let parkInfo = ref()

    //设置游园信息
    const setParkInfo = (info : any) => {
        parkInfo.value = info
    }

    return{
        parkInfo,
        setParkInfo
    }
},
    {
        persist:{
            // key:'3d-park',
            paths:['parkInfo']
        }
    }
)