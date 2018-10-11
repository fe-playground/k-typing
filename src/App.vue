<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
    <div class="contents">
      <div class="box">
        <h2>{{time / 10}}</h2>
        <Typing
            v-for="(w, i) in words"
            :text="w"
            :index="i"
            :onSuccess="onSuccess"
            :active="currentIndex === i"
            :onStartTimer="startTimer"
            :onEndTimer="endTimer"
            :isLast="words.length === i + 1"
        />
      </div>
      <div class="box records">
        <h2>Records</h2>
        <div class="record" v-for="record in records">
          {{JSON.stringify(record)}}
        </div>
      </div>
    </div>
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
          '대한으로 길이 보전하세',
        ],
        currentIndex: 0,
        time: 0,
        t: null,
        records: [], // {name, time}
      };
    },
    methods: {
      onSuccess(index) {
        this.currentIndex = index + 1;
      },
      timer() {
        this.t = setInterval(() => this.time++, 100);
      },
      startTimer() {
        if (this.time) return;
        this.timer();
      },
      endTimer() {
        clearInterval(this.t);
        this.saveDataAndReset();
      },
      saveDataAndReset() {
        this.records.push({
          name: '입력받으세요.',
          time: this.time / 10,
        });
        this.time = 0;
        this.currentIndex = 0;
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
    .contents {
      .box {
        display: inline-block;
        width: 50%;
        min-height: 300px;
        vertical-align: top;
        box-sizing: border-box;
      }
      .records {
        border: 1px solid;
      }
    }
  }
</style>
