$(document).ready(function() {
  $("form#inquiries").submit(function(event) {

      var rr = $('input[name=rr]:checked').val().toString();
      var wild = $('input[name=wild]:checked').val();
      var bacon = $('input[name=bacon]:checked').val();
      var temp = $('input[name=temp]:checked').val();

      if (rr === "relax") && ((wild === "adventure") || (wild === "party")) && ((bacon === "beaches") || (bacon === "museums")) && (temp === "hot") {
        $("#aruba").show();

      } else if ((rr === "rage") || (rr === "rage")) && ((wild === "adventure") || (wild === "party")) && (bacon === "museums") && (temp === "hot") {
        $("#cairo").show();

      } else if ((rr === "relax") || (rr === "rage")) && (wild === "adventure") && (bacon === "beaches") && (temp === "cold") {
        $("#alaska").show();

      } else if ((rr === "relax") || (rr === "rage")) && ((wild === "adventure") || (wild === "rage") && (bacon === "museums") && (temp === "cold") {
        $("#berlin").show();

      } else if (rr === "relax") && (wild === "adventure") && (bacon === "beaches") && (temp === "cold") {
        $("#nunavut").show();

      } else if ((rr === "relax") || (rr === "rage")) && (wild === "adventure") && (bacon === "beaches") && (temp === "hot") {
        $("#hawaii").show();

      } else {
        $("#lasvegas").show();
      }

  event.preventDefault();
  });
});
