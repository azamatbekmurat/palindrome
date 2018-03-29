//back-end


//user interface
$(document).ready(function() {
  $("form#palindrome").submit(function(event) {
    event.preventDefault();

    var newWord = [];
    var inputWord = $("input#word").val();
    var letters = inputWord.split("");

    for (var i=letters.length-1; i >= 0; i--) {
      newWord.push(letters[i]);
    }

// NOT DONE YET!!!!

    if (newWord.toString() === letters.toString()) {
      $("#answer").text("yes, your input is palindrome");
    } else {
      $("#answer").text("no, your input is not palindrome");
    }

    console.log(newWord);
    console.log(letters);

    $("#result").show();

  });
});
