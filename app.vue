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
クリックして選択、←で左に伸ばす→で右に伸ばす、↑ or kで前の部分に移動、↓ or jで次の部分に移動。
<pre
  class="segments"
  @keydown.left.prevent="expandLeft"
  @keydown.right.prevent="expandRight"
  @keydown.up.prevent="backword"
  @keydown.down.prevent="forward"
  @keydown.75.prevent="backword"
  @keydown.74.prevent="forward"
  tabindex="0">
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
      selected: false,
      index: null,
      selected: false
    };
  });

  _.each(segments, function(segment, index, segments) {
    segment.index = index;
  });

  module.exports = {
    el: '#app',
    components: {
      segment: segmentComponent
    },
    computed: {
      selectedSegment: function() {
        return this.segments[this.selectedSegmentIndex];
      },
      prevSegment: function() {
        return this.segments[this.selectedSegmentIndex - 1];
      },
      nextSegment: function() {
        return this.segments[this.selectedSegmentIndex + 1];
      }
    },
    data: function () {
      return {
        segments: segments,
        selectedSegmentIndex: null,
        selectedSegment: null
      }
    },
    methods: {
      expandRight: function (e) {
        if (this.nextSegment) {
          var nextText = this.nextSegment.text;
          this.selectedSegment.text = `${this.selectedSegment.text}${nextText[0]}`;
          this.nextSegment.text = nextText.substr(1);
        }
        return false;
      },
      expandLeft: function (e) {
        if (this.prevSegment) {
          var prevText = this.prevSegment.text;
          this.selectedSegment.text = `${prevText.slice(-1)}${this.selectedSegment.text}`;
          this.prevSegment.text = prevText.slice(0, -1);
        }
        return false;
      },
      backword: function () {
        if (!this.prevSegment) return;

        this.selectedSegment.selected = false;
        this.prevSegment.selected = true;
        this.selectedSegmentIndex -= 1;
      },
      forward: function () {
        if (!this.nextSegment) return;

        this.selectedSegment.selected = false;
        this.nextSegment.selected = true;
        this.selectedSegmentIndex += 1;
      }
    },
    events: {
      "segment-selected": function (segment) {
        if (this.selectedSegment) {
          this.selectedSegment.selected =  false;
        }
        this.selectedSegmentIndex = segment.index;
        this.selectedSegment.selected = true;
      }
    }
  }
</script>
