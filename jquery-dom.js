function invertColor(hexTripletColor) {
  var color = hexTripletColor;
  color = color.substring(1);           // remove #
  color = parseInt(color, 16);          // convert to integer
  color = 0xFFFFFF ^ color;             // invert three bytes
  color = color.toString(16);           // convert to hex
  color = ("000000" + color).slice(-6); // pad with leading zeros
  color = "#" + color;                  // prepend #
  return color;
}

function rgb2hex(rgb){
  rgb = rgb.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);
  return (rgb && rgb.length === 4) ? "#" +
  ("0" + parseInt(rgb[1],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[2],10).toString(16)).slice(-2) +
  ("0" + parseInt(rgb[3],10).toString(16)).slice(-2) : '';
}

$(document).ready(function(){
  var color;

  $('div').each(function(index, element){
    var randoms = [];
    for (var i = 1; i<=3; i++){
      randoms.push(Math.floor(Math.random()*255));
    }
    //   console.log(randoms);
    // var rgbNumbers = randoms.join(' ');

    color = 'rgb(' + randoms.join(', ') + ')';
    console.log(color);

    $(element).css('background-color', color);
  });

  $('div').on('click', function(){
    console.log('clicked');
    var hex = rgb2hex(color);
    console.log(hex);
    $(this).css('background-color', invertColor(hex));
  });

});
