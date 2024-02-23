import { defineStore } from 'pinia';
import { loginAPI } from '@/apis/user';
export const useUserStore = defineStore('3d_user',() => {
    let userInfo = ref({
        username:'demo',
        password:'zh@hm#23'
    })

    let token = ref()

    //  获取token
    let getToken = async () => {
        let result = await loginAPI(userInfo.value)
        token.value = result.data.token
    }

    return{
        token,
        getToken
    }
},
    {
        persist:{
            key:'3d-user',
            paths:['token']
        }
    }
)