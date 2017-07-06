/**
 * Created by Administrator on 2016/10/13.
 */
$(document).ready(function(){

    $("#get").click(function(){
       $("#mask").css("display","block");
    });

    $(".prize1").click(function(){
        $(".prize2").removeClass('choosed');
        $(".prize2 img").removeClass('choosed-icon');


        $(".prize1").addClass('choosed');
        $(".prize1 img").addClass('choosed-icon');
    });
    $(".prize2").click(function(){
        $(".prize1").removeClass('choosed');
        $(".prize1 img").removeClass('choosed-icon');


        $(".prize2").addClass('choosed');
        $(".prize2 img").addClass('choosed-icon');
    });



    //$("input[type=text]").focus(function(){
    //    $("this").css("border","1px solid #9d21f4");
    //});


});