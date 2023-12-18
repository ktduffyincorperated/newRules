
$(document).ready(function() {
    
    pagesHide();
    
    $(".enter").on("click", function(){
        $("#pageOne, .enter").slideUp("slow");
        $("#pageTwo").show();
        $("html").scrollTop(0);
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
        $("#KTPop, #rashinPop, #shawneePop, #suePop, #chelseaPop").hide();
    });
    
    $(".home").on("click", function(){
        console.log("works");
        $("#pageOne").slideDown();
        $("#pageTwo").slideUp();
        $(".enter").show();
        
    });

    $(".ktFooter").on("click", function(){
        $("#KTPop").show();

        
    });



    // footer

    $(".ktFooter").on("click", function(){
        $("#ktPop").show();
        $("#pageOne, #pageTwo").hide();
        $("#rashinPop, #shawneePop, #suePop, #chelseaPop").hide();
        $("html").scrollTop(0);
    });

    $(".rashinFooter").on("click", function(){
        $("#rashinPop").show();
        $("#pageOne, #pageTwo").hide();
        $("#KTPop, #shawneePop, #suePop, #chelseaPop").hide();
        $("html").scrollTop(0);
    });

    $(".shawneeFooter").on("click", function(){
        $("#shawneePop").show();
        $("#pageOne, #pageTwo").hide();
        $("#KTPop, #rashinPop, #suePop, #chelseaPop").hide();
        $("html").scrollTop(0);
    });

    
    $(".sueFooter").on("click", function(){
        $("#suePop").show();
        $("#pageOne, #pageTwo").hide();
        $("#KTPop, #rashinPop, #shawneePop, #chelseaPop").hide();
        $("html").scrollTop(0);
    });

    
    $(".chelseaFooter").on("click", function(){
        $("#chelseaPop").show();
        $("#pageOne, #pageTwo").hide();
        $("#KTPop, #rashinPop, #shawneePop, #suePop").hide();
        $("html").scrollTop(0);
    });


    
    
 function pagesHide(){
    $("#KTPop, #rashinPop, #shawneePop, #suePop, #chelseaPop").hide();
    $("#pageTwo").hide();
} 

function oneTwoHide(){
    $("#pageOne, #pageTwo").hide();
}
    
    
    
    

});
   



