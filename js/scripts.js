$(document).ready(function() {
  $("form#quiz").submit(function(event) {
    event.preventDefault();

    var faveprogram = $("input:radio[name=program]:checked").val();

  if ( faveprogram === "a") {
      document.body.style.backgroundColor = "blue";
  } else if (faveprogram === "b") {
    document.body.style.backgroundColor = "yellow";
  } else if (faveprogram === "c") {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "black";
  }

  $(document).ready(function() {
    $(".clickable0").click(function() {
      $(".element-hidden0").toggle();
      $(".element-showing0").toggle();
    });
  });

  });
});