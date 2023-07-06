<template>
  <div class="app">
    <h4>App组件message变量：{{message}}</h4>
    <h4>App组件title变量：{{title}}</h4>
    <button @click="changeMessage">App组件修改message</button>
    
    <!-- 1.组件上使用v-model -->
    <hy-input v-model="message"></hy-input>
    <!-- v-model 等价于 下面的语法 -->
	  <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->
    
    <!-- 2.绑定两个v-model -->
    <hy-multiple-input v-model="message" v-model:title="title"></hy-multiple-input>

    <!-- 3.v-model绑定对象 -->
    <h5>App组件formData.name:：{{formData.name}}</h5>
    <h5>App组件formData.title：{{formData.title}}</h5>
    <hy-form v-model="formData"></hy-form>

  </div>
</template>

<script>
  import HyInput from './HyInput.vue';
  import HyMultipleInput from './HyMultipleInput.vue';
  import HyForm from './HyForm.vue';

  export default {
    components: {
      HyInput,
      HyMultipleInput,
      HyForm
    },
    data() {
      return {
        message: "Hello",
        title: "World",
        formData:{
           name: 'coder',
           title: 'why'
        }
      }
    },
    methods: {
      changeMessage() {
        this.message = "coderwhy"
      }
    }
  }
</script>

<style scoped>
.app{
  border: 1px solid #999;
  margin: 5px;
}
button{
  margin: 5px 0px;
}
</style>