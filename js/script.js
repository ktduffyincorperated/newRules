
$(document).ready(function() {
    
    pagesHide();
    
    $(".enter").on("click", function(){
        $("#pageOne, .enter").slideUp("slow");
        $("#pageTwo").show();
    });

    $("#kt").on("click", function(){
        $("#pageTwo").hide();
        $("#KTPop").show();
    });

    $("#rashin").on("click", function(){
        $("#pageTwo").hide();
        $("#rashinPop").show();
    });
    
    $("#shawnee").on("click", function(){
        $("#pageTwo").hide();
        $("#shawneePop").show();
    });
    
    $("#sue").on("click", function(){
        $("#pageTwo").hide();
        $("#suePop").show();
    });
    
    $("#chelsea").on("click", function(){
        $("#pageTwo").hide();
        $("#chelseaPop").show();
    });

    $(".ex").on("click", function(){
        $("#pageTwo").show();
        $("#KTPop, #RashinPop, #shawneePop, #suePop, #chelseaPop").hide();
    });
    
    $(".home").on("click", function(){
        console.log("works");
        $("#pageOne").slideDown();
        $("#pageTwo").slideUp();
        $(".enter").show();
        
    });
    
    
 function pagesHide(){
    $("#KTPop, #rashinPop, #shawneePop, #suePop, #chelseaPop").hide();
    $("#pageTwo").hide();
}   
    
    
    
    

});
   



