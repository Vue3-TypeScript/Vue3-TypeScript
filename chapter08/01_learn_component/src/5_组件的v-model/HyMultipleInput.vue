<template>
  <div class="hy-multiple-input">
    HyMultipleInput组件：
    <input :value="modelValue" @input="input1Change">
    <input :value="title" @input="input2Change">
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String,
      title: String 
    },
    emits: ["update:modelValue", "update:title"],
    methods: {
      input1Change(event) {
        this.$emit("update:modelValue", event.target.value);
      },
      input2Change(event) {
        this.$emit("update:title", event.target.value);
      }
    }
  }
</script>

<style scoped>
.hy-multiple-input{
  border: 1px solid #999;
  margin: 15px;
  padding: 5px;
}
</style>