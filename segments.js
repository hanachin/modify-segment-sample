var _ = require('underscore');

module.exports.generateSampleSegments = function () {
  return _.times(30, function (n) {
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
};
