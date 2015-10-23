// app.vue
<style>
  .char {
    border-style: solid;
    border-width: 1px 0px;
    border-color: #999;
    white-space: pre-wrap;
  }
  .char:first-child {
    border-width: 1px 0px 1px 1px;
  }
  .char.char--selected {
    background-color: rgba(158, 158, 158, 0.5);
  }
  .char.char--last,
  .char:last-child {
    border-width: 1px 1px 1px 0px;
  }
</style>

<template>
<span
  class="char"
  v-on:click="select"
  v-bind:class="{'char--selected': data.selected, 'char--last': hasNext}"
  v-bind:data-segment-id="data.id"
>{{data.char}}</span>
</template>

<script>
  module.exports = {
    computed: {
      hasNext: function() {
        return this.data.nextChar && (this.data.id != this.data.nextChar.id);
      }
    },
    methods: {
      select: function() {
        this.$dispatch('char-selected', this.data.id);
      }
    },
    props: ['data']
  }
</script>
