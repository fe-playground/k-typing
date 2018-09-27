<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Typing
        v-for="(w, i) in words"
        :text="w"
        :index="i"
        :onSuccess="onSuccess"
        :active="currentIndex === i"
    />
  </div>
</template>

<script>
  import Typing from './components/Typing.vue';

  export default {
    name: 'app',
    components: {
      Typing
    },
    data: () => {
      return {
        words: [
          '동해물과 백두산이 마르고 닳도록',
          '하느님이 보우하사 우리나라 만세',
          '무궁화 삼천리 화려강산 대한사람',
          '대한으로 길이 보전하세'
        ],
        currentIndex: 0,
      };
    },
    methods: {
      onSuccess(index) {
        this.currentIndex = index + 1;
      }
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
