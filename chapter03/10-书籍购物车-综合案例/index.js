Vue.createApp({
    template: "#my-app",
    data() {
      return {
        books: [
          {
            id: 1,
            name: '《算法导论》',
            date: '2006-9',
            price: 85.00,
            count: 1
          },
          {
            id: 2,
            name: '《UNIX编程艺术》',
            date: '2006-2',
            price: 59.00,
            count: 1
          },
          {
            id: 3,
            name: '《编程珠玑》',
            date: '2008-10',
            price: 39.00,
            count: 1
          },
          {
            id: 4,
            name: '《代码大全》',
            date: '2006-3',
            price: 128.00,
            count: 1
          },
        ]
      }
    },
    computed: {
        // 计算购买书籍的总价格( 如果books数组发生变化，将会从新计算，否则使用缓存 )
        totalPrice() {
            let finalPrice = 0;
            for (let book of this.books) {
              finalPrice += book.count * book.price;
            }
            return finalPrice;
        },
        // 格式化价格
        formatPrice() {
            return (price)=>{
                return "¥" + price
            }
        }
    },
    methods: {
        increment(index) {
          // 通过索引值获取到对象
          this.books[index].count++
        },
        decrement(index) {
          this.books[index].count--
        },
        removeBook(index) {
          this.books.splice(index, 1);
        }
    }
  }).mount("#app");