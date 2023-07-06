import axios from 'axios'
const API_POST = 'http://httpbin.org/post' // 测试post请求的url

// 1.axios的请求拦截
axios.interceptors.request.use(
  // fn1: 请求发送成功会执行的函数
  (config) => {
    console.log('请求成功的拦截')
    // 可进行统一操作，如 1.给请求添加accessToken 2.isLoading动画等
    if(config.headers){
      config.headers['accessToken'] = 'aabbcc'
    }
    return config
  },
  // fn2: 请求发送失败会执行的函数
  (err) => {
    console.log('请求发送错误')
    return err
  }
)
// 1.axios的响应拦截
axios.interceptors.response.use(
  // fn1: 数据响应成功(2xx 范围内的状态码)
  (res) => {
    console.log('响应成功的拦截')
    return res
  },
  // fn2: 数据响应失败（超出 2xx 范围的状态码）
  (err) => {
    console.log('服务器响应失败')
    return err
  }
)

axios.post(API_POST,{ id: 100400})
  .then((res) => {
    console.log(res.data)
  })

