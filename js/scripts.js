$(document).ready(function() {

  $("#quiz").submit(function(event) {
    var question1 = parseInt($("input:radio[name=q1]:checked").val());
    var question2 = parseInt($("input:radio[name=q2]:checked").val());
    var question3 = parseInt($("input:radio[name=q3]:checked").val());
    var question4 = parseInt($("input:radio[name=q4]:checked").val());
    var question5 = parseInt($("input:radio[name=q5]:checked").val());
    var result = question1 + question2 + question3 +  question4 + question5;

    console.log(result)

  if (result >= 7) {
      document.body.style.backgroundColor = "blue";
  } else if (result >= 5) {
    document.body.style.backgroundColor = "yellow";
  } else if (result >=3) {
    document.body.style.backgroundColor = "red";
  } else {
    document.body.style.backgroundColor = "black";
  }

$(".clickable0").click(function() {
  $(".element-hidden0").toggle();
  $(".element-showing0").toggle();

  event.preventDefault();
});
});
});
