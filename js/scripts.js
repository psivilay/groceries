$(document).ready(function() {
  $("form#list").submit(function(event) {
    event.preventDefault();

    $("form#list").hide();

    var items = ["input1", "input2", "input3", "input4", "input5", "input6", "input7"];
    var newItems = [];

    items.forEach(function(item) {
      if (item === "") {
        items.splice(item);
      } else {
        var userInput = $("#" + item).val();
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
