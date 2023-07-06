import axios from 'axios'
axios
  .all([
    axios.get('http://httpbin.org/get', { params: { name: 'why', age: 18 } }),
    axios.post('http://httpbin.org/post', { data: { name: 'why', age: 18 } })
  ])
  .then((res) => {
    console.log(res[0].data) // 第一个请求的结果
    console.log(res[1].data) // 第二个请求的结果
  })