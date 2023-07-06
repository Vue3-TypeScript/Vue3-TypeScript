<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: '100%', height: '360px' }"></div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
// 1.导如 echarts    
import * as echarts from 'echarts'
// 2.导入 echarts对应的类型    
import type { ECharts, EChartsOption } from 'echarts'
// 3.定义变量，同时指定了变量的类型为：HTMLElement
const echartDivRef = ref<HTMLElement>()

// 4.组件加载完成
onMounted(() => {
  // 5.初始化echart实例（用了as类型断言明确具体类型）
  const echartInstance:ECharts = echarts.init(echartDivRef.value as HTMLElement)
  // 6.echart 图表配置，通知指定类型为：EChartsOption
  const options: EChartsOption = {
    title: {
      text: "ECharts 入门示例",
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      type: 'category',
      data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"],
    },
    yAxis: {},
    series: [
      {
        name: "销量",
        type: "bar",
        data: [5, 20, 36, 10, 10, 20],
      }
    ]
  }
  // 7.给echart 实例添加图表配置
  echartInstance.setOption(options)
})
</script>