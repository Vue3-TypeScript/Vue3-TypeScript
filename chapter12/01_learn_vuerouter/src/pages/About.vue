<template>
  <div class="about">
    About Page
    <p>{{$route.query.name}}-{{$route.query.age}}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
export default {
  name: 'About',
  components: {
    
  },
  setup() {
    const route = useRoute();
    console.log(route.name)
    console.log(route.meta)
    console.log(route.query)
    return {}
  }
}
</script>
