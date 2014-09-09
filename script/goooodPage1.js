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
              var container4 = $( "#ValiText" );
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
              if (!$(".ValiHolder").is(e.target) // if the target of the click isn't the container...
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
            $("#shareTrigger").click(function(){
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
            $("#registryTrigger1").click(function(){
              $("#registryText").show();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
            });

            $("#registryTrigger2").click(function(){
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






          //ValiText

document.getElementById("keyValiTrigger1").onclick = function() {
    document.getElementById("login1").submit();
}

document.getElementById("keyValiTrigger2").onclick = function() {
    document.getElementById("login2").submit();
}


var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;


function validate(form){

 var email = form.email.value;
 var password = form.password.value;
 var errors = [];
 
console.log(email);
  
 if (ck_email.test(email) && ck_password.test(password)) {
  console.log("Great");
 }
 else {
  NotRight();
 }

}


          //if not right

function NotRight(){

          $(document).ready(function(){         
              $("#ValiText").show();
              $("#findkeyText").hide();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
          });       

}



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
              $("#ValiText").hide();
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


/*
// max content height
jQuery('#contentHolder > .all-pages').each(function() {
  console.log(jQuery(this).height());
    jQuery(this).parent().height('+=' + jQuery(this).height()*92);
    jQuery(this).css('position', 'absolute');
});
*/
