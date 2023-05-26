
var menu = document.getElementById('menu');
var close = document.getElementById('close');

menu.addEventListener('click',function(){
    document.getElementById("navbar").style.display = "block";
    document.getElementById("menu").style.display = "none";
    document.getElementById("close").style.display = "block";

})

close.addEventListener('click',function(){
    document.getElementById("navbar").style.display = "none";
    document.getElementById("menu").style.display = "block";
    document.getElementById("close").style.display = "none";

})

