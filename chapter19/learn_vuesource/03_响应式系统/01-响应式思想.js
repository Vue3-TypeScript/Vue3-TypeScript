const info = {counter: 100};
function doubleCounter() {
  console.log(info.counter * 2);
}
doubleCounter();

// 1.修改info
info.counter++;
// 2.手动调用 doubleCounter 函数
doubleCounter();