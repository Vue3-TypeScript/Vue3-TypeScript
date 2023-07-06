type Method = 'GET' | 'POST'
function request(url: string, method: Method) {}

// type Request = {
//   url: string,
//   method: Method
// }

const options = {
  url: "https://www.coderwhy.org/abc",
  method: "POST"
} as const  // 字面量推理

request(options.url, options.method)
export {}
