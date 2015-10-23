// app.vue
<style>
  .char {
    border-style: solid;
    border-width: 0px 0px;
    border-color: #999;
    white-space: pre-wrap;
  }
  .char.char--selected {
    text-decoration: underline;
  }
  .char.char--last {
    border-width: 0px 1px 0px 0px;
  }
</style>

<template>
<span v-if="data.selected && !prevChar">👈</span><span
  class="char"
  v-on:click="select"
  v-bind:class="{'char--selected': data.selected, 'char--last': !nextChar}"
  v-bind:data-segment-id="data.id"
>{{data.char}}</span><span v-if="data.selected && !nextChar">👉</span>
</template>

<script>
  module.exports = {
    computed: {
      prevChar: function () {
        if (this.data.prevChar && (this.data.id == this.data.prevChar.id)) {
          return this.data.prevChar;
        }
      },
      nextChar: function() {
        if (this.data.nextChar && (this.data.id == this.data.nextChar.id)) {
          return this.data.nextChar;
        }
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
