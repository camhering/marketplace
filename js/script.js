$(document).ready(function() {
  $("#blanks form").submit(function() {
    var nameInput = $("input#name").val();
    $(".name").text(nameInput);

    var streetInput = $("input#street").val();
    $(".street").text(streetInput);

    var cityInput = $("input#city").val();
    $(".city").text(cityInput);

    var stateInput = $("input#state").val();
    $(".state").text(stateInput);

    var zipInput = $("input#zip").val();
    $(".zip").text(zipInput);

    $("#receipt").show();

    event.preventDefault();
  });
});
