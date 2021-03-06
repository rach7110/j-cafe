// alert("This is a test");

$(document).ready(function() {

  var drinks=0;
  // grab the 'select' elements' container,'form' 
  $('#new_btn').hide();
  $('form').
    // `on` event lets us specify 3 things:
    // the event we are watching for ('change'),
    // the element we are watching on ('select'), and
    // the function to call when the element changes - an anonymous function, here
    on('change', 'select', function(){
      var newdropdown=$('form').find('div').first().html(); //grabbing the first <div> tag from the <form>. Includes the <select> tag with all its <options> and <optgroup>.  
      $('form.drinks').append('<div>' + newdropdown + '</div>');

      //Updating the order qty: 

      drinks+=1;
      $('dd#drinks').text(drinks);

      // Another way to update the order quantity (w/o setting a var):
      // $('dd#drinks').text($('select').length - 1);

      // // Tax calculation:
      // $('#taxes').load('/taxes', $('form').serialize());

      //Update the total cost:
      var totalcost=0;
      $('select').each(function(){
        price = $(this.options[this.selectedIndex]).data('price');
        if ($.isNumeric(price)){
          totalcost +=$(this.options[this.selectedIndex]).data('price')
        }
        $('#cost').text('$' + (totalcost/100).toFixed(2));
        cost = {cost: totalcost}
      });

      // Adding a 'Submit' button:
      $('.button').click(function(event){
        event.preventDefault(); //cancels default action/event (otherwise, browser jumps to the page before code appears)
        $.post('/shop', cost, function(responseText){
          $('.response').html('<h2>' + responseText + '</h2>')
        });
        // Hide form to prevent useres from altering the order after submitting
        $('form.drinks').hide();
        // Hide message: "What would you like to drink"
        $('.panel h2').hide();
        $('#new_btn').show();
      });
    });
});