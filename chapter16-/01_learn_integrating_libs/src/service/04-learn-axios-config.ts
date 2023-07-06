import axios from 'axios'
const API_POST = '/post' // 测试post请求的url

// 1.axios的全局配置(将作用于每个请求)
axios.defaults.baseURL = 'http://httpbin.org'
axios.defaults.timeout = 10000

axios.post(API_POST,{ id: 100400}, {
    // 2.每一个请求单独的配置(优先级最高)
    timeout: 5000, // 比全局的配置优先级高
    headers: {
      'Content-Type': 'application/json',
      accessToken: 'aabbccdd'
    }
  })
  .then((res) => {
    console.log(res.data)
  })