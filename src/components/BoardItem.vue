<template>
  <router-link :to="path">
    <div>
      id:{{board.id}} // title:{{board.title}} // content:{{board.content}}
    </div>
  </router-link>
</template>

<script>
  export default {
    name: 'BoardItem',
    props: {
      board: Object, // {id: Number, title: String, content: String}
    },
    computed: {
      path() {
        return `/boards/${this.board.id}`;
      },
    },
  };
</script>

<style scoped>

</style>
