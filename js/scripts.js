$(function() {
  $("h4").click(function() {
    alert("Don't delay! Fill in below, and get away!");
  });

  $("#person").click(function() {
    alert("Put your name here!");
  });

  $("#activity").click(function() {
    alert("Do you want to RELAX to the max, or RAGE out of your cage?!!");
  });

  $("#weather").click(function() {
    alert("While you're there, do you care- WARM wind in your hair, or  do you dare for the COOLER air??");
  });

  $('input[type="checkbox"]').on('change', function() {
    $('input[name="' + this.name + '"]').not(this).prop('checked', false);
  });

});
