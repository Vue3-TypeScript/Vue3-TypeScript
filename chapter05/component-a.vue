<template>
  <div>
    <h4>{{ title }}</h4>
    <p>{{ desc }}</p>
    <button @click="btnClick">按钮单击</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "我是标题",
      desc: "我是内容区域",
    };
  },
  methods: {
    btnClick() {
      console.log("按钮的单击");
    },
  },
};
</script>

<style scoped>

</style>



