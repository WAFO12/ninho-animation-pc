// $(function(){
//    
//    var video=["video/Arme de poing.mp4","video/bon qu'a ca.mp4","video/bad.mp4","video/No Love.mp4","video/jefe.mp4","video/verite.mp4"]
//    $(".pannel").click(function(){
//     var index = $(this).data(),
//     src=video[index];
//     $(".extrait")[index].fadeIut()
//     $("video").attr("src",src)
//     alert("lol")
//    })
// })
$(function() {
    var video = ["video/Arme de poing.mp4", "video/bon qu'a ca.mp4", "video/bad.mp4", "video/No Love.mp4", "video/jefe.mp4", "video/verite.mp4"];
    $(".extrait").hide()
    $(".pannel").click(function() {
       var x = $(this).index();
       console.log(x)
       var src = video[x];
       $("video").attr("src", src);
       $(".extrait").hide(2000)
        $(this).find(".extrait").show(3000);
    });
 });