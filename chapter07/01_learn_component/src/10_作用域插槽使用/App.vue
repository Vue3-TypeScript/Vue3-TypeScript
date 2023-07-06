<template>
  <div class="app">
    <!-- 编译作用域 -->
    <!-- <child-cpn>
      <button>{{title}}</button>
    </child-cpn> -->


    <show-names :names="names">
      <!-- 1.如果是默认插槽，那么 :default 是可以省略不写。
        2.v-slot指令后面带的值：slotProps是插槽 prop的名字（slotProps这个名字可以随便起）。
      -->
      <template v-slot:default="slotProps">
        <span>{{slotProps.item}}-{{slotProps.index}}</span>
      </template>
    </show-names>

    <show-names :names="names">
      <template v-slot="slotProps">
        <span>{{slotProps.item}}-{{slotProps.index}}</span>
      </template>
    </show-names>
<!-- 
    <show-names :names="names" v-slot="slotProps">
      <span>{{slotProps.item}}-{{slotProps.index}}</span>
    </show-names> -->

  </div>
</template>

<script>
  import ShowNames from './ShowNames.vue';
  export default {
    components: {
      ShowNames,
    },
    data() {
      return {
        names: ["why", "kobe", "james", "curry"]
      }
    }
  }
</script>
<style scoped>
span{
  border: 1px solid #999;
  padding: 4px;
  margin: 4px;
}
</style>