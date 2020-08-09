<template>
  <div id="app">
    <h1>{{message}}</h1>
    <h2>{{$store.state.counter}}</h2>
    <h3>counter的值：{{counter}}</h3>
    <h3>counter+10的值：{{$store.getters.showCount}}</h3>
    <h3>counter+10的值：{{showCount}}</h3>
    <button @click="add">+1</button>
    <button @click="decrement">-1</button>
    <button @click="decrement1">延时2秒-1</button>
    <button @click="addCount">+20</button>
  </div>
</template>

<script>
  import { mapState,mapMutations,mapActions,mapGetters } from 'vuex'

  import { INCREMENT, DECREMENT } from "./store/mutations-type";
  export default {
    name: "App",
    computed: {
      //按需映射需要的变量名,...表示展开运算符
      ...mapState(['counter']),
      ...mapGetters(['showCount'])
    },
    data() {
      return {
        message: "我是app组件"
      };
    },
    methods: {
      ...mapMutations(['decrement']),
      ...mapActions(['decAnysc']),
      add() {
        this.$store.commit(INCREMENT);
      },
      // dec() {
      //   // this.$store.commit('decrement');
      //   this.decrement()
      // },
      addCount() {
        //传递参数
        this.$store.commit('addCount', 20)
      },
      decrement1(){
        // this.$store.dispatch('decAnysc')
        this.decAnysc()
      }
    },

  };
</script>

<style>
</style>