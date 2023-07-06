import hyRequest from "./index";
// 1.定义get、post响应res.data对象的类型
interface IResponseData {
  args: any;
  headers: any;
  origin: string;
  url: string;
}

// 2.发起网络请求
hyRequest
  .request<IResponseData>({
    url: "/get",
    method: "get",
  })
  .then((res) => {
    console.log(res);
  });
