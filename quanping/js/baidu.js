$(function(){
    var clientH=$(window).height();
    var flag=true;
    var num=0;
    $(".content").mousedown(function(e){
        e.preventDefault();
    })
    $(".content").mousemove(function(e){
        e.preventDefault();
    })
    touch.on("body","swipeup","#fullpage",function(){

        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;

        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clientH);
    })




    touch.on("body","swipedown","#fullpage",function(){

        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*clientH);
    })

    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    })

    //菜单的操作
    var flag2=true;

    $(".menuOption").click(function(){
        if(flag2){
            $(this).find(".tline").css({
                transform:"translate(0,5px) rotate(45deg)"
            })
            $(this).find(".bline").css({
                transform:"translate(0,-5px) rotate(-45deg)"
            })

            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opactiy:0,
                    transform:"rotateX(90deg)",
                    animation:"menu .3s linear forwards "+0.2*index+"s"
                })
            })
            flag2=false;
        }else{
            $(this).find(".tline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(this).find(".bline").css({
                transform:"translate(0,0) rotate(0deg)"
            })
            $(".menu a").each(function(index,obj){
                $(obj).css({
                    opactiy:1,
                    transform:"rotateX(0deg)",
                    animation:"menu1 .3s linear forwards "+(1.2-0.2*index)+"s"
                })
            })
            flag2=true;
        }
    })
    $(window).resize(function(){
        clientH=$(window).height();
        var clientW=$(window).width();
        $("#fullpage").css("marginTop",clientH*-num);
        if(clientW>1000){
            $(".menu a").css({
                animation:"none",
                opacty:0,
                transform:"rotate(90deg)"
            })

        }

    })
    $(".clound").each(function(index,obj){
        $(obj).css({
            animation:"clound .3s linear forwards"
        })
    })
    $()
})