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
  @click="select"
  v-bind:class="{'segment--selected': segment.selected}"
>{{segment.text}}</span>
</template>

<script>
  module.exports = {
    methods: {
      select: function() {
        this.$dispatch('segment-selected', this.segment);
      }
    },
    props: ['segment']
  }
</script>
