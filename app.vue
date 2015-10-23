// app.vue
<style>
  .segments {
    width: 640px;
  }
</style>

<template>
<pre class="segments">
  <segment v-for="s in segments" :data="s">
</pre>
</template>

<script>
  var _ = require('underscore');
  var segmentComponent = require('./segment.vue');
  var segments = require('./segments.js')

  var segments = segments.generateSampleSegments();

  module.exports = {
    components: {
      segment: segmentComponent
    },
    data: function () {
      return {
        segments: segments
      }
    },
    events: {
      "segment-selected": function (id) {
        _.each(this.$get('segments'), function (s) {
          s.selected = (s.id == id);
        });
      }
    }
  }
</script>
