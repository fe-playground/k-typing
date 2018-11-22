<template>
  <div>
    <h1>Detail</h1>
    {{boardId}}
    <br>
    {{JSON.stringify(board)}}
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';

  const { mapGetters } = createNamespacedHelpers('board');

  export default {
    name: 'BoardDetail',
    computed: {
      ...mapGetters([ 'getBoardById' ]),
      boardId() {
        return Number(this.$route.params.id);
      },
    },
    asyncComputed: {
      async board() {
        return await this.getBoardById(this.boardId);
      },
    },
  };
</script>

<style scoped>

</style>
