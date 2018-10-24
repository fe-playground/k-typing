<template>
  <div id="app">
    <div>
      <img alt="Vue logo" src="./assets/logo.png">
      <div>
        name:
        <input
          type="text"
          v-model="name"
        >
      </div>
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
            :clear="clear"
        />
      </div>
      <div class="box records">
        <h2>Records</h2>
        <div :class="`record ${record.current ? 'blue' : ''}`" v-for="(record, idx) in ranking()">
          {{idx}} - {{record.name}} ({{record.time}})
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
          //'동해물과 백두산이 마르고 닳도록',
          //'하느님이 보우하사 우리나라 만세',
          //'무궁화 삼천리 화려강산 대한사람',
          //'대한으로 길이 보전하세',
          '가가',
          '나나',
          '다다',
          '라라',
        ],
        currentIndex: 0,
        time: 0,
        t: null,
        records: [], // {name, time, current?}
        clear: true,
        name: ''
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
        this.clear = false;
        this.timer();
      },
      endTimer() {
        clearInterval(this.t);
        this.clear = true;
        this.saveDataAndReset();
      },
      saveDataAndReset() {
        this.records.push({
          name: this.name.trim(),
          time: this.time / 10,
        });
        this.records.sort((a,b)=> a.time - b.time);
        this.time = 0;
        this.currentIndex = 0;
      },
      ranking() {
        if (this.time) {
          const currentUser = {name: this.name.trim(), time: this.time / 10, current: true};
          return [...this.records, currentUser].sort((a,b)=> a.time - b.time);
        }
        return this.records
      },
    },
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
    .blue {
      color: blue;
    }
  }
</style>
