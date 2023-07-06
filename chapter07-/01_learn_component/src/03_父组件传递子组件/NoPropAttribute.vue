NoPropAttribute.vue
<template>
  <div class="no-prop-attribute">
    该子组件没有定义任何的props属性
    <h4 :class="$attrs.class">{{$attrs.id}}-{{$attrs.name}}</h4>
  </div>
</template>
<script>
  export default {
    inheritAttrs: false
  }
</script>
