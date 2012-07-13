Drupal.behaviors.xmlFormElementDatetimepicker = function(context) {
    $( "input.datetimepicker" ).datetimepicker({
	    changeMonth: true,
	    changeYear: true,
	    dateFormat: 'yy-mm-dd',
	    timeFormat: 'hh:mm:ss',
	    separator: 'T'
	});
}