// gradual change

var mixture = require('..');

var color1 = new mixture.Color('cyan'),
    color2 = new mixture.Color('#111'),
    ratio = 0.1,
    html = '',
    text = '&nbsp;&nbsp;&nbsp;';

while (ratio <= 1.0) {
    var mix_color = color1.mix(color2, ratio);
    html += '<span style=\"background-color:' +mix_color.toString()+ '\">' + text + ratio.toFixed(2) + text + '</span>';
    ratio += 0.1;
}

console.log(html);
