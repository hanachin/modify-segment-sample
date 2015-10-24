// app.vue
<style>
  .segments {
    width: 640px;
    height: 100%;
    border: 1px solid #EEE;
    overflow: scroll;
  }
</style>

<template>
<pre class="segments">
  <segment v-for="s in segments" :segment="s">
</pre>
</template>

<script>
  var _ = require('underscore');
  var segmentComponent = require('./segment.vue');
  var generateSampleSegments = require('./generateSampleSegments.js')

  var segments = generateSampleSegments();

  segments = _.map(segments, function (s) {
    return {
      text: s.text,
      id: s.id,
      selected: false
    };
  });

  module.exports = {
    components: {
      segment: segmentComponent
    },
    data: function () {
      return {
        segments: segments,
        selectedSegment: null
      }
    },
    events: {
      "segment-selected": function (segmentView) {
        if (this.$get('selectedSegment')) {
          this.$get('selectedSegment').$set('selected', false);
        }
        this.$set('selectedSegment', segmentView)
        segmentView.$set('selected', true);
      }
    }
  }
</script>
