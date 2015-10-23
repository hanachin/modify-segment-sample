// app.vue
<style>
  .segments {
    width: 640px;
  }
</style>

<template>
<pre class="chars">
  <char v-for="c in chars" :data="c">
</pre>
</template>

<script>
  var _ = require('underscore');
  var charComponent = require('./char.vue');
  var segments = require('./segments.js')

  var segments = segments.generateSampleSegments();

  var chars = _.flatten(_.map(segments, function (s) {
    return _.map(s.text.split(''), function(c) {
      return {char: c, id: s.id, selected: false, nextChar: null, prevChar: null};
    });
  }));

  _.each(chars, function (char, index, chars) {
    if (chars[index+1]) {
      char.nextChar = chars[index+1];
    }
    if (chars[index-1]) {
      char.prevChar = chars[index+1];
    }
  })

  var segmentsIds = _.uniq(_.pluck(segments, 'id'));

  module.exports = {
    components: {
      char: charComponent
    },
    data: function () {
      return {
        chars: chars,
        segmentsIds: segmentsIds
      }
    },
    events: {
      "char-selected": function (id) {
        _.each(this.$get('chars'), function (s) {
          s.selected = (s.id == id);
        });
      }
    }
  }
</script>
