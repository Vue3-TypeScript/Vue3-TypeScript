import axios from 'axios'
const API_GET = 'http://httpbin.org/get' // 测试get请求的url

// 1.方式一：发起一个get请求
axios.get(API_GET + '?id=100400')
  .then((res) => {
    console.log(res.data) // 1.2.处理响应结果
  })

// 2.方式二：发起一个get请求
axios.get(API_GET,{params: { id: 100400} })
  .then((res) => {
    console.log(res.data) // 1.2.处理响应结果
  })

// 3.方式三：发起一个get请求
axios.request({
   method: 'get',
   url: API_GET,
   params: { id: 100400} 
  })
  .then((res) => {
    console.log(res.data) // 1.2.处理响应结果
  })
