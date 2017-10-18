var rows = 8; //make it so user chooses
var columns = 8;
var $row = $("<div />", {
    class: 'row'
});
var $square = $("<div />", {
    class: 'square'
});

$(document).ready(function () {
    //add columns to the the temp row object
    for (var i = 0; i < columns; i++) {
        $row.append($square.clone());
    }
    //clone the temp row object with the columns to the wrapper
    for (var i = 0; i < rows; i++) {
        $("#wrapper").append($row.clone());
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
