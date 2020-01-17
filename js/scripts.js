$(document).ready(function() {
  $("#btn").click(function() {

$("#my-form").submit(function(event){});
  event.preventDefault();
  var textInput = $("#my-input").val();
  $(".h1").html(textInput);
});