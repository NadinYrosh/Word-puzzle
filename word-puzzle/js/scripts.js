$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var sentence = $("#input").val().split("");
    var vowels = ["a", "e", "i", "o", "u", "y"];
    var newSentence = [];
    for (var letter = 0; letter < sentence.length; letter++) {
      for (var index = 0; index < vowels.length; index++) {
        if (vowels[index] === sentence[letter]) {
          newSentence.push("-");
          letter++;
        }
      }
      newSentence.push(sentence[letter]);
    }
    newSentence.join();
    $("#input").hide();
    $(".output").append(newSentence);
    console.log(newSentence);
  });
});
