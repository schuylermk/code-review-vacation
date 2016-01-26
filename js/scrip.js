$(document).ready(function() {
  $("form#questions").submit(function(event) {


    var rr = $('input[name=rr]:checked').val();
    var wild = $('input[name=wild]:checked').val();
    var bacon = $('input[name=bacon]:checked').val();
    var temp = $('input[name=temp]:checked').val();


    if(((rr === "relax") && (wild === "adventure") && (bacon === "beaches") && (temp === "hot")))  {
      $("#aruba").show();
    } else if(((rr === "relax") && (wild === "party") && (bacon === "beaches") && (temp === "hot")))  {
    $("#aruba").show();
    } else if(((rr === "rage") && (wild === "adventure") && (bacon === "museums") && (temp === "hot")))  {
    $("#aruba").show();
    } else if(((rr === "relax") && (wild === "party") && (bacon === "beaches") && (temp === "cold")))  {
    $("#alaska").show();
    } else if(((rr === "rage") && (wild === "adventure") && (bacon === "beaches") && (temp === "cold")))  {
    $("#alaska").show();
    } else if(((rr === "rage") && (wild === "party") && (bacon === "beaches") && (temp === "cold")))  {
    $("#alaska").show();
    } else if(((rr === "relax") && (wild === "party") && (bacon === "museums") && (temp === "cold")))  {
    $("#berlin").show();
    } else if(((rr === "relax") && (wild === "adventure") && (bacon === "museums") && (temp === "cold")))  {
    $("#berlin").show();
    } else if(((rr === "rage") && (wild === "party") && (bacon === "museums") && (temp === "cold")))  {
    $("#berlin").show();
    } else if(((rr === "relax") && (wild === "adventure") && (bacon === "museums") && (temp === "hot")))  {
    $("#cairo").show();
    } else if(((rr === "relax") && (wild === "party") && (bacon === "museums") && (temp === "hot")))  {
    $("#cairo").show();
    } else if(((rr === "rage") && (wild === "party") && (bacon === "museums") && (temp === "hot")))  {
    $("#cairo").show();
    } else if(((rr === "rage") && (wild === "adventure") && (bacon === "beaches") && (temp === "hot")))  {
    $("#hawaii").show();
    } else if(((rr === "rage") && (wild === "party") && (bacon === "beaches") && (temp === "hot")))  {
    $("#lasvegas").show();
    } else if(((rr === "relax") && (wild === "adventure") && (bacon === "beaches") && (temp === "cold")))  {
    $("#nunavut").show();
    } else {
    return false;
    }

  event.preventDefault();
  });
});
