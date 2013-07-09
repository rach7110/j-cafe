function generate_blank_drink_order() {
  return '<br /><select name="drink[]">' +
    $('select').first().parent().html() +
  '</select>';
}

$(document).ready(function() {

  // We want to watch for the customer to add a drink to their order
  // Every time they do, we want to give them another empty order option they can add
  // This way, they can add an unlimited number of drinks to their order

  // This weird 'change' syntax grabs all select tags,
  // even ones we haven't created yet
  $('form').on('change', 'select', function(){

    // Update total number of drinks (each select tag is one drink)
    $('#drinks').text(
      $('select').length
    );

    // Add another empty drink to the order
    $(this).parent().append(
      generate_blank_drink_order()
    );
  });
});
