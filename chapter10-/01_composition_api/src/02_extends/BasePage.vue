<script>
  // extends属性只能复用script标签中的逻辑，不能复用template和style
  export default {
    data() {
      return {
        title: "Hello BasePage"
      }
    },
    methods: {
      bar() {
        console.log("base page bar");
      }
    }
  }
</script>