import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// 1.定义拦截器的类型, T 是响应res.data的类型
interface HYRequestInterceptors<T = any> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (
    res: AxiosResponse<T>
  ) => AxiosResponse<T> | Promise<AxiosResponse<T>>;
  responseInterceptorCatch?: (error: any) => any;
}

interface HYRequestConfig<T = any> extends AxiosRequestConfig {
  // 2.这里可以扩展自己的类型
  interceptors?: HYRequestInterceptors<T>;
}

class HYRequest<T = any> {
  instance: AxiosInstance;
  interceptors?: HYRequestInterceptors; // 3.指定拦截器的类型
  constructor(config: HYRequestConfig<T>) {
    // 创建axios实例
    this.instance = axios.create(config);

    // 4.从config中取出对应的实例的拦截器
    this.interceptors = config.interceptors;
    // 5.如果某个实例的config中有定义拦截的回调函数，那么将这些函数添加到实例的拦截器中
    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    );
    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,
      this.interceptors?.responseInterceptorCatch
    );

    // 给所有实例添加全局的拦截器
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
        // 这里还可以对返回的数据进行判断
        return res.data;
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

  request<T = any>(config: HYRequestConfig): Promise<T> {
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

  get<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "GET" });
  }
  post<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "POST" });
  }
  delete<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "DELETE" });
  }

  patch<T = any>(config: HYRequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: "PATCH" });
  }
}

export default HYRequest;
