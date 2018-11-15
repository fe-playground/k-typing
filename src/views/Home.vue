<template>
  <div id="home">
      <v-text-field v-model="name" autofocus>
        <template slot="label">
          <img alt="Vue logo" src="../assets/logo.png" style="width: 20px;"> <strong>Name</strong>
        </template>
      </v-text-field>
    <div>
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
    <Ranking :records="records" :current-user="currentUser"/>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import Typing from '@/components/Typing.vue';
  import Ranking from '@/components/Ranking';
  import words from '@/assets/words';

  const { mapState, mapActions } = createNamespacedHelpers('home');

  export default {
    name: 'home',
    components: {
      Typing,
      Ranking,
    },
    data: () => ({
      words,
      currentIndex: 0,
      time: 0,
      t: null,
      clear: true,
      toast: true
    }),
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
          this.$bus.$emit('toast', v)
          //this.$parent.$parent.$parent.$emit('toast', v)
        },
      },
      currentUser() {
        if (!this.time) return;
        return { id: -1, name: this.name.trim(), time: this.time / 10, current: true };
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
  }
</style>
