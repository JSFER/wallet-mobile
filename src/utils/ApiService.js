import axios from 'axios'
import qs from 'qs'
import { HOST } from '@src/config'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

axios.interceptors.request.use(config => {
    const nConfig = config

    Object.assign(nConfig, {
        data: qs.stringify(config.data),
    })

    if (process.env.NODE_ENV === 'development') {
        nConfig.url = HOST + nConfig.url
    }

    return nConfig
})

axios.interceptors.response.use(
    res => {
        const { data } = res

        if (data.code !== 0) {
            console.log(data.message);
        }

        return data
    },
    () => {
        console.error('网络异常，请检查网络连接')

        return {
            code: -1,
        }
    },
)

export default axios
