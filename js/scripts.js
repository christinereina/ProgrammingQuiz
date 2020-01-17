$(document).ready(function() {
  $("#btn").click(function() {
    var program = $("input:radio[name=program]:checked").val();

  if (program === "a") {
      document.body.style.backgroundColor = "blue";
  } else if (program === "b") {
    document.body.style.backgroundColor = "yellow";
  } else if (program === "c") {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "black";
  }
  event.preventDefault();
  });
});