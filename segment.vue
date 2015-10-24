<style>
  .segment {
    border-style: solid;
    border-width: 0px 0px;
    border-color: #666;
    white-space: pre-wrap;
    -webkit-user-select: none;
    border-width: 0px 1px 0px 0px;
  }
  .segment:first-child {
    border-width: 0px 1px 0px 1px;
  }
  .segment.segment--selected {
    text-decoration: underline;
  }
  .segment.segment--selected:before {
    content: '👈';
  }
  .segment.segment--selected:after {
    content: '👉';
  }
</style>

<template>
<span
  class="segment"
  v-on:click="select"
  v-bind:class="{'segment--selected': data.selected}"
  v-bind:data-segment-id="data.id"
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
