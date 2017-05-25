$(window).bind("load", function() {
          var vpw = $(window).width();
          if (vpw<600) {
            $(‘.console’).css("flex-basis", '85%');
          }
      });
      $(document).ready(function(){
        var vpw = $(window).width();
          if (vpw<600) {
            $(‘.console’).css("flex-basis", '85%');
          }
      });

      $(window).resize(function(){
        var vpw = $(window).width();
          if (vpw<800) {
            $(".console").css("flex-basis", '85%');
          }
      });