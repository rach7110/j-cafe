// alert("This is a test");

$(document).ready(function() {
  // grab the 'select' elements' container,'form' will do nicely
  $('form').
    // `on` lets us specify 3 things:
    // the event we are watching for ('change'),
    // the element we are watching on ('select'), and
    // the function to call when the element changes - an anonymous function, here
    on('change', 'select', function(){
      var newdropdown=$('form').find('div').first().html(); //grabbing the first <div> tag from the <form>. Includes the <select> tag with all its <options> and <optgroup>.  
      $('form').append('<div>' + newdropdown + '</div>');

      //Updating the order qty: 
      var x=0;
      x+=1;
      $('dd#drinks').text(x);

      // Another way to update the order quantity (w/o setting a var):
      // $('dd#drinks').text($('select').length - 1);

      //Update the total cost:
      var totalcost=0;
      $('select').each(function(){
        price = $(this.options[this.selectedIndex]).data('price');
        if ($.isNumeric(price)){
          totalcost +=$(this.options[this.selectedIndex]).data('price')
        }
        $('#cost').text('$' + (totalcost/100).toFixed(2));
      });
      // Adding a 'Submit' button:
      cost = {cost: totalcost}
      $('.button').click(function(event){
        event.preventDefault(); //cancels default action/event (otherwise, browser jumps to the page before code appears)
        $('#submit_btn').hide();
        $.post('/shop', cost, function(responseText){
          responseText="Thanks! Your order will be ready in 10 minutes."
          $('.response').append(responseText);
        });
      });
    }); 
});