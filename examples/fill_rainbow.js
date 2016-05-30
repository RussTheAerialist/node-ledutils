var leds = require('../index');
var colors = new Array(5);
leds.fill_rainbow({
  arr: colors,
  initialHue: 0,
  hueDelta: 45
});
colors.forEach((v) => {
  var hex = v.hex().substring(1);
  console.log(`![color ${hex}](http://placehold.it/35/${hex}/000000)`);
});
