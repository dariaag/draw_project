var size = 16;
var $row = $('<div class="row"></div>');
var $square = $('<div class="square"></div>');


$(document).ready(function () {





  function drawGrid(){

    for(var i = 0; i < (size); i++) {

      $('#wrapper').append($row.clone());
    }

    for(var i = 0; i < (size); i++) {

      $('.row').append($square.clone());
    }

    var ratio = 100/size;
    //ratio = ratio - (ratio * .01);

    $('.row').css({'height': ratio + '%'});

    $('.square').css({'width': ratio + '%'});

  }
  drawGrid();

  $('#size').on('click', function(){
    $('.row').remove();
    size = +prompt('How many squares?');
    if(size<=0){
      size = 1;
    }
    // $('.row').remove();


    drawGrid();
    $('.square').on('mouseover', colors);
  });



  $('#reset').on('click', resetColor);


  function resetColor() {
    $('.square').css({'background': 'white'});
    drawGrid();
    $('.square').on('mouseover', colors);
  }



  //get random integer
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function colors() {
    var colorList = ['#DBA8A0','#CED7DB','#DDE0E8','#776B76'];
    var backgroundColor = colorList[getRandomInt(0, colorList.length)];
    $(this).css({'background': backgroundColor});
  }

  $('.square').on('mouseover', colors);

});
