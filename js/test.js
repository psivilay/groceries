$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    $("form#list").hide();

    var items = ["input1", "input2", "input3", "input4", "input5", "input6", "input7"];
    var newItems = [];

    items.forEach(function(item) {
      var userInput = $("#" + item).val();
      if (userInput === "") {
        alert("Houston we have a blank. It shall be removed.");
      } else {
        newItems.push(userInput);
      }
    });

    var capitalizedItems = newItems.map(function(capItem) {
      return capItem.toUpperCase();
    });

    capitalizedItems.sort();

    capitalizedItems.forEach(function(finalitem) {
      $("#show-list ul").append("<li>" + finalitem + "</li>");
    });

    $("#show-list").show();

  });
});
