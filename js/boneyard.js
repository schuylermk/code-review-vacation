

    $('input[type="checkbox"]').on('change', function() {
      $('input[name="' + this.name + '"]').not(this).prop('checked', false);



      <!-- <div class="form-group">
        <form id="rr">
          <label for="activity">Do you feel like having a <em>relaxing</em> trip, or do you want to <em>rage?</em></label>
          <div class="radio">
            <label>
              <input type="radio" name="activity" id="relax" value="relax">
              Aahhh, soothing...
            </label>


            <label>
              <input type="radio" name="passport" id="rage" value="rage">
              Waaooooooo!
            </label>
          </div>
        </form>
      </div> -->  
