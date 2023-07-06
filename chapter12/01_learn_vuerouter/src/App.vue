<template>
  <div class="nav">
    <!-- 1.切换路由（切换页面） -->
    <!-- <router-link class="tab" :to="{ path: '/home' }" active-class="why">首页</router-link> -->

    <!-- props: href 跳转的链接 -->
    <!-- props: route对象 -->
    <!-- props: navigate导航函数 -->
    <!-- props: isActive 是否当前处于活跃的状态 -->
    <!-- props: isExactActive 是否当前处于精确的活跃状态 -->
    <router-link  to="/home" v-slot="props" custom>
      <strong @click="props.navigate">首页：</strong>
      <span>{{props.href}}</span>
      <span> - {{props.isActive}} </span>
      <!-- 还支持自定义组件 -->
    </router-link>

    <router-link class="tab" to="/about">关于</router-link>
    <router-link class="tab" to="/user/why/id/0001">用户</router-link>
    <router-link class="tab" to="/category">商品分类</router-link>
    <!-- <button @click="backOneStep">←后退</button> -->
    <button @click="jumpToAbout">关于</button>
    
    <!-- <button @click="forwardOneStep">前进→</button> -->
    
    <!-- 
      <router-link class="tab" to="/home" >首页</router-link>
      <router-link class="tab" to="/about">关于</router-link>
     -->
    <!-- 
      <router-link class="tab" to="/home" replace>首页</router-link>
      <router-link class="tab" to="/about" replace>关于</router-link> 
    -->




  </div>
  <!-- 2.路由组件占位（页面占位） -->
  <router-view v-slot="props">
    <transition name="why">
      <keep-alive>
        <component :is="props.Component"></component>
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  name: 'App',
  components: {
    
  },
  methods: {
    // jumpToAbout() {
    //   // this.$router.push('/about')
    //   // this.$router.replace('/about')
    //   this.$router.push({
    //     path: '/about',
    //     query: {
    //       name: 'coder',
    //       age: 20
    //     }
    //   })
    // }
  },
  setup() {
    const router = useRouter()
    const jumpToAbout= ()=>{
      // router.push("/about")
      // router.replace("/about")
      router.push({
        path: '/about',
        query: {
          name: 'coder',
          age: 20
        }
      })
    }  
    // 后退
    const backOneStep= ()=>{
      router.go(-1)
      // router.back()
    }
    // 前进
    const forwardOneStep= ()=>{
      router.forward()
    }
    return {
      jumpToAbout,
      backOneStep,
      forwardOneStep
    }
  }
}


</script>

<style>
button{
  margin: 0 6px;
}
strong{
  cursor: pointer;
}
.nav{
  margin: 20px 0px;
}
.tab{
  border: 1px solid #ddd;
  margin-right: 8px;
  padding: 2px 20px;
  text-decoration: none;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}

.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}

</style>
