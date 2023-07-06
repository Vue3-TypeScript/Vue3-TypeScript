/* eslint-disable */
// 声明导入.vue文件
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 1.声明全局变量
declare const appName: string 
declare const appVersion: string 

// 2.声明全局函数
// declare const getAppName: () => void
declare function getAppName(): void

// 3.声明全局类
declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 4.声明导入的文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

// 5.声明导入的模块
declare module "lodash" {
  export function join(args: any[]): any;
  // 可以继续导出lodash其它方法.....  
}

// 6.声明$命名空间
declare namespace $ {
  function ajax(settings: any): void
}