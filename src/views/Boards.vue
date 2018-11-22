<template>
  <div>
    <h1>Boards</h1>
    <BoardItem v-for="board in boards" :board="board"/>
  </div>
</template>

<script>
  import { createNamespacedHelpers } from 'vuex';
  import BoardItem from '@/components/BoardItem';

  const { mapState, mapActions } = createNamespacedHelpers('board');

  export default {
    name: 'Boards',
    components: { BoardItem },
    data: () => ({}),
    computed: {
      ...mapState([ 'boards' ]),
    },
    methods: {
      ...mapActions([ 'loadBoards' ]),
    },
    mounted() {
      this.loadBoards();
    },
  };
</script>

<style scoped>

</style>
