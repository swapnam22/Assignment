$(function() {
    var animationInterval; 
  
    function startAnimation() {
      $("#bars li .bar").each(function(key, bar) {
        var percentage = $(this).data('percentage');
        var originalHeight = percentage + '%';
  
        
        $(this).animate({
          'height': '0%'
        }, 0).delay(100 * key).animate({
          'height': originalHeight
        }, 800);
  
        
        var interval = setInterval(function() {
          $(bar).animate({
            'height': '0%'
          }, 800).delay(100 * key).animate({
            'height': originalHeight
          }, 800);
        }, 2000);
  
        
        $(bar).data('animationInterval', interval);
      });
    }
  
    function stopAnimation() {
      $("#bars li .bar").each(function(_, bar) {
        
        $(bar).stop(true, false);
        clearInterval($(bar).data('animationInterval'));
      });
    }
  
    function resetAnimation() {
      stopAnimation(); 
  
      
      $("#bars li .bar").stop().css('height', function() {
        return $(this).data('percentage') + '%';
      });
    }
  
    
    $('#startBtn').click(startAnimation);
    $('#stopBtn').click(stopAnimation);
    $('#resetBtn').click(resetAnimation);
  
    
    startAnimation();
  });
  function resetAnimation() {
    stopAnimation(); 
  
    
    var maxHeight = 0;
    $("#bars li .bar").each(function() {
      var percentage = $(this).data('percentage');
      var height = percentage + '%';
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
  
    
    $("#bars li .bar").stop().css('height', maxHeight);
  }


