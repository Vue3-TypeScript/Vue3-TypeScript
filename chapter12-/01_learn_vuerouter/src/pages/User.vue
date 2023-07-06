<template>
  <div>
    <h4>User Page: {{$route.params.username}}-{{$route.params.id}}</h4>
  </div>
</template>

<script>
  import { useRoute } from "vue-router";
  export default {
    created() {
      console.log(this.$route.params.username, this.$route.params.id);
    },
    setup() {
      const route = useRoute();
      console.log(route.params.username, route.params.id);
    }
  }
</script>