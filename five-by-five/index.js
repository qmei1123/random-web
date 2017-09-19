/*Random Color Box*/
function getEmptyColor(){
    var randnum = Math.random();
        var inum = 20;
        var rand1 = Math.round(randnum * (inum-1));
        var colors = new Array("#ffffff", "#B10F2E", "#ffffff", "#ffffff", "#EC9A29", "#ffffff", "#EC9A29", "#ffffff", "#ffffff", "#ffffff", "#1F2953", "#B10F2E", "#ffffff", "#ACBEA3", "#ffffff", "#ffffff", "#1F2953","#ffffff", "#ffffff", "#ffffff",);
        var color = colors[rand1];
        return color;
};  

$(".small-box").each(function(){
    $(this).css("background-color", getEmptyColor());
});    
