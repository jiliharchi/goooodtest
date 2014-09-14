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

          $( ".naviShowMenuTrigger" ).click(function () {
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



//subsribe

document.getElementById("subscribeTrigger").onclick = function() {
  var subscribeIDV = document.getElementById("subscribeID").value;
    document.getElementById("subscribe").submit();
}



          //registry

document.getElementById("regitConfirm").onclick = function() {
  var pwd1 = document.getElementById("createRegit1").value;
  var pwd2 = document.getElementById("createRegit2").value;

  if(pwd1 != pwd2){
    document.getElementById("ifConfirmFalse").innerHTML = "密码确认不符合";
    document.getElementById("ifConfirmFalseE").innerHTML = "Password Confirmation Mismatch";
  }
  else{
    document.getElementById("createRegit").submit();
  }
  
}

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

document.getElementById("keyValiTrigger3").onclick = function() {
    document.getElementById("login3").submit();
}


var ck_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
var ck_password =  /^[A-Za-z0-9!@#$%^&*()_]{6,20}$/;


function validate(form){

 var email = form.elements["email"].value;
 var password = form.elements["pwd"].value;
 var errors = [];
  
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

document.getElementById("FKConfirm").onclick = function() {
    document.getElementById("createFK").submit();
}

          $(document).ready(function(){         
            $("#findkeyTrigger1").click(function(){
              $("#findkeyText").show();
              $("#ValiText").hide();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
            });
          });

          $(document).ready(function(){         
            $("#findkeyTrigger2").click(function(){
              $("#findkeyText").show();
              $("#ValiText").hide();
              $("#popUpText").hide();
              $("#container2").css({ opacity: 0.3 });
            });
          });

          $(document).ready(function(){         
            $("#findkeyTrigger3").click(function(){
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

          $( "#findkeyCancel" ).click(function () {           
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







//Mobile Menubar

          $( "#iconMobile" ).click(function () {
            if ( $( "#dropDownlistHolder" ).is( ":hidden" ) ) {
              $( "#dropDownlistHolder" ).slideDown( "slow" );
            } 
            else{
              $( "#dropDownlistHolder" ).slideUp( "slow" );
            }
          });

    $(".mobileMenu").mouseenter(function(){
                       $(this).css("background-color","#80b0db");  
                       $(this).children().css("color","white");  
                       $(this).children().children().css("color","white");        
                     });

    $(".mobileMenu").mouseleave(function(){
                       $(this).css("background-color","#eeeeee"); 
                       $(this).children().css("color","#898989");  
                       $(this).children().children().css("color","#898989");                  
                     });
        
    $("#mobileLabel").mouseenter(function(){ 
                       $(this).css("color","white");             
                     });

    $("#mobileLabel").mouseleave(function(){
                       $(this).css("color","#898989");                   
                     });


    $(document).ready(function(){         
            $("#mobileLoginTrigger").click(function(){
              $("#popUpText").show();
              $("#container2").css({ opacity: 0.3 });
            });
          });

    $(document).ready(function(){         
            $("#mobileShareTrigger").click(function(){
              $("#popUpText").show();
              $("#container2").css({ opacity: 0.3 });
            });
          });





// window load right size

$(document).ready(function() {

  if($(window).width() >= 783 && $(window).width() < 980){
   // screen difference
    var Diff = 1.123716618;
   // scale size variable
    var ScaleWidth2 = window.innerWidth*0.57324840764*Diff;
    var ScaleHeight2 = ScaleWidth2*0.91111111111;
    var ScaleWidth1 = window.innerWidth*0.2729754322*Diff;
    var ScaleHeight1 = ScaleWidth1*1.2066666667;
    var ScaleWidthAD = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightAD = ScaleWidthAD*0.64;
    var ScaleWidthCT = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightCT = ScaleWidthCT*2.38;
    var ScaleWidthAD2 = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightAD2 = ScaleWidthAD2*0.83;
    var ScaleWidthCT2 = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightCT2 = ScaleWidthCT2*1.473333333;
    var ScaleBackground = window.innerWidth*4.5491356;

    // scale size
    $(".content-2").css("width", ScaleWidth2+"px");
    $(".content-2").css("height", ScaleHeight2+"px");
    $(".content").css("width", ScaleWidth1+"px");
    $(".content").css("height", ScaleHeight1+"px");
    $(".advertise").css("width", ScaleWidthAD+"px");
    $(".advertise").css("height", ScaleHeightAD+"px");
    $(".content-text").css("width", ScaleWidthCT+"px");
    $(".content-text").css("height", ScaleHeightCT+"px");
    $(".advertise2").css("width", ScaleWidthAD2+"px");
    $(".advertise2").css("height", ScaleHeightAD2+"px");
    $(".content-text2").css("width", ScaleWidthCT2+"px");
    $(".content-text2").css("height", ScaleHeightCT2+"px");
    $("#contentHolderBackground").css("height", ScaleBackground+"px");
    $(".happening").css("width", window.innerWidth);
    $("#communityUpdate").css("width", window.innerWidth);
    $(".naviShowMenu").css("width", window.innerWidth);

  // scale position

    $(".advertise").css("left", window.innerWidth*0.600545950*Diff+"px");
    $(".content-text").css("top", window.innerWidth*0.2020018198*Diff+"px");
    $(".content-text").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex2").css("top", window.innerWidth*0.549586536*Diff+"px");
    $("#articleIndex3").css("top", window.innerWidth*0.549586536*Diff+"px");
    $("#articleIndex3").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex4").css("top", window.innerWidth*0.906278434*Diff+"px");
    $("#articleIndex5").css("top", window.innerWidth*0.906278434*Diff+"px");
    $("#articleIndex5").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex6").css("top", window.innerWidth*1.2629663330*Diff+"px");
    $("#articleADIndex1").css("top", window.innerWidth*1.619654231*Diff+"px");
    $("#articleIndex7").css("top", window.innerWidth*1.455868971*Diff+"px");
    $("#articleIndex7").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex8").css("top", window.innerWidth*1.455868971*Diff+"px");
    $("#articleIndex8").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex9").css("top", window.innerWidth*1.874431301*Diff+"px");
    $("#articleIndex10").css("top", window.innerWidth*1.81255687*Diff+"px");
    $("#articleIndex10").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex11").css("top", window.innerWidth*2.16924477*Diff+"px");
    $("#articleIndex11").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex12").css("top", window.innerWidth*2.52593267*Diff+"px");
    $("#articleIndex12").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex13").css("top", window.innerWidth*2.424021838*Diff+"px");
    $("#articleIndex14").css("top", window.innerWidth*2.424021838*Diff+"px");
    $("#articleIndex14").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex15").css("top", window.innerWidth*2.780709736*Diff+"px");
    $("#articleADIndex2").css("top", window.innerWidth*2.780709736*Diff+"px");
    $("#articleADIndex2").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex16").css("top", window.innerWidth*3.137397634*Diff+"px");
    $("#articleIndex17").css("top", window.innerWidth*3.035486806*Diff+"px");
    $("#articleIndex17").css("left", window.innerWidth*0.300270790*Diff+"px");
    $(".content-text2").css("top", window.innerWidth*3.494085532*Diff+"px");
    $("#articleIndex18").css("top", window.innerWidth*3.58507734*Diff+"px");
    $("#articleIndex18").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex19").css("top", window.innerWidth*3.58507734*Diff+"px");
    $("#articleIndex19").css("left", window.innerWidth*0.600545950*Diff+"px");
    $(".all-pages").css("top", window.innerWidth*3.95684258*Diff+"px");
    $(".all-pages").css("width", window.innerWidth-13);

  }  


  if($(window).width() >= 583 && $(window).width() < 783){
    // scale size & css
    $('.indicate').attr('src', '');

    $("#iconMobile" ).show();
    $(".content-2").css("width", window.innerWidth*0.95);
    $(".content-2").css("height", window.innerWidth*0.95*0.91111111111);
    $(".content").css("width", window.innerWidth*0.95*0.4761905);
    $(".content").css("height", window.innerWidth*0.95*0.4761905*1.2066666667);
    $("#contentHolderBackground").css("height", window.innerWidth*8.44286);


    // scale position

    $("#iconMobile" ).css("left", window.innerWidth-50+"px");

    $("#articleIndex1").css("left", window.innerWidth*0.01645);
    $("#articleIndex2").css("top", window.innerWidth*0.90857);
    $("#articleIndex2").css("left", window.innerWidth*0.01645);
    $("#articleIndex3").css("top", window.innerWidth*0.90857);
    $("#articleIndex3").css("left", window.innerWidth*0.51369);
    $("#articleIndex4").css("top", window.innerWidth*1.49714);
    $("#articleIndex4").css("left", window.innerWidth*0.01645);
    $("#articleIndex6").css("top", window.innerWidth*1.49714);
    $("#articleIndex6").css("left", window.innerWidth*0.51369);
    $("#articleIndex5").css("top", window.innerWidth*2.08571);
    $("#articleIndex5").css("left", window.innerWidth*0.01645);
    $("#articleIndex7").css("top", window.innerWidth*2.99429);
    $("#articleIndex7").css("left", window.innerWidth*0.01645);
    $("#articleIndex8").css("top", window.innerWidth*2.99429);
    $("#articleIndex8").css("left", window.innerWidth*0.51369);
    $("#articleIndex9").css("top", window.innerWidth*3.58286);
    $("#articleIndex9").css("left", window.innerWidth*0.01645);
    $("#articleIndex10").css("top", window.innerWidth*4.49143);
    $("#articleIndex10").css("left", window.innerWidth*0.01645);
    $("#articleIndex11").css("top", window.innerWidth*4.49143);
    $("#articleIndex11").css("left", window.innerWidth*0.51369);
    $("#articleIndex12").css("top", window.innerWidth*5.08);
    $("#articleIndex12").css("left", window.innerWidth*0.01645);
    $("#articleIndex13").css("top", window.innerWidth*5.08);
    $("#articleIndex13").css("left", window.innerWidth*0.51369);
    $("#articleIndex14").css("top", window.innerWidth*5.66857);
    $("#articleIndex14").css("left", window.innerWidth*0.01645);
    $("#articleIndex15").css("top", window.innerWidth*5.66857);
    $("#articleIndex15").css("left", window.innerWidth*0.51369);
    $("#articleIndex17").css("top", window.innerWidth*6.25714);
    $("#articleIndex17").css("left", window.innerWidth*0.01645);
    $("#articleIndex16").css("top", window.innerWidth*7.16571);
    $("#articleIndex16").css("left", window.innerWidth*0.01645);
    $("#articleIndex18").css("top", window.innerWidth*7.16571);
    $("#articleIndex18").css("left", window.innerWidth*0.51369);
    $("#articleIndex19").css("top", window.innerWidth*7.75429);
    $("#articleIndex19").css("left", window.innerWidth*0.01645);
    $(".all-pages").css("top", window.innerWidth*8.34000);
    $(".all-pages").css("width", window.innerWidth-13);
    $(".happening").css("width", window.innerWidth);
    $("#communityUpdate").css("width", window.innerWidth);
    $(".comm_All").css("width", 100+"%");


  }

  if($(window).width() < 583){

    $('.indicate').attr('src', '');

    $(".content-2").css("width", window.innerWidth*0.95);
    $(".content-2").css("height", window.innerWidth*0.95*0.91111111111);
    $(".content-2").css("left", 8+"px");
    $(".content-2").css("top", 0);
    $(".content-2").css("position","relative");
    $(".content-2").css("margin-bottom",30+"px");
    $(".content").css("width", window.innerWidth*0.95);
    $(".content").css("height", window.innerWidth*0.95*0.91111111111);
    $(".content").css("left", 8+"px");
    $(".content").css("top", 0);
    $(".content").css("position","relative");
    $(".content").css("margin-bottom",30+"px");
    $(".all-pages").css("top", 0);
    $(".all-pages").css("position","relative");
    $(".all-pages").css("height","auto");
    $(".all-pages").css("width", window.innerWidth-13);
    $("#contentHolderBackground").css("height", "auto");
    $(".happening").css("width", window.innerWidth);


    // scale position

    $("#iconMobile" ).css("left", window.innerWidth-50+"px");

  }

});


























// window resize function

$(window).resize(function() {


    if($(window).width() >= 783 && $(window).width() < 980){


            if ( !$( "#dropDownlistHolder" ).is( ":hidden" ) ) {
              $( "#dropDownlistHolder" ).slideUp( "slow" );
            }


   // screen difference
    var Diff = 1.123716618;
   // scale size variable
    var ScaleWidth2 = window.innerWidth*0.57324840764*Diff;
    var ScaleHeight2 = ScaleWidth2*0.91111111111;
    var ScaleWidth1 = window.innerWidth*0.2729754322*Diff;
    var ScaleHeight1 = ScaleWidth1*1.2066666667;
    var ScaleWidthAD = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightAD = ScaleWidthAD*0.64;
    var ScaleWidthCT = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightCT = ScaleWidthCT*2.38;
    var ScaleWidthAD2 = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightAD2 = ScaleWidthAD2*0.83;
    var ScaleWidthCT2 = window.innerWidth*0.2729754322*Diff;
    var ScaleHeightCT2 = ScaleWidthCT2*1.473333333;
    var ScaleBackground = window.innerWidth*4.5491356;
    $('.indicate').attr('src', 'img/header_light.png');

    // scale size
    $("#iconMobile" ).hide();

    $(".content-2").css("width", ScaleWidth2+"px");
    $(".content-2").css("height", ScaleHeight2+"px");
    $(".content").css("width", ScaleWidth1+"px");
    $(".content").css("height", ScaleHeight1+"px");
    $(".advertise").css("width", ScaleWidthAD+"px");
    $(".advertise").css("height", ScaleHeightAD+"px");
    $(".content-text").css("width", ScaleWidthCT+"px");
    $(".content-text").css("height", ScaleHeightCT+"px");
    $(".advertise2").css("width", ScaleWidthAD2+"px");
    $(".advertise2").css("height", ScaleHeightAD2+"px");
    $(".content-text2").css("width", ScaleWidthCT2+"px");
    $(".content-text2").css("height", ScaleHeightCT2+"px");
    $("#contentHolderBackground").css("height", ScaleBackground+"px");
    $(".happening").css("width", window.innerWidth);
    $("#communityUpdate").css("width", window.innerWidth);
    $(".naviShowMenu").css("width", window.innerWidth);

  // scale position

    $(".advertise").css("left", window.innerWidth*0.600545950*Diff+"px");
    $(".content-text").css("top", window.innerWidth*0.2020018198*Diff+"px");
    $(".content-text").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex2").css("top", window.innerWidth*0.549586536*Diff+"px");
    $("#articleIndex2").css("left", 0);
    $("#articleIndex3").css("top", window.innerWidth*0.549586536*Diff+"px");
    $("#articleIndex3").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex4").css("top", window.innerWidth*0.906278434*Diff+"px");
    $("#articleIndex4").css("left", 0);
    $("#articleIndex5").css("top", window.innerWidth*0.906278434*Diff+"px");
    $("#articleIndex5").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex6").css("top", window.innerWidth*1.2629663330*Diff+"px");
    $("#articleIndex6").css("left", 0);
    $("#articleADIndex1").css("top", window.innerWidth*1.619654231*Diff+"px");
    $("#articleIndex7").css("top", window.innerWidth*1.455868971*Diff+"px");
    $("#articleIndex7").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex8").css("top", window.innerWidth*1.455868971*Diff+"px");
    $("#articleIndex8").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex9").css("top", window.innerWidth*1.874431301*Diff+"px");
    $("#articleIndex9").css("left", 0);
    $("#articleIndex10").css("top", window.innerWidth*1.81255687*Diff+"px");
    $("#articleIndex10").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex11").css("top", window.innerWidth*2.16924477*Diff+"px");
    $("#articleIndex11").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex12").css("top", window.innerWidth*2.52593267*Diff+"px");
    $("#articleIndex12").css("left", window.innerWidth*0.600545950*Diff+"px");
    $("#articleIndex13").css("top", window.innerWidth*2.424021838*Diff+"px");
    $("#articleIndex13").css("left", 0);
    $("#articleIndex14").css("top", window.innerWidth*2.424021838*Diff+"px");
    $("#articleIndex14").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex15").css("top", window.innerWidth*2.780709736*Diff+"px");
    $("#articleIndex15").css("left", 0);
    $("#articleADIndex2").css("top", window.innerWidth*2.780709736*Diff+"px");
    $("#articleADIndex2").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex16").css("top", window.innerWidth*3.137397634*Diff+"px");
    $("#articleIndex16").css("left", 0);
    $("#articleIndex17").css("top", window.innerWidth*3.035486806*Diff+"px");
    $("#articleIndex17").css("left", window.innerWidth*0.300270790*Diff+"px");
    $(".content-text2").css("top", window.innerWidth*3.494085532*Diff+"px");
    $("#articleIndex18").css("top", window.innerWidth*3.58507734*Diff+"px");
    $("#articleIndex18").css("left", window.innerWidth*0.300270790*Diff+"px");
    $("#articleIndex19").css("top", window.innerWidth*3.58507734*Diff+"px");
    $("#articleIndex19").css("left", window.innerWidth*0.600545950*Diff+"px");
    $(".all-pages").css("top", window.innerWidth*3.95684258*Diff+"px");
    $(".all-pages").css("width", window.innerWidth-13);
    $(".comm_All").css("width", 45+"%");

  }  


  else if($(window).width() >= 980){

    if($(window).width() >= 1099){
      $( ".floatTextBox" ).show();
    }

    // scale size
    $(".content-2").css("width", 39.375+"em");
    $(".content-2").css("height", 35.875+"em");
    $(".content").css("width", 18.750+"em");
    $(".content").css("height", 22.625+"em");
    $(".advertise").css("width", 18.750+"em");
    $(".advertise").css("height", 12.000+"em");
    $(".content-text").css("width", 18.750+"em");
    $(".content-text").css("height", 44.625+"em");
    $(".advertise2").css("width", 18.750+"em");
    $(".advertise2").css("height", 15.625+"em");
    $(".content-text2").css("width", 18.750+"em");
    $(".content-text2").css("height", 27.625+"em");
    $("#contentHolderBackground").css("height", 276.250+"em");
    $(".happening").css("width", 60.000+"em");
    $("#communityUpdate").css("width", 60.000+"em");
    $(".naviShowMenu").css("width", 100 + "%");

  // scale position

    $(".advertise").css("left", 41.250+"em");
    $(".content-text").css("top", 13.875+"em");
    $(".content-text").css("left", 41.250+"em");
    $("#articleIndex2").css("top", 37.750+"em");
    $("#articleIndex3").css("top", 37.750+"em");
    $("#articleIndex3").css("left", 20.625+"em");
    $("#articleIndex4").css("top", 62.250+"em");
    $("#articleIndex5").css("top", 62.250+"em");
    $("#articleIndex5").css("left", 20.625+"em");
    $("#articleIndex6").css("top", 86.750+"em");
    $("#articleADIndex1").css("top", 111.250+"em");
    $("#articleIndex7").css("top", 100.000+"em");
    $("#articleIndex7").css("left", 20.625+"em");
    $("#articleIndex8").css("top", 100.000+"em");
    $("#articleIndex8").css("left", 41.250+"em");
    $("#articleIndex9").css("top", 128.750+"em");
    $("#articleIndex10").css("top", 124.500+"em");
    $("#articleIndex10").css("left", 41.250+"em");
    $("#articleIndex11").css("top", 149.000+"em");
    $("#articleIndex11").css("left", 41.250+"em");
    $("#articleIndex12").css("top", 173.500+"em");
    $("#articleIndex12").css("left", 41.250+"em");
    $("#articleIndex13").css("top", 166.500+"em");
    $("#articleIndex14").css("top", 166.500+"em");
    $("#articleIndex14").css("left", 20.625+"em");
    $("#articleIndex15").css("top", 191.000+"em");
    $("#articleADIndex2").css("top", 191.000+"em");
    $("#articleADIndex2").css("left",20.625+"em");
    $("#articleIndex16").css("top", 215.500+"em");
    $("#articleIndex17").css("top", 208.500+"em");
    $("#articleIndex17").css("left", 20.625+"em");
    $(".content-text2").css("top", 240.000+"em");
    $("#articleIndex18").css("top", 246.250+"em");
    $("#articleIndex18").css("left", 20.625+"em");
    $("#articleIndex19").css("top", 246.250+"em");
    $("#articleIndex19").css("left", 41.250+"em");
    $(".all-pages").css("top", 310.938+"em");
    $(".all-pages").css("width",100 + "%");

  }

  if($(window).width() >= 583 && $(window).width() < 783){
    // scale size & css
    $('.indicate').attr('src', '');

    if($("#sub-header-nav").is( ":visible" )){
        $( "#sub-header-nav" ).slideUp( "slow" );
        $( "#button" ).hide();
        $( ".naviShowMenu" ).show(); 
        $( "#header" ).css({"position": "relative"});
      }


    $("#iconMobile" ).show();
    $(".content-2").css("width", window.innerWidth*0.95);
    $(".content-2").css("height", window.innerWidth*0.95*0.91111111111);
    $(".content").css("width", window.innerWidth*0.95*0.4761905);
    $(".content").css("height", window.innerWidth*0.95*0.4761905*1.2066666667);
    $("#contentHolderBackground").css("height", window.innerWidth*8.44286);

    $(".content-2").css("position","absolute");
    $(".content").css("position","absolute");
    $(".content-2").css("margin-bottom",0);
    $(".content").css("margin-bottom",0);
    $(".all-pages").css("position","absolute");
    $(".all-pages").css("height",1.313+"em");


    // scale position

    $("#iconMobile" ).css("left", window.innerWidth-70+"px");

    $("#articleIndex1").css("left", window.innerWidth*0.01645);
    $("#articleIndex2").css("top", window.innerWidth*0.90857);
    $("#articleIndex2").css("left", window.innerWidth*0.01645);
    $("#articleIndex3").css("top", window.innerWidth*0.90857);
    $("#articleIndex3").css("left", window.innerWidth*0.51369);
    $("#articleIndex4").css("top", window.innerWidth*1.49714);
    $("#articleIndex4").css("left", window.innerWidth*0.01645);
    $("#articleIndex6").css("top", window.innerWidth*1.49714);
    $("#articleIndex6").css("left", window.innerWidth*0.51369);
    $("#articleIndex5").css("top", window.innerWidth*2.08571);
    $("#articleIndex5").css("left", window.innerWidth*0.01645);
    $("#articleIndex7").css("top", window.innerWidth*2.99429);
    $("#articleIndex7").css("left", window.innerWidth*0.01645);
    $("#articleIndex8").css("top", window.innerWidth*2.99429);
    $("#articleIndex8").css("left", window.innerWidth*0.51369);
    $("#articleIndex9").css("top", window.innerWidth*3.58286);
    $("#articleIndex9").css("left", window.innerWidth*0.01645);
    $("#articleIndex10").css("top", window.innerWidth*4.49143);
    $("#articleIndex10").css("left", window.innerWidth*0.01645);
    $("#articleIndex11").css("top", window.innerWidth*4.49143);
    $("#articleIndex11").css("left", window.innerWidth*0.51369);
    $("#articleIndex12").css("top", window.innerWidth*5.08);
    $("#articleIndex12").css("left", window.innerWidth*0.01645);
    $("#articleIndex13").css("top", window.innerWidth*5.08);
    $("#articleIndex13").css("left", window.innerWidth*0.51369);
    $("#articleIndex14").css("top", window.innerWidth*5.66857);
    $("#articleIndex14").css("left", window.innerWidth*0.01645);
    $("#articleIndex15").css("top", window.innerWidth*5.66857);
    $("#articleIndex15").css("left", window.innerWidth*0.51369);
    $("#articleIndex17").css("top", window.innerWidth*6.25714);
    $("#articleIndex17").css("left", window.innerWidth*0.01645);
    $("#articleIndex16").css("top", window.innerWidth*7.16571);
    $("#articleIndex16").css("left", window.innerWidth*0.01645);
    $("#articleIndex18").css("top", window.innerWidth*7.16571);
    $("#articleIndex18").css("left", window.innerWidth*0.51369);
    $("#articleIndex19").css("top", window.innerWidth*7.75429);
    $("#articleIndex19").css("left", window.innerWidth*0.01645);
    $(".all-pages").css("top", window.innerWidth*8.34000);
    $(".all-pages").css("width", window.innerWidth-13);
    $(".happening").css("width", window.innerWidth);
    $("#communityUpdate").css("width", window.innerWidth);
    $(".comm_All").css("width", 100+"%");
    $("#dropDownlistHolder").css("width", window.innerWidth);

  }

  if($(window).width() < 583){

    $('.indicate').attr('src', '');

    $(".content-2").css("width", window.innerWidth*0.95);
    $(".content-2").css("height", window.innerWidth*0.95*0.91111111111);
    $(".content-2").css("left", 5+"px");
    $(".content-2").css("top", 0);
    $(".content-2").css("position","relative");
    $(".content-2").css("margin-bottom",30+"px");
    $(".content").css("width", window.innerWidth*0.95);
    $(".content").css("height", window.innerWidth*0.95*0.91111111111);
    $(".content").css("left", 5+"px");
    $(".content").css("top", 0);
    $(".content").css("position","relative");
    $(".content").css("margin-bottom",30+"px");
    $(".all-pages").css("top", 0);
    $(".all-pages").css("position","relative");
    $(".all-pages").css("height","auto");
    $(".all-pages").css("width", window.innerWidth-13);
    $("#contentHolderBackground").css("height", "auto");
    $(".happening").css("width", window.innerWidth);


    // scale position

    $("#iconMobile" ).css("left", window.innerWidth-70+"px");

  }

});

