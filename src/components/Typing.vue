<template>
  <v-text-field
      :label="text"
      v-model="editor"
      :disabled="!active"
      :autofocus="active"
      ref="editorInput"
  ></v-text-field>
</template>

<script>
  export default {
    name: 'Typing',
    props: {
      text: String,
      index: Number,
      isLast: Boolean,
      active: Boolean,
      clear: Boolean,
      onSuccess: Function,
      onStartTimer: Function,
      onEndTimer: Function,
    },
    data: function () {
      return {
        editor: null
      };
    },
    updated() {
      this.active && this.$refs.editorInput.focus();
    },
    watch: {
      editor() {
        if (this.index === 0 && this.editor !== null) this.onStartTimer();
        if (String(this.editor).trim() === this.text) {
          this.onSuccess(this.index);
          if (this.isLast) this.onEndTimer();
        }
      },
      clear() {
        this.clear && (this.editor = null);
      },
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
