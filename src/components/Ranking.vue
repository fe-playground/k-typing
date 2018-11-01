<template>
  <div class="records">
    <h2>Ranking</h2>
    <div v-for="(record, idx) in ranking()" :class="`record ${record.current ? 'blue' : ''}`" :key="record.id">
      {{idx}} - {{record.name}} ({{record.time}})
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Ranking',
    props: {
      records: Array,
      currentUser: Object,
    },
    methods: {
      ranking() {
        if (this.currentUser) {
          return [ ...this.records, this.currentUser ].sort((a, b) => a.time - b.time);
        }
        return this.records;
      },
    }
  };
</script>

<style lang="scss">
  .records {
    .blue {
      color: blue;
    }
  }
</style>
