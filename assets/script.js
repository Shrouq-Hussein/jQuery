let showSpecificContent= function(){
    $(".content").hide()
    console.log($(".active").attr('id'))
    $(`[data-content= ${$('.active').attr('id')}]`).show()
 }
$("document").ready(
    // $(".content").html($( ".active" ).text()))
    // $(".nav-item").on("click",".nav-link",function (){
    //     console.log($( this ).text())
    //     $(".nav-link").removeClass("active")
    //     $(this).addClass("active")
    //     $(".content").html($( this ).text())
    // }
    showSpecificContent()
    
    )

     $(".nav-item").on("click",".nav-link",function (){
        console.log($( this ).text())
        $(".nav-link").removeClass("active")
        $(this).addClass("active")
        showSpecificContent()

    })



