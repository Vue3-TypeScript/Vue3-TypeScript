<template>
  <div class="show-names">
    <template v-for="(item, index) in names" :key="item">
      <!-- 1.给slot插槽绑定item，index数据。
      2.可以根据自己的需要将任意数量的 attribute 绑定到 slot 上。
      3.绑定到 slot上的属性我们称之为：插槽 prop -->
      <slot :item="item" :index="index"></slot>
    </template>
  </div>
</template>

<script>
  export default {
    props: {
      names: {
        type: Array,
        default: () => []
      }
    }
  }
</script>
<style scoped>
.show-names{
    height: 40px;
}
</style>