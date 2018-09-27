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
      active: Boolean,
      onSuccess: Function,
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
        }
      }
    },
    updated() {
      if (this.active) {
        this.$refs.editorInput.focus();
      }
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .typing {
    width: 600px;
    margin: 0 auto;
    margin-bottom: 10px;
    text-align: left;
    .view-line {

    }
    .editor {
      width: 100%;
    }
  }
</style>
