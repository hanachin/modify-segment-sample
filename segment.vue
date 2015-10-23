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
  .segment-modify-toolbar {
    position: relative;
    height: 24px;
  }
  .segment-modify-toolbar .segment-modify-toolbar__clear,
  .segment-modify-toolbar .segment-modify-toolbar__forward,
  .segment-modify-toolbar .segment-modify-toolbar__backword
  {
    position: absolute;
    font-size: 24px;
    width:     24px;
    height:    24px;
  }
  .segment-modify-toolbar .segment-modify-toolbar__backword {
    top: 0px;
    left: 24px;
    transform: rotate(180deg);
  }

  .segment-modify-toolbar .segment-modify-toolbar__clear {
    top: 0px;
    left: 0px;
  }
  .segment-modify-toolbar .segment-modify-toolbar__forward {
    top: 0px;
    left: 48px;
  }
</style>

<template>
<div class="segment-modify-toolbar" v-if="data.selected">
  <i class="material-icons segment-modify-toolbar__backword">forward</i>
  <i class="material-icons segment-modify-toolbar__clear">clear</i>
  <i class="material-icons segment-modify-toolbar__forward">forward</i>
</div><span
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
