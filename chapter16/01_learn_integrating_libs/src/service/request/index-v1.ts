import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

interface HYRequestConfig extends AxiosRequestConfig {
  // 这里可以扩展自己的类型
}
class HYRequest {
  instance: AxiosInstance;
  constructor(config: HYRequestConfig) {
    // 创建axios实例
    this.instance = axios.create(config);
  }
  request<T>(config: HYRequestConfig): Promise<AxiosResponse<T>> {
    return new Promise((resolve, reject) => {
      this.instance
        .request<T>(config)
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
