<template>
  <div class="explame">
    <h4 class="red">hello should be red</h4>
    <h4 class="green">hello should be green</h4>
    <h4 class="yellow">hello should be yellow</h4>
  </div>
</template>

<script>

export default {
  data() {
    return {
      color1: 'red',
      color2: 'green'
    }
  },
  computed: {
    color3() {
      return 'yellow'
    }
  }
}
</script>

<style>
.red {
  /* 动态绑定样式 */
  color: v-bind(color1);
}
.green {
  color: v-bind(color2);
}
.yellow {
  color: v-bind(color3);
}
</style>