// Main JS Function

$(document).ready(getstories);
function getstories(){
        $.getJSON('getAPI.php',function(jsonData){
            $.each(jsonData.list, function(key, val) {
                var output="<div id='stories' class='col-md-4 col-sm-4 mainnews-item'>";
                    output+="<a href='"+val.resolved_url+"' class='mainnews-link' data-toggle='modal' target='_blank'>";            
                    
                    if(val.has_image>0){
                        output+="<div class= 'title img-responsive'>";
                        output+="<img src='"+val.image.src+"' class='img-responsive storyimg' alt='Article Image' style='border-radius: 20px;'>";
                    }
                    else{
                        output+="<div class= 'title img-responsive'>";
                        output+="<img src='img/PLogoBlueSoft.png' class='img-responsive storyimg' alt='Article Image' style='border-radius: 20px;'>";
                    }
                    output+="<div id='colorsquare' class='color img-responsive'><h4 class='title'>"+val.resolved_title+"</h4>";
                    output+="</div>";
                    output+="<div class='mainnews-hover'>";
                    output+="<div class='mainnews-hover-content'>";
                    output+="<p class='excerpt'>"+ val.excerpt +"</p>";
                
                    output+="</div>";
                    output+="</div>";
                    output+="<div class='mainnews-caption'>";
                    output+="</div>";
                    output+="</div>";
                    output+="</a>";
                    
                    $("#news").append(output);
            

            });
            
            var maxlength = 145;
            $('p.excerpt').text(function (_, text) {
            return $.trim(text).substring(0, maxlength)+"...";
            });
            var maxlength2 = 78;
            $('h4.title').text(function (_, text) {
            return $.trim(text).substring(0, maxlength2);
            });

            

            var safeColors = ['AD4738','CB6827','6A6B5D','008F7D','','',''];
            //var safeColors = ['94322D','65344A','49635A','575B2A','',''];
            
            var rand = function() {
                return Math.floor(Math.random()*7);
            };
            
            var randomColor = function() {
                var c = safeColors[rand()];
                return "#"+c;
            };
                    
            $('[id=colorsquare]').each(function() {
                $(this).css('background',randomColor());
            });

        });
}

// jQuery for arrow hover

$(document).ready(function(){
    $('.arrow').hover(
        function() {
            $('.arrow').addClass('pulse-grow');
        },
        function() {
            $('.arrow').removeClass('pulse-grow');
    });
});
$(document).ready(function(){
    $('.below').hover(
        function() {
            $('.below').addClass('pulse-grow');
        },
        function() {
            $('.below').removeClass('pulse-grow');
    });
});
$(document).ready(function(){
    $('.contactLink1').hover(
        function() {
            $('.contactLink1').addClass('pulse-grow');
        },
        function() {
            $('.contactLink1').removeClass('pulse-grow');
    });
});
$(document).ready(function(){
    $('.contactLink2').hover(
        function() {
            $('.contactLink2').addClass('pulse-grow');
        },
        function() {
            $('.contactLink2').removeClass('pulse-grow');
    });
});

// jQuery for page scrolling feature

$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();

    });

});

// Animation

animationHover('.img-logo-1','pulse');

function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 200);
    }
  );
};


// Mobile NavBar Slide

$(document).ready(function () {
    slider();
});

$(window).scroll(function () {
    slider();
});

function slider() {
    if (document.body.scrollTop > 300)
        $('#slider').stop().animate({"margin-top": '0', "opacity": '1'}, 200);
    else
        $('#slider').stop().animate({"margin-top": '-60', "opacity": '.2'}, 200);
}


// Highlight the top nav as scrolling occurs

$('body').scrollspy({
    target: '.navbar-fixed-top'
})
