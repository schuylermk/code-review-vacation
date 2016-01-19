$(document).ready(function() {
  $(".inquiries").submit(function(event) {

  var rr = $('input[name=relax]:checked').val();
  var wild = $('input[name=wild]:checked').val();
  var bacon = $('input[name=bacon]:checked').val();
  var temp = $('input[name=temp]:checked').val();

  if (rr === "relax") {
    if ((wild === "adventure") || (wild === "party")) {
      if (bacon === "beaches") {
        if (temp === "hot") {
    $("#aruba").show(); /* Find adventure under the sea, and in the dining room! */
        }
      }
    }
  } else if (rr === "rage") {
    if (wild === "adventure") {
      if (bacon === "museums") {
        if (temp === "hot") {
    $("#aruba").show();
        }
      }
    }
  }
  if (rr === "relax") {
    if ((wild === "adventure") || (wild === "party")) {
      if (bacon === "museums") {
        if (temp === "hot") {
    $("#cairo").show(); /* Find adventure under the sea, and in the dining room! */
        }
      }
    }
  } else if (rr === "rage") {
    if (wild === "party") {
      if (bacon === "museums") {
        if (temp === "hot") {
    $("#cairo").show();
        }
      }
    }
  }
  if (rr === "relax") {
    if ((wild === "adventure") || (wild === "party")) {
      if (bacon === "beaches") {
        if (temp === "cold") {
    $("#alaska").show(); /* Find adventure under the sea, and in the dining room! */
        }
      }
    }
  } else if (rr === "rage") {
    if (wild === "adventure") {
      if (bacon === "beaches") {
        if (temp === "cold") {
    $("#alaska").show();
        }
      }
    }
  }
  if (rr === "relax") {
    if ((wild === "adventure") || (wild === "party")) {
      if (bacon === "museums") {
        if (temp === "cold") {
    $("#berlin").show(); /* Find adventure under the sea, and in the dining room! */
        }
      }
    }
  } else if (rr === "rage") {
    if (wild === "party") {
      if (bacon === "museums") {
        if (temp === "cold") {
    $("#berlin").show();
        }
      }
    }
  }
  if (rr === "relax") {
    if (wild === "adventure") {
      if (bacon === "beaches") {
        if (temp === "cold") {
    $("#nunavut").show();
        }
      }
    }
  }
  if (rr === "rage") {
    if (wild === "adventure") {
      if (bacon === "beaches") {
        if (temp === "hot") {
    $("#hawaii").show();
        }
      }
    }
  }
  if (rr === "rage") {
    if (wild === "party") {
      if (bacon === "beaches") {
        if (temp === "hot") {
    $("#lasvegas").show();
        }
      }
    }
  }
  if (rr === "rage") {
    if (wild === "adventure") {
      if (bacon === "museums") {
        if (temp === "cold") {
    $("#moscow").show();
        }
      }
    }
  }
}
// }else if (rr === "relax") || (wild === "party") {
//   if (wild === "adventure") {
//     if (bacon === "museums")
//       if (temp === "hot") {
//   $("#aruba").show();
//
//
//   } else if (rr === "rage") && (wild === "adventure") && (bacon === "beaches") && (temp === "hot") {
//     $("#hawaii").show();
//     } else if (rr === "rage") && (wild === "party") && (bacon === "beaches") && (temp === "hot") {
//       $("#lasvegas").show(); /* When you take the party to the sand, you can enjoy both natural artificial beaches galore */
//       } else if (rr === "relax") && (wild === "adventure") && (bacon === "beaches") || (bacon === "museums") && (temp === "hot") {
//         $("#cairo").show(); /* Find adventure under the sea, and in the dining room! */
//       } else if
