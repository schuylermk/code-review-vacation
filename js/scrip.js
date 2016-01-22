$(document).ready(function() {
  $("form#questions").submit(function(event) {

    var rr = $('input[name=rr]:checked').val();
    var wild = $('input[name=wild]:checked').val();
    var bacon = $('input[name=bacon]:checked').val();
    var temp = $('input[name=temp]:checked').val();


    if(((rr === "relax") && (wild === "adventure") && (bacon === "beaches") && (temp === "hot")))  {
      alert("hey");
      $("#aruba").show();

    }
  event.preventDefault();
  });
});
