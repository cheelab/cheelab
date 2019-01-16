$(document).ready(function(){
  
    $(".more-text").hide();
    $(".more-text2").hide();
    $(".more-text3").hide();
    $(".more-text4").hide();
    $(".more-text5").hide();
    $(".more-text6").hide();
    $(".more-text7").hide();
    $(".more-text8").hide();
    $(".more-text9").hide();
    $(".more-text10").hide();
    $(".more-text11").hide();
    $(".more-text12").hide();
    $(".more-text13").hide();
    $(".more1").hide();
    $(".more2").hide();
    $(".more3").hide();
    $(".more4").hide();
    $(".more5").hide();
    $(".more6").hide();
    $(".more7").hide();
    $(".more8").hide();
    $(".more9").hide();
    $(".more10").hide();
    $(".more11").hide();
    $(".more12").hide();
    $(".more13").hide();
  
  ////////////////////////////////////////////////// -------------- ROW 1 ---------------////////////////////////////////////////////////////////////
  
function a(){ 
    
    $("#info-left").animate({
      height:'33vw',
       top: '75vw'
      });
      
      $("#info-left").css('opacity', '0.988');
      $(".less1").hide();
      
      $(".more-text").show();
      $(".more-text").animate({
       top: '12vw'
      });
      $(".less-text").animate({
       top: '26.9vw'
      });
      
      $(".more1").show();
       }
function b(){ 
  
  $("#info-left").animate({
      height:'7vw',
     top: '101vw'
    
      });
      $("#info-left").css('opacity', '1');
      $(".more1").hide();
      $(".more-text").hide();
      $(".less-text").animate({
       top: '1vw'
      });
      $(".less1").show();
      }
var ab = [a,b];
$(".sele1").click(function(){
  ab.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
function a2(){ 
    
    $("#info-middle").animate({
      height:'33vw',
       top: '75vw'
      });
      
      $("#info-middle").css('opacity', '0.988');
      
  $(".less-text2").css('top', '12');
      $(".more-text2").show();
      $(".more-text2").animate({
       top: '12vw',
        left:'4vw',
      });
      $(".less2").hide();
      $(".more2").show();
       }
function b2(){ 
  
  $("#info-middle").animate({
      height:'7vw',
     top: '101vw'
      });
  
      $("#info-middle").css('opacity', '1');
      $(".more2").hide();
      $(".more-text2").hide();
      
      $(".less2").show();
      }
var ab2 = [a2,b2];
$(".sele2").click(function(){
  ab2.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
function a3(){ 
    
    $("#info-right").animate({
      height:'33vw',
       top: '75vw'
      });
      
      $("#info-right").css('opacity', '0.988');
       
      $(".more-text3").show();
      $(".more-text3").animate({
       top: '8vw',
        left:'0vw',
        padding:'2vw'
      });
      $(".less3").hide();
      $(".more3").show();
       }
function b3(){ 
  
  $("#info-right").animate({
      height:'7vw',
     top: '101vw'
      });
  
      $("#info-right").css('opacity', '1');
      $(".more3").hide();
      
      $(".more-text3").hide();
      $(".less3").show();
      } 
var ab3 = [a3,b3];
$(".sele3").click(function(){
  ab3.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
  //////////////////////////////////////////// --------------------- ROW 2 ------------------- ///////////////////////////////////////////////////

function a4(){ 
    
    $("#info-left2").animate({
      height:'33.5vw',
       top: '114.5vw'
      });
      
      $("#info-left2").css('opacity', '0.988');
      
      $(".more-text4").show();
      $(".more-text4").animate({
        top: '6vw',
        left:'0vw',
        padding:'2vw'
      });
      $(".less4").hide();
      $(".more4").show();
       }  
function b4(){ 
  
  $("#info-left2").animate({
      height:'7vw',
     top: '140.5vw'
      });
  
      $("#info-left2").css('opacity', '1');
      $(".more4").hide();
      $(".more-text4").hide();
      $(".less4").show();
      }
var ab4 = [a4,b4];
$(".sele4").click(function(){
  ab4.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});

  /*  
function a5(){ 
    
    $("#info-middle2").animate({
      height:'33.5vw',
       top: '114.5vw'
      });
      
      $("#info-middle2").css('opacity', '0.988');
      $(".more-text5").show();
      $(".more-text5").animate({
        top: '6vw',
        left:'0vw',
        padding:'2vw'
      });
      
      $(".less5").hide();
      $(".more5").show();
       }
function b5(){ 
  
  $("#info-middle2").animate({
      height:'7vw',
     top: '140.5vw'
      });
      
      $("#info-middle2").css('opacity', '1');
      
      $(".more-text5").hide();
      $(".more5").hide();
      $(".less5").show();
      }
  
var ab5 = [a5,b5];
$(".sele5").click(function(){
  ab5.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
*/  

  /*
function a6(){ 
    
    $("#info-right2").animate({
      height:'33.5vw',
       top: '114.5vw'
      });
      
      $("#info-right2").css('opacity', '0.988');
      
      $(".less6").hide();
      $(".more6").show();
       }
function b6(){ 
  
  $("#info-right2").animate({
      height:'7vw',
     top: '140.5vw'
      });
  
      $("#info-right2").css('opacity', '1');
      $(".more6").hide();
      
      $(".less6").show();
      } 
var ab6 = [a6,b6];
$(".sele6").click(function(){
  ab6.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});*/
  
  //////////////////////////////////////////// --------------------- ROW 3 ------------------- ///////////////////////////////////////////////////
  
  function a7(){ 
    
    $("#info-left3").animate({
      height:'33.5vw',
       top: '154vw'
      });
      
      $("#info-left3").css('opacity', '0.988');
       $(".more-text7").show();
      $(".more-text7").animate({
        top: '12vw',
        left:'7vw',
        
      });
      $(".less-text7").animate({
       top: '26.9vw'
      });
      $(".less7").hide();
      $(".more7").show();
       }  
function b7(){ 
  
  $("#info-left3").animate({
      height:'7vw',
     top: '180.5vw'
      });
  
      $("#info-left3").css('opacity', '1');
    $(".more-text7").hide();
      $(".less-text7").animate({
       top: '1vw'
      });
      $(".more7").hide();
      $(".less7").show();
      }
var ab7 = [a7,b7];
$(".sele7").click(function(){
  ab7.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
function a8(){ 
    
    $("#info-middle3").animate({
      height:'33.5vw',
       top: '154vw'
      });
      
      $("#info-middle3").css('opacity', '0.988');
      $(".more-text8").show();
      $(".more-text8").animate({
        top: '12vw',
        left:'2vw',
        
      });
      $(".less-text8").animate({
       top: '26.9vw'
      });
      $(".less8").hide();
      $(".more8").show();
       }
function b8(){ 
  
  $("#info-middle3").animate({
      height:'7vw',
     top: '180.5vw'
      });
  
      $("#info-middle3").css('opacity', '1');
      $(".more-text8").hide();
      $(".less-text8").animate({
       top: '1vw'
      });
      $(".more8").hide();
      $(".less8").show();
      }
  
var ab8 = [a8,b8];
$(".sele8").click(function(){
  ab8.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
  
function a9(){ 
    
    $("#info-right3").animate({
      height:'33.5vw',
       top: '154vw'
      });
      
      $("#info-right3").css('opacity', '0.988');
      $(".more-text9").show();
      $(".more-text9").animate({
        top: '6vw',
        left:'0vw',
        padding:'2vw'
      });
      $(".less9").hide();
      $(".more9").show();
       }
function b9(){ 
  
  $("#info-right3").animate({
      height:'7vw',
     top: '180.5vw'
      });
  
      $("#info-right3").css('opacity', '1');
      $(".more-text9").hide();
      $(".more9").hide();
      $(".less9").show();
      } 
var ab9 = [a9,b9];
$(".sele9").click(function(){
  ab9.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
   //////////////////////////////////////////// --------------------- ROW 4 ------------------- ///////////////////////////////////////////////////
  
   function a10(){ 
    
    $("#info-left4").animate({
      height:'33.5vw',
       top: '194vw'
      });
      
      $("#info-left4").css('opacity', '0.988');
       $(".more-text10").show();
      $(".more-text10").animate({
        top: '6vw',
        left:'0vw',
        padding:'2vw'
      });
      $(".less10").hide();
      $(".more10").show();
       }  
function b10(){ 
  
  $("#info-left4").animate({
      height:'7vw',
     top: '220.5vw'
      });
  
      $("#info-left4").css('opacity', '1');
      $(".more10").hide();
      $(".more-text10").hide();
      $(".less10").show();
      }
var ab10 = [a10,b10];
$(".sele10").click(function(){
  ab10.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
function a11(){ 
    
    $("#info-middle4").animate({
      height:'33.5vw',
       top: '194vw'
      });
      
      $("#info-middle4").css('opacity', '0.988');
       $(".more-text11").show();
      $(".more-text11").animate({
        top: '8vw',
        left:'0vw',
        padding:'2vw'
        
      });
      $(".less-text11").animate({
       top: '26.9vw'
      });
      $(".less11").hide();
      $(".more11").show();
       }
function b11(){ 
  
  $("#info-middle4").animate({
      height:'7vw',
     top: '220.5vw'
      });
  
      $("#info-middle4").css('opacity', '1');
       $(".more-text11").hide();
      $(".less-text11").animate({
       top: '1vw'
      });
      $(".more11").hide();
      $(".less11").show();
      }
  
var ab11 = [a11,b11];
$(".sele11").click(function(){
  ab11.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
  
function a12(){ 
    
    $("#info-right4").animate({
      height:'33.5vw',
       top: '194vw'
      });
      
      $("#info-right4").css('opacity', '0.988');
      
       $(".more-text12").show();
      $(".more-text12").animate({
        top: '8vw',
        left:'4vw',
        padding:'0vw'
        
      });
      $(".less-text12").animate({
       top: '26.9vw'
      });
      $(".less12").hide();
      $(".more12").show();
       }
function b12(){ 
  
  $("#info-right4").animate({
      height:'7vw',
     top: '220.5vw'
      });
  
      $("#info-right4").css('opacity', '1');
       $(".more-text12").hide();
      $(".less-text12").animate({
       top: '1vw'
      });
      $(".more12").hide();
      $(".less12").show();
      } 
var ab12 = [a12,b12];
$(".sele12").click(function(){
  ab12.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
  ////////////////////// ---------- THE BOSS --------------- /////////////////////////////
  
  function a13(){ 
    
    $(".meinfo").animate({
      height:'33vw',
       top: '35vw'
      });
      
      $(".meinfo").css('opacity', '0.988');
      $(".meless").hide();
      $(".memore").show();
       }
function b13(){ 
  
  $(".meinfo").animate({
      height:'7vw',
     top: '61vw'
      });
  
      $(".meinfo").css('opacity', '1');
      $(".more12").hide();
      $(".less12").show();
      } 
var ab13 = [a13,b13];
$(".sele13").click(function(){
  ab13.reverse()[1](); // Reverse and Execute! // >> "a","b","a","b"...
});
  
  
  
  $(".fa fa-bars").click(function(){
      
      
      
      $('.dropdown-content').toggle();
     
      
    });
      
      
  
    
});