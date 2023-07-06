<script>
  import HelloWorld from './HelloWorld.vue';
  export default {
    data() {
      return {counter: 0}
    },
    render() {
      // 下面的方法也可以写到 methods 选项中
      const increment = () => this.counter++;
      const decrement = () => this.counter--;
      return (
        <div class="app" style="border:1px solid #ddd;margin:4px">
          <h4>当前计数: {this.counter}</h4>
          <button onClick={increment}>+1</button>
          <button onClick={decrement}>-1</button>
          {/**JSX语法中使用组件 */}
          <HelloWorld/>
        </div>
      )
    }
  }
</script>