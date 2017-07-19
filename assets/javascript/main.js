$(document).ready(function() { 
    // Using default configuration 

     // Using custom configuration 
    $('#carousel').carouFredSel({ 
        items                : 2, 
        direction            : "up", 
        scroll : { 
            items            : 1, 
            easing           : "elastic", 
            duration         : 1000, 
            pauseOnHover     : true 
        } 
    }); 
}); 
// $(window).scroll(function(){
//   var top = $(window).scrollTop();
//   if(top > 60) {
//     $("header").addClass('secondry-dark-blue-bg');
//   }

//   else
//     if($("header").hasClass('secondary-dark-blue-bg')){
//       $("header").removeClass('secondary-dark-blue-bg');
//     }
// });
$('#main').stellar();