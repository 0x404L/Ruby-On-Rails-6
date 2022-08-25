document.addEventListener("DOMContentLoaded", function(){
    //dom is fully loaded, but maybe waiting on images & css files
});

window.addEventListener("load", function(){
    //everything is fully loaded, don't use me if you can use DOMContentLoaded
});

window.onload = function() {
   setTimeout(loadAfterTime, 5000)
};

function loadAfterTime(){
   document.getElementById("menu").style.display="block";
}
