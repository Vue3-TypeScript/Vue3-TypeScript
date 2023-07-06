<template>
  <div class="hy-input">
    HyInput组件:
    <!-- 1.通过input元素 -->
    <!-- <input :value="modelValue" @input="inputClick"> -->

    <!-- 2.v-model 直接绑定props中的modelValue属性是不对的-->
    <!-- <input v-model="modelValue"> -->

    <!-- 3.绑定到value计数属性- -->
    <input v-model="value">
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: String
    },
    emits: ["update:modelValue"],
    computed: {
      value: {
        set(value) {
          this.$emit("update:modelValue", value);
        },
        get() {
          return this.modelValue;
        }
      }
    },
    methods: {
      inputClick(event) {
        this.$emit("update:modelValue", event.target.value);
      }
    }
  }
</script>

<style scoped>
.hy-input{
  border: 1px solid #999;
  margin: 15px;
  padding: 5px;
}
</style>