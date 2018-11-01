<template>
  <div id="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
      <div>
        name: <input type="text" v-model="name"/>
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
        <h2>Ranking</h2>
        <div v-for="(record, idx) in ranking()" :class="`record ${record.current ? 'blue' : ''}`" :key="record.time">
          {{idx}} - {{record.name}} ({{record.time}})
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import Typing from '@/components/Typing.vue';
  import words from '@/assets/words';

  const { mapState, mapActions } = createNamespacedHelpers('home');

  export default {
    name: 'home',
    components: {
      Typing,
    },
    data: () => {
      return {
        words,
        currentIndex: 0,
        time: 0,
        t: null,
        clear: true,
      };
    },
    computed: {
      ...mapState([ 'records' ]),
      ...mapState({
        storeName: store => store.name,
      }),
      name: {
        get() {
          return this.storeName;
        },
        set(v) {
          this.setName(v);
        },
      },
    },
    methods: {
      ...mapActions([ 'setName', 'setRecords' ]),
      onSuccess(index) {
        this.currentIndex = index + 1;
      },
      timer() {
        this.t = setInterval(() => this.time++, 100);
      },
      startTimer() {
        if (this.time) {
          return;
        }
        this.clear = false;
        this.timer();
      },
      endTimer() {
        clearInterval(this.t);
        this.clear = true;
        this.saveDataAndReset();
      },
      saveDataAndReset() {
        this.setRecords({
          name: this.name.trim(),
          time: this.time / 10,
        });
        this.time = 0;
        this.currentIndex = 0;
      },
      ranking() {
        if (this.time) {
          const currentUser = { name: this.name.trim(), time: this.time / 10, current: true };
          return [ ...this.records, currentUser ].sort((a, b) => a.time - b.time);
        }
        return this.records;
      },
    },
  };
</script>

<style lang="scss">
  #home {
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
