<template>
  <div class="typing">
    <div class="view-line">{{ text }}</div>
    <input
        class="editor"
        type="text"
        v-model="editor"
        @keydown.enter="handleEnter"
        :disabled="!active"
        ref="editorInput"
        :autofocus="active"
    />
  </div>
</template>

<script>
  export default {
    name: 'Typing',
    props: {
      text: String,
      index: Number,
      isLast: Boolean,
      active: Boolean,
      onSuccess: Function,
      onStartTimer: Function,
      onEndTimer: Function,
    },
    data: function () {
      return {
        editor: ''
      };
    },
    methods: {
      handleEnter(e) {
        if (this.editor === this.text) {
          this.onSuccess(this.index);
          if (this.isLast) this.onEndTimer();
        }
      }
    },
    updated() {
      if (this.active) {
        this.$refs.editorInput.focus();
      }
    },
    watch: {
      editor() {
        if (this.index === 0) this.onStartTimer();
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .typing {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;
    .view-line {

    }
    .editor {
      width: 90%;
    }
  }
</style>
