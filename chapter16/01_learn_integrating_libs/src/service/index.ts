// service统一出口
import HYRequest from "./request";

let BASE_URL = "http://httpbin.org"; //  基础的URL
const TIME_OUT = 10000; // 超时时间
const hyRequest = new HYRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      const token = "";
      if (token) {
        // 例子：统一给header添加 Authorization 属性
        config.headers!.Authorization = `Bearer ${token}`;
      }
      console.log("单个实例-请求成功的拦截");
      return config;
    },
    requestInterceptorCatch: (err) => {
      console.log("单个实例-请求失败的拦截");
      return err;
    },
    responseInterceptor: (res) => {
      console.log("单个实例-响应成功的拦截");
      return res;
    },
    responseInterceptorCatch: (err) => {
      console.log("单个实例-响应失败的拦截");
      return err;
    },
  },
});

export default hyRequest;
