
// Change these to be tooltips/hover, not alerts.

  // $("h4").click(function() {
  //   alert("Don't delay! Fill in below, and get away!");
  // });
  //
  // $("#person").click(function() {
  //   alert("Put your name here!");
  // });

  // $("#activity").hover(function() {
  //   alert("Do you want to RELAX to the max, or RAGE out of your cage?!!");
  // });

  // $("#weather").click(function() {
  //   alert("While you're there, do you care- WARM wind in your hair, or do you dare for COOLER air??");
  // });
// $(document).ready(function() {
  $(".btn").submit(function(event) {
    var checked = [];
    $("input[name='activity']:checked").each(function () {
      checked.push($(this).val());

    $('input[type="checkbox"]').on('change', function() {
      $('input[name="' + this.name + '"]').not(this).prop('checked', false);

      // event.preventDefault();
    });

  });
});




// var Berlin = $("input[name=rage]:checked").val();
// var Aruba = $("input[:checked").val();
// var Hawaii = $("input[]:checked").val();
// var Cairo = $("input[]:checked").val();
// var Nunavut = $("input[]:checked").val();
// var Moscow = $("input[]:checked").val();
// var Alaska = $("input[]:checked").val();
// var LasVegas = $("input[]:checked").val();





// Based on input the user will be shown where they should holiday.
// $('p').append('New last sentence of the paragraph.');
