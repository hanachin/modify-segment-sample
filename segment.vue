// app.vue
<style>
  .segments {
    width: 640px;
  }
  .segment {
    border: 1px solid #999;
    white-space: pre-wrap;
  }
  .segment.segment--selected {
    background-color: rgba(158, 158, 158, 0.5);
  }
</style>

<template>
<span
  class="segment"
  v-on:click="select"
  v-bind:class="{'segment--selected':data.selected}"
>{{data.text}}</span>
</template>

<script>
  module.exports = {
    methods: {
      select: function() {
        this.$dispatch('segment-selected', this.data.id);
      }
    },
    props: ['data']
  }
</script>
