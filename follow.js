var windowHeight = $(window).height();
var menuBarHeight = $("#menubar").height();
var codeContainerHeight = windowHeight - menuBarHeight;
$(".codecontainer").height(codeContainerHeight + "px");
$(".selectorbuttons").click(function(){
    $(this).toggleClass("toggleselected");
    var activeDiv = $(this).text().trim();
    var container = "#"+activeDiv+"container";
    $(container).toggle();
    var numberOfActiveDivs = $(".codecontainer").filter(function(){
        return ($(this).css("display")!== "none");
    }).length;
    var widthContainer = 100 / numberOfActiveDivs;
    $(".codecontainer").css("width", widthContainer+"%");
});

$("#runbutton").click(function(){
    $("iframe").contents().find("html").html('<style>'+$("#csscode").val()+'</style>' + $("#htmlcode").val());
    document.getElementById("resultframe").contentWindow.eval($("#jscode").val());

});
