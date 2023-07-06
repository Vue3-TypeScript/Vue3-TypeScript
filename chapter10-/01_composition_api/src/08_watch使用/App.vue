<template>
  <div class="app" style="border:1px solid #ddd;margin:4px">
    App组件
    <!-- <WatchEffectAPI></WatchEffectAPI> -->
    <!-- <WatchEffectAPIClear></WatchEffectAPIClear> -->
    <!-- <WatchEffectAPIFlush></WatchEffectAPIFlush> -->
    <!-- <WatchAPI></WatchAPI> -->
    <!-- <WatchAPIMult></WatchAPIMult> -->
    <WatchAPIDeep></WatchAPIDeep>
  </div>
</template>

<script>
  import WatchEffectAPI from './WatchEffectAPI.vue';
  import WatchEffectAPIClear from './WatchEffectAPIClear.vue';
  import WatchEffectAPIFlush from './WatchEffectAPIFlush.vue';
  
  import WatchAPI from './WatchAPI.vue';
  import WatchAPIMult from './WatchAPIMult.vue';
  import WatchAPIDeep from './WatchAPIDeep.vue';
  export default {
    components: {
      WatchEffectAPI,
      WatchEffectAPIClear,
      WatchEffectAPIFlush,

      WatchAPI,
      WatchAPIMult,
      WatchAPIDeep
    }
  }
</script>