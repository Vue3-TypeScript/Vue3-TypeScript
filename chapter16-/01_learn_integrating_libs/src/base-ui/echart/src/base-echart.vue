<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
// 1.导包
import { ref, onMounted,  watchEffect } from 'vue'
// import * as echarts from 'echarts'
import type { EChartsOption } from 'echarts'
import useEchart from '../hooks/useEchart'

interface BaseEChartsProps{
  options: EChartsOption
  width?: string
  height?: string
}
// 2.定义props
const props = withDefaults(
  defineProps<BaseEChartsProps>(),
  {
    width: '100%',
    height: '360px'
  }
)

// 3.定义变量
const echartDivRef = ref<HTMLElement>()

// 4.组件加载完成
onMounted(() => {
  const { setOptions } = useEchart(echartDivRef.value!)

  // const echartInstance = echarts.init(echartDivRef.value!) // 也可用 as 断然
  // const setOptions = (options: echarts.EChartsOption) => {
  //   echartInstance.setOption(options)
  // }
  // // 当窗口发生变化后，让echart从新计算图表尺寸
  // window.addEventListener('resize', () => {
  //   echartInstance.resize()
  // })

  watchEffect(() => {
    setOptions(props.options)
  })
})
</script>