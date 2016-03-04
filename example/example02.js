var mixture = require('..');

var color1 = new mixture.Color('#111'),
    color2 = new mixture.Color('#fff'),
    ratio = 0.1,
    html = '',
    text = '&nbsp;&nbsp;';

while (ratio <= 1.0) {
    var mix_color = color1.mix(color2, ratio);
    html += '<span style=\"background-color:' +mix_color.toString()+ '\">' + text + '</span>';
    ratio += 0.1;
}

console.log(html);
