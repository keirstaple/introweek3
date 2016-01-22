var wrongInput = function(userNumber) {
  if (userNumber <= 0) {
		return "Please enter a number greater than 0";
	}
};

var countUpTo = function(userNumber) {
  var emptyArray = [];
    for (var i =1; i <= userNumber; i++){
      if (i % 5 === 0 && i % 3 === 0) {
        emptyArray.push('pingpong');
      } else if (i % 5 === 0){
        emptyArray.push('pong');
      } else if (i % 3 === 0){
        emptyArray.push('ping');
      } else if (i % 1 === 0){
        emptyArray.push(i);
      } else {
        wrongInput(userNumber)
      }
    }
    return emptyArray;
};


$(document).ready(function() {
  $("form").submit(function(event) {
    debugger;
    var userNumber = parseInt($("input#UpTo").val());

    var result = countUpTo(userNumber)
		 	result.forEach(function(number) {
				$(".listofresults").append("<li>" + number + "</li>");
			});

    var invalid = wrongInput(userNumber);


	$("#result").show();
  $(".invalid").text(invalid)
  event.preventDefault();
  });
});
