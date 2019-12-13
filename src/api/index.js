import axios from 'axios'
import { Message } from 'iview'
import { getToken } from "utils/cookies"

let baseURL = ''
if (process.env.NODE_ENV == "development") {
  baseURL = process.env.VUE_APP_BASE_API
} else if (process.env.NODE_ENV == "test") {
  baseURL = process.env.VUE_APP_BASE_API_BASE + process.env.VUE_APP_BASE_API
} else {
  baseURL = process.env.VUE_APP_BASE_API_BASE + process.env.VUE_APP_BASE_API
}
// create an axios instance
const service = axios.create({
  baseURL: baseURL, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
})
// request interceptor
service.interceptors.request.use(
  config => {
    config.headers['xxl_sso_sessionid'] = getToken()
    return config
  },
  error => {
    // do something with request error
    console.log(error, 'err') // for debug
    return Promise.reject(error)
  }
)
let _this = this
// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
  */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      switch (res.code) {
        case 401:
          Message.warning('未登录');
          break;
        default:
          Message.warning(res.msg  || 'Error');
      }
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    // Toast.fail({
    //   message: error.message,
    //   duration: 1.5 * 1000
    // })
    Message.warning('请求超时，请稍后重试！');
    return Promise.reject(error)
  }
)

export default service
