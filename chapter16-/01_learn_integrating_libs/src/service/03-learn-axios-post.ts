import axios from 'axios'
const API_POST = 'http://httpbin.org/post' // 测试post请求的url

// 1.方式一：发起一个post请求
axios.post(API_POST,{ id: 100400})
  .then((res) => {
    console.log(res.data) // 处理响应结果
  })

// 2.方式二：发起一个post请求
axios.request({
   method: 'post',
   url: API_POST,
   data: { id: 100400} 
  })
  .then((res) => {
    console.log(res.data) // 处理响应结果
  })
