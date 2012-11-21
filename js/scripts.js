$(document).ready(function(){  
  $('.button').click(function() {
    $(".ajax").load("test.php .box-1", 's=' + Math.random() , function(a, b, c) {
      console.log('ajax');
    });

    /*$('.log blink').ajaxSuccess(function() {
      $(this).text('Triggered ajaxSuccess handler.');
    });*/

    $('.log blink').ajaxStart(function() {
      $(this).text('Ajax started.');      
    });

    $('.log blink').ajaxStop(function() {
      $(this).text('Ajax stopped.');
    });

  })
}); 