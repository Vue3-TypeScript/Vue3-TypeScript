import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig } from "axios";

interface HYRequestConfig extends AxiosRequestConfig {
  // 这里可以扩展自己的类型
}

class HYRequest {
  instance: AxiosInstance;
  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
    // 1.给所有实例添加全局的拦截器
    this.instance.interceptors.request.use(
      (config) => {
        console.log("所有的实例都有的拦截器: 请求成功拦截");
        return config;
      },
      (err) => {
        console.log("所有的实例都有的拦截器: 请求失败拦截");
        return err;
      }
    );

    this.instance.interceptors.response.use(
      (res) => {
        console.log("所有的实例都有的拦截器: 响应成功拦截");
        // 这里还可以对返回的数据进行判断 todo ...
        return res.data; // 注意：这里返回 res.data 而不是res
      },
      (err) => {
        console.log("所有的实例都有的拦截器: 响应失败拦截");
        // 例子: 判断不同的HttpErrorCode显示不同的错误信息
        if (err.response.status === 404) {
          console.log("404的错误~");
        }
        return err;
      }
    );
  }

  request<T>(config: HYRequestConfig): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T, T>(config)
        .then((res) => {
          // 3.将结果resolve返回出去
          resolve(res);
        })
        .catch((err) => {
          reject(err);
          return err;
        });
    });
  }
}

export default HYRequest;
