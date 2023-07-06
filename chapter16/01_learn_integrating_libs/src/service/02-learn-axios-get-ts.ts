import axios from "axios";
import type { AxiosResponse } from "axios";
const API_GET = "http://httpbin.org/get";
// 1.定义get、post响应res.data对象的类型
interface IResponseData {
  args: any;
  headers: any;
  origin: string;
  url: string;
}

// 2.指定响应结果(res.data)的类型为：IResponseData
axios.get<IResponseData>(API_GET + "?id=100400").then((res) => {
  // TS自动推导res类型为：AxiosResponse; res.data类型为：IResponseData
  console.log(res.data);
});

// 3.指定响应结果(res.data)的类型为：IResponseData
axios
  .request<IResponseData>({
    method: "get",
    url: API_GET,
    params: { id: 100400 },
  })
  .then((res) => {
    console.log(res.data);
  });
