import dayjs from 'dayjs'; // 需要 npm install dayjs@1.10.7 --save
// 1.该函数接收app实例，调用app.directive来定义全局指令
export default function(app) {
  app.directive("format-time", {
    created(el, bindings) {
      // 1.初始化默认的格式
      bindings.formatString = "YYYY-MM-DD HH:mm:ss";
      if (bindings.value) {
        bindings.formatString = bindings.value; // 2.使用用户指定的格式
      }
    },
    mounted(el, bindings) {
      const textContent = el.textContent; // 3.拿到某个元素的内容
      let timestamp = parseInt(textContent);
      if (textContent.length === 10) {
        timestamp = timestamp * 1000 // 4.如时间戳是秒单位，转成毫秒单位
      }
      // 5.使用dayjs库，将timestamp时间戳转成formatString指定的格式化
      el.textContent = dayjs(timestamp).format(bindings.formatString);
    }
  })
}