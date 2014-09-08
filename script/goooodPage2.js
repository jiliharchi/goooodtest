 //top button 

          jQuery(document).ready(function() {
            var offset = 250;
            var duration = 400;
            jQuery(window).scroll(function() {
              if (jQuery(this).scrollTop() > offset) {
                jQuery('.back-to-topTrigger').fadeIn(duration);
              } else {
                jQuery('.back-to-topTrigger').fadeOut(duration);
              }
            });
            
            jQuery('.back-to-topTrigger').click(function(event) {
              event.preventDefault();
              jQuery('html, body').animate({scrollTop: 0}, duration);
              return false;
            })

          });


       //textbox

          $(document).ready(function(){         
            $(".floatTextBoxTrigger").click(function(){
              $("#popUpText").show();
              $("#container2").css({ opacity: 0.3 });
            });
          });
          
          
          
          $(document).mouseup(function (e)
          {
              var container = $("#popUpText");
              var container3 = $( "#registryText" );
              var container4 = $( "#keyWrongText" );
              var container5 = $( "#findkeyText" );
              var container6 = $( "#shareText" );

          if(container.is( ":visible" )){
              if (!$(".popUpHolder").is(e.target) // if the target of the click isn't the container...
                  && container.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  container.hide();
                  $("#container2").css({ opacity: 1 });
              }
            }

          else if(container3.is( ":visible" )){
              if (!$(".registryHolder").is(e.target) // if the target of the click isn't the container...
                  && container3.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  container3.hide();
                  $("#container2").css({ opacity: 1 });
              }
            }

          else if(container4.is( ":visible" )){
              if (!$(".keyWrongHolder").is(e.target) // if the target of the click isn't the container...
                  && container4.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  container4.hide();
                  $("#container2").css({ opacity: 1 });
              }
            }

          else if(container5.is( ":visible" )){
              if (!$(".findkeyHolder").is(e.target) // if the target of the click isn't the container...
                  && container5.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  container5.hide();
                  $("#container2").css({ opacity: 1 });
              }
            }


            else if(container6.is( ":visible" )){
              if (!$(".shareHolder").is(e.target) // if the target of the click isn't the container...
                  && container6.has(e.target).length === 0) // ... nor a descendant of the container
              {
                  container6.hide();
                  $("#container2").css({ opacity: 1 });
              }
            }

          });

          $( "#button2" ).click(function () {           
              $( "#popUpText" ).hide(); 
              $("#container2").css({ opacity: 1 });         
          });

   


         //header-light

         jQuery(document).ready(function() {
            var offset = 220;
            var duration = 200;
            jQuery(window).scroll(function() {

 

       if (jQuery(this).scrollTop() > offset){

  

           if($( "#sub-header-nav" ).is( ":hidden" )){
         
             jQuery('#header-light').fadeIn(duration).css({"position": "fixed"});
         
             $( "#header" ).hide();

         
             $("#header-light").mouseenter(function(){
                       $( "#header-light" ).hide();
                       $( "#header" ).css({"position": "fixed"}); 
                       $( "#header" ).slideDown( "slow" );                   
                     });

           }
         
           else if($( "#sub-header-nav" ).is( ":visible" )){
         
           }
         }
         
         else if(jQuery(this).scrollTop() <= offset){
           if($( "#sub-header-nav" ).is( ":hidden" )){
         
           $( "#header" ).show();
            $( "#header" ).css({"position": "relative"});
         
           jQuery('#header-light').fadeOut(duration).css({"position": "fixed"});
         
          }
         }




          });
        });

    


        //navibar

          $( ".naviShowMenu" ).click(function () {
            if ( $( "#sub-header-nav" ).is( ":hidden" ) ) {
              $( "#sub-header-nav" ).slideDown( "slow" );
              $( "#button" ).show();
              $( ".naviShowMenu" ).hide();
              $( ".floatTextBox" ).hide();
              $( "#header" ).css({"position": "fixed"});
            } 
          });

          $( "#button" ).click(function () {           
              $( "#sub-header-nav" ).slideUp( "slow" );
              $( "#button" ).hide();
              $( ".naviShowMenu" ).show();
              $( ".floatTextBox" ).show(); 
              $( "#header" ).css({"position": "relative"});          
          });


          // community

          $(".happening").mouseenter(function(){
              $( ".happening" ).css({"background-color": "#F4F4F4"});
              $( ".commTitle" ).css({"color": "#898989"});
            });

          $(".happening").mouseleave(function(){
              $( ".happening" ).css({"background-color": "white"});
              $( ".commTitle" ).css({"color": "#C9C9C7"});
            });




        //share

          $(document).ready(function(){         
            $("#shareTriggerB").click(function(){
              $("#shareText").show();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
            });
          });
          

          $( "#button6" ).click(function () {           
              $( "#shareText" ).hide(); 
              if ( $( "#sub-header-nav" ).is( ":visible" ) ) {
              $("#container2").css({ opacity: 1 });
              }
              else{
                $("#popUpText").show();
              }         
          });




          //registry

          $(document).ready(function(){         
            $(".registryTrigger").click(function(){
              $("#registryText").show();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
            });
          });
          

          $( "#button3" ).click(function () {           
              $( "#registryText" ).hide(); 
              if ( $( "#sub-header-nav" ).is( ":visible" ) ) {
              $("#container2").css({ opacity: 1 });
              }
              else{
                $("#popUpText").show();
              }         
          });


          //keyWrongText

          $(document).ready(function(){         
            $(".keyWrongTrigger").click(function(){
              $("#keyWrongText").show();
              $("#findkeyText").hide();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
            });
          });
          

          $( "#button4" ).click(function () {           
              $( "#keyWrongText" ).hide(); 
              if ( $( "#sub-header-nav" ).is( ":visible" ) ) {
              $("#container2").css({ opacity: 1 });
              }
              else{
                $("#popUpText").show();
              }          
          });





         //findkeyText

          $(document).ready(function(){         
            $(".findkeyTrigger").click(function(){
              $("#findkeyText").show();
              $("#keyWrongText").hide();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
            });
          });
          

          $( "#button5" ).click(function () {           
              $( "#findkeyText" ).hide(); 
              if ( $( "#sub-header-nav" ).is( ":visible" ) ) {
              $("#container2").css({ opacity: 1 });
              }
              else{
                $("#popUpText").show();
              }          
          });

          $( ".findkeyCancel" ).click(function () {           
              $( "#findkeyText" ).hide(); 
              if ( $( "#sub-header-nav" ).is( ":visible" ) ) {
              $("#container2").css({ opacity: 1 });
              }
              else{
                $("#popUpText").show();
              }          
          });
  




//AD Gallery


$('.advertise li:gt(0)').hide();

var cur = $('.advertise li').eq( 0 );
var interval;



$('.advertiseIndicator li').click(function() {
  stop();
    var index = $('.advertiseIndicator li').index(this);
    cur = $('.advertise li').eq( index );
    $('ul.advertise li').hide();
    cur.fadeIn( 50 );
   start() 
});


function forward() {
  cur.fadeOut( 1000 );
  if ( cur.index() == 4 )
    cur = $('.advertise li').eq( 0 );
  else
    cur = cur.next();
  cur.fadeIn( 1000 );

}


function stop() {
  clearInterval( interval );
}

function start() {
  interval = setInterval( "forward()", 3000 );
}



$(function() {
  start();
} );








// commLimit

$(".content-2-ln4Limit").text(function(index, currentText) {
  if(currentText.length > 35){
    return currentText.substr(0, 35) + '.....';
  }
});



// mark


$(document).ready(function() {
  $('#mark').click(function() {

     $('#markNum').text(parseInt($('#markNum').text()) + 1);

  });
})




 //gallery

   $(".gallerySelect").click(function() {

    $(".gallerySelect").css({
                                        'border': '2px solid white', 
                                    });
    jQuery(this).css({
                                        'border': '2px solid #5590C5', 
                                    });


    var src = jQuery(this).children("img").attr('src');

    $(".galleryView").children("img").attr('src',src);

   });


    $(".gallerySelect2").click(function() {

    $(".gallerySelect2").css({
                                        'border': '2px solid white', 
                                    });
    jQuery(this).css({
                                        'border': '2px solid #5590C5', 
                                    });


    var src = jQuery(this).children("img").attr('src');

    $(".galleryView2").children("img").attr('src',src);

   });



/*
    //comment Box

    $(function() {
    $("#userComm").keypress(function (e) {
        if(e.which == 13) {

          console.log($(this).val());
            //submit form via ajax, this is not JS but server side scripting so not showing here
            $(this).val("");
            e.preventDefault();
        }
    });
});
*/


// show all comments

$(document).ready(function(){         
            $("#showCommentsTrigger").click(function(){
              if($("#commExpand").is( ":visible" )){
                $("#commExpand").hide();
                $("#commShrink").show();
                $(".All-CHidden").slideDown( "slow" );
              }
              else{
                $("#commExpand").show();
                $("#commShrink").hide();
                $(".All-CHidden").slideUp( "slow" );
              }
              
            });
          });


$(".content-TitleTextAD").mouseenter(function(){
              $( ".content-TitleTextAD" ).css({"background-color": "#F4F4F4"});
              $( ".content-TitleTextADText" ).css({"color": "#595757"});
            });

 $(".content-TitleTextAD").mouseleave(function(){
              $( ".content-TitleTextAD" ).css({"background-color": "white"});
              $( ".content-TitleTextADText" ).css({"color": "#898989"});
            });


// input font change
$(document).ready(function(){         
            $("#userComm").click(function(){
              $(".userComm").css({
                                        'font-size': '14px',
                                        'color': '#898989', 
                                    });

            });
            });


//title adjust
if($(".content-T").height()<140){
  $(".content-TitleDetail").css("height", 144);
}


//Rate Up & Down



$('.markNum2').each(function(){

     var testValue = parseInt($( this ).text());

     if(testValue==0){
      $( this ).hide();
     }
     else{
      $( this ).show();
     }

});






$('.markUp').each(function(i,v){

  $( this ).click(function() {

    var img = jQuery($( this ).parent().find('.markUp')[0]).children("img");
    var img2 = jQuery($( this ).parent().find('.markDown')[0]).children("img");

    var src = (img.attr("src") === "img/up2.png")
               ? 'img/up.png'
               : 'img/up2.png';  
   
    img.attr("src", src);

    if(img.attr("src") == "img/up2.png"){

      $( this ).parent().find('.markNum2').text(parseInt($( this ).parent().find('.markNum2').text())+1);
      $( this ).parent().find('.markNum2').show();

      if(img2.attr("src") == "img/Down2.png"){
        img2.attr("src","img/Down.png");
         if(parseInt($( this ).parent().find('.markNum3').text())==1){

         $( this ).parent().find('.markNum3').text(parseInt($( this ).parent().find('.markNum3').text())-1);
         $( this ).parent().find('.markNum3').hide();
         }
         else{
           $( this ).parent().find('.markNum3').text(parseInt($( this ).parent().find('.markNum3').text())-1);
         }
      }
   
    } else{

     if(parseInt($( this ).parent().find('.markNum2').text())==1){

      $( this ).parent().find('.markNum2').text(parseInt($( this ).parent().find('.markNum2').text())-1);
      $( this ).parent().find('.markNum2').hide();
      }
      else{
        $( this ).parent().find('.markNum2').text(parseInt($( this ).parent().find('.markNum2').text())-1);
      }
    }
 

  });
});



$('.markNum3').each(function(){

     var testValue = parseInt($( this ).text());

     if(testValue==0){
      $( this ).hide();
     }
     else{
      $( this ).show();
     }

});






$('.markDown').each(function(i,v){

  $( this ).click(function() {

    var img = jQuery($( this ).parent().find('.markDown')[0]).children("img");
    var img2 = jQuery($( this ).parent().find('.markUp')[0]).children("img");

    console.log(img2);

    var src = (img.attr("src") === "img/Down2.png")
               ? 'img/Down.png'
               : 'img/Down2.png';  
   
    img.attr("src", src);

    if(img.attr("src") == "img/Down2.png"){

      $( this ).parent().find('.markNum3').text(parseInt($( this ).parent().find('.markNum3').text())+1);
      $( this ).parent().find('.markNum3').show();

      if(img2.attr("src") == "img/up2.png"){
        img2.attr("src","img/up.png");
         if(parseInt($( this ).parent().find('.markNum2').text())==1){

         $( this ).parent().find('.markNum2').text(parseInt($( this ).parent().find('.markNum2').text())-1);
         $( this ).parent().find('.markNum2').hide();
         }
         else{
           $( this ).parent().find('.markNum2').text(parseInt($( this ).parent().find('.markNum2').text())-1);
         }
      }

   
    } else{

     if(parseInt($( this ).parent().find('.markNum3').text())==1){

      $( this ).parent().find('.markNum3').text(parseInt($( this ).parent().find('.markNum3').text())-1);
      $( this ).parent().find('.markNum3').hide();
      }
      else{
        $( this ).parent().find('.markNum3').text(parseInt($( this ).parent().find('.markNum3').text())-1);
      }
    }
 

  });
});


 //Rate reply

 $('.markNum4').each(function(){

     var testValue = parseInt($( this ).text());

     if(testValue==0){
      $( this ).hide();
     }
     else{
      $( this ).show();
     }

});


$('.markReply').each(function(i,v){

  $( this ).mouseover(function() {

    var img = jQuery($( this ).parent().find('.markReply')[0]).children("img");
    var txt = jQuery($( this ).parent().find('.markReply')[1]);
    img.attr("src", "img/rpy.png");
    txt.css('font-weight', ' bold');
  });

$( this ).mouseleave(function() {

    var img = jQuery($( this ).parent().find('.markReply')[0]).children("img");
    var txt = jQuery($( this ).parent().find('.markReply')[1]);
    img.attr("src", "img/rpy2.png");
    txt.css('font-weight', ' normal');
  });

});