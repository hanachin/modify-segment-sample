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

  var segments = _.times(30, function (n) {
    var text = _.times(_.random(30, 50), function () {
      if (_.random(0, 100) > 99) {
        return String.fromCharCode(0x0A);
      } else {
        return String.fromCharCode(_.random(0x61, 0x7a));
      }
    }).join('');

    return {
      text: text,
      id: n,
      selected: false
    };
  });

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
