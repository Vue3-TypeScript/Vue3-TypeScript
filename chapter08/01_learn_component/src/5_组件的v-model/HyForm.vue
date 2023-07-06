<template>
  <div class="hy-multiple-form">
    HyFrom组件：
    <input :value="modelValue.name" @input="inputChange($event, 'name')">
    <input :value="modelValue.title" @input="inputChange($event, 'title')">
    <!-- 不建议简写( 1.会直接修改了props属性；2.阅读性也不是很好 ) -->
    <!-- <input v-model="modelValue.title"> -->
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: Object // 对象
    },
    emits: ["update:modelValue"],
    methods: {
       inputChange(event,field) {
        this.$emit("update:modelValue", {
          ...this.modelValue,
          [field]: event.target.value,
        });
      }
    }
  }
</script>

<style scoped>
.hy-multiple-form{
  border: 1px solid #999;
  margin: 15px;
  padding: 5px;
}
</style>