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



    function colors() {
    $(this).css({'background':'#DBA8A0'});
  }

  $('.square').on('mouseover', colors);
});
