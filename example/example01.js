var mixture = require('..');

var color1 = new mixture.Color('#000');
var color2 = new mixture.Color('#fff');

console.log(color1.r); // 0
console.log(color1.g); // 0
console.log(color1.b); // 0
console.log(color1.a); // 1
console.log(color1);   // Color { r: 0, g: 0, b: 0, a: 1 }
console.log(color2);   // Color { r: 255, g: 255, b: 255, a: 1 }

var mix_color = color1.mix(color2, 0.1);
console.log(mix);              // Color { r: 26, g: 26, b: 26, a: 1 }
console.log(mix.toString());   // #1a1a1a

mix = color1.mix(color2, 0.5);
console.log(mix);              // Color { r: 128, g: 128, b: 128, a: 1 }
console.log(mix.toString());   // #808080